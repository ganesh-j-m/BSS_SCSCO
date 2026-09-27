import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PersonRecord } from '../../data/officialData';
import { PersonCard } from '../ui/PersonCard';
import { PhotoUploadModal } from '../ui/PhotoUploadModal';
import { Search, Filter, Plus, Users, Award, Shield } from 'lucide-react';

export const FacultyView: React.FC = () => {
  const { allPeople, updatePerson, addPerson, currentUser } = useApp();
  const [search, setSearch] = useState('');
  const [selectedWing, setSelectedWing] = useState<'All' | 'teaching_senior' | 'teaching_junior'>('All');
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [editingPerson, setEditingPerson] = useState<PersonRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Filter only teaching staff
  const teachingStaff = allPeople.filter(p => 
    p.roleCategory === 'teaching_senior' || p.roleCategory === 'teaching_junior'
  );

  // Unique departments for filter
  const departments = Array.from(new Set(teachingStaff.map(p => p.department).filter(Boolean))) as string[];

  const filteredFaculty = teachingStaff.filter(person => {
    const matchesWing = selectedWing === 'All' || person.roleCategory === selectedWing;
    const matchesDept = selectedDept === 'All' || person.department === selectedDept;
    const matchesSearch = person.name.toLowerCase().includes(search.toLowerCase()) ||
                          (person.qualification && person.qualification.toLowerCase().includes(search.toLowerCase())) ||
                          (person.phone && person.phone.includes(search)) ||
                          (person.department && person.department.toLowerCase().includes(search.toLowerCase()));
    return matchesWing && matchesDept && matchesSearch;
  });

  const handleEditClick = (person: PersonRecord) => {
    setEditingPerson(person);
    setIsAddingNew(false);
    setIsModalOpen(true);
  };

  const handleAddNewClick = () => {
    const blankPerson: PersonRecord = {
      id: '',
      name: '',
      designation: 'Assistant Professor',
      roleCategory: 'teaching_senior',
      department: 'Chemistry',
      displayOrder: allPeople.length + 1,
      isActive: true
    };
    setEditingPerson(blankPerson);
    setIsAddingNew(true);
    setIsModalOpen(true);
  };

  const handleSavePerson = (updated: PersonRecord) => {
    if (isAddingNew) {
      addPerson(updated);
    } else {
      updatePerson(updated);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Official Academic Roster
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Faculty Directory
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Senior College & Junior College Professors, Associate Professors, and Lecturers.
          </p>
        </div>

        {currentUser.role === 'SUPER_ADMIN' && (
          <button
            onClick={handleAddNewClick}
            className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Faculty Member</span>
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Wing Pill Filters */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs w-full sm:w-auto">
            {[
              { id: 'All', label: `All Faculty (${teachingStaff.length})` },
              { id: 'teaching_senior', label: 'Senior College' },
              { id: 'teaching_junior', label: 'Junior College' }
            ].map(w => (
              <button
                key={w.id}
                onClick={() => setSelectedWing(w.id as any)}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedWing === w.id
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>

          {/* Department Select Filter */}
          <div className="w-full sm:w-64">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
            >
              <option value="All">All Departments ({departments.length})</option>
              {departments.sort().map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Text Search Box */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by faculty name, qualification (Ph.D., NET, SET), subject, or phone number..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Results Count & SuperAdmin Notice */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong>{filteredFaculty.length}</strong> verified faculty records
        </span>
        {currentUser.role === 'SUPER_ADMIN' && (
          <span className="text-amber-800 font-medium">
            * SuperAdmin Mode: You can upload portrait photos or edit details for any faculty member.
          </span>
        )}
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map(person => (
          <PersonCard
            key={person.id}
            person={person}
            onEdit={handleEditClick}
            showAdminControls={currentUser.role === 'SUPER_ADMIN'}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredFaculty.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <Users className="w-8 h-8 text-slate-300 mx-auto" />
          <h3 className="text-sm font-bold text-slate-800">No faculty members found</h3>
          <p className="text-xs text-slate-500">
            Try adjusting your search criteria or clearing department filters.
          </p>
          <button
            onClick={() => { setSearch(''); setSelectedDept('All'); setSelectedWing('All'); }}
            className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 rounded-lg transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Edit / Upload Photo Modal */}
      <PhotoUploadModal
        person={editingPerson}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePerson}
      />
    </div>
  );
};
