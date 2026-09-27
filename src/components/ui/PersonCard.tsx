import React, { useState } from 'react';
import { PersonRecord } from '../../data/officialData';
import { User, Phone, Mail, MapPin, Award, CheckCircle, Upload, Edit } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface PersonCardProps {
  person: PersonRecord;
  onEdit?: (person: PersonRecord) => void;
  showAdminControls?: boolean;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person, onEdit, showAdminControls = false }) => {
  const { currentUser } = useApp();
  const isSuperAdmin = currentUser.role === 'SUPER_ADMIN';

  // Compute initials for placeholder
  const getInitials = (fullName: string) => {
    return fullName
      .replace(/Dr\.|Prof\.|Shri\.|Smt\.|Mr\.|Mrs\./gi, '')
      .trim()
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(n => n[0])
      .join('')
      .toUpperCase() || 'SC';
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Photo or STRICT Official Placeholder */}
          <div className="relative shrink-0">
            {person.photoUrl ? (
              <img
                src={person.photoUrl}
                alt={person.name}
                className="w-18 h-22 object-cover rounded-lg border border-slate-200 shadow-2xs"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLElement).style.display = 'none';
                  const next = (e.target as HTMLElement).nextElementSibling;
                  if (next) (next as HTMLElement).classList.remove('hidden');
                }}
              />
            ) : null}

            {/* Placeholder Container (displayed when photoUrl is null or fails) */}
            <div
              className={`w-18 h-22 rounded-lg border border-slate-200 bg-linear-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-1 text-center ${
                person.photoUrl ? 'hidden' : 'flex'
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-semibold text-xs tracking-wider mb-1">
                {getInitials(person.name)}
              </div>
              <span className="text-[9px] text-slate-700 font-medium leading-tight">
                Photo Coming Soon
              </span>
            </div>

            {/* Active Indicator */}
            {person.isActive ? (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" title="Active Record" />
            ) : (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-slate-400 border-2 border-white rounded-full" title="Inactive Record" />
            )}
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <h4 className="text-base font-semibold text-slate-900 leading-snug line-clamp-2">
              {person.name}
            </h4>
            
            {person.marathiName && (
              <p className="text-xs text-amber-800 font-medium mt-0.5">
                {person.marathiName}
              </p>
            )}

            <div className="mt-1 text-xs font-medium text-slate-700">
              {person.designation}
            </div>

            {person.department && (
              <div className="mt-0.5 text-xs text-slate-700">
                Dept. of {person.department}
              </div>
            )}
          </div>
        </div>

        {/* Qualification & Biography */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
          {person.qualification && (
            <div className="flex items-center gap-1.5 text-slate-700">
              <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-medium text-slate-800 line-clamp-1">{person.qualification}</span>
            </div>
          )}

          {person.address && (
            <div className="flex items-center gap-1.5 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{person.address}</span>
            </div>
          )}

          {person.phone && (
            <div className="flex items-center gap-1.5 text-slate-700">
              <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <a href={`tel:${person.phone}`} className="hover:underline font-mono text-xs">
                {person.phone}
              </a>
            </div>
          )}

          {person.email && (
            <div className="flex items-center gap-1.5 text-slate-700">
              <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <a href={`mailto:${person.email}`} className="hover:underline truncate">
                {person.email}
              </a>
            </div>
          )}

          {person.biography && (
            <p className="text-xs text-slate-700 italic mt-2 line-clamp-2">
              "{person.biography}"
            </p>
          )}
        </div>
      </div>

      {/* SuperAdmin Edit Trigger */}
      {(showAdminControls || isSuperAdmin) && onEdit && (
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-700">
            ID: {person.id}
          </span>
          <button
            onClick={() => onEdit(person)}
            className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 hover:text-amber-800 transition-colors"
          >
            <Edit className="w-3.5 h-3.5" />
            Edit Profile / Photo
          </button>
        </div>
      )}
    </div>
  );
};
