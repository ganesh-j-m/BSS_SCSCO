import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PersonRecord } from '../../data/officialData';
import { PersonCard } from '../ui/PersonCard';
import { PhotoUploadModal } from '../ui/PhotoUploadModal';
import { Search, Plus, Users, Shield } from 'lucide-react';

export const StaffView: React.FC = () => {
  const { allPeople, updatePerson, addPerson, currentUser } = useApp();
  const [search, setSearch] = useState('');
  const [selectedSubDept, setSelectedSubDept] = useState<string>('All');
  const [editingPerson, setEditingPerson] = useState<PersonRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Filter only non-teaching staff
  const nonTeachingStaff = allPeople.filter(p => p.roleCategory === 'non_teaching');

  const subDepts = Array.from(new Set(nonTeachingStaff.map(p => p.department).filter(Boolean))) as string[];

  const filteredStaff = nonTeachingStaff.filter(person => {
    const matchesDept = selectedSubDept === 'All' || person.department === selectedSubDept;
    const matchesSearch = person.name.toLowerCase().includes(search.toLowerCase()) ||
                          person.designation.toLowerCase().includes(search.toLowerCase()) ||
                          (person.qualification && person.qualification.toLowerCase().includes(search.toLowerCase())) ||
                          (person.phone && person.phone.includes(search));
    return matchesDept && matchesSearch;
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
      designation: 'Laboratory Attendant',
      roleCategory: 'non_teaching',
      department: 'Laboratories',
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
            Administrative & Operational Support
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Non-Teaching & Support Staff
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Official roster of administrative office, library personnel, laboratory assistants, and campus support.
          </p>
        </div>

        {currentUser.role === 'SUPER_ADMIN' && (
          <button
            onClick={handleAddNewClick}
            className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Staff Record</span>
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Department Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setSelectedSubDept('All')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedSubDept === 'All'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Support Staff ({nonTeachingStaff.length})
            </button>
            {subDepts.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedSubDept(dept)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  selectedSubDept === dept
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, role, phone..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong>{filteredStaff.length}</strong> official non-teaching staff records
        </span>
      </div>

      {/* Staff Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map(person => (
          <PersonCard
            key={person.id}
            person={person}
            onEdit={handleEditClick}
            showAdminControls={currentUser.role === 'SUPER_ADMIN'}
          />
        ))}
      </div>

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
