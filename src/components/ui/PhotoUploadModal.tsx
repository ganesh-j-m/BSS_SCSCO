import React, { useState } from 'react';
import { PersonRecord } from '../../data/officialData';
import { X, Upload, Image, Check, AlertCircle } from 'lucide-react';

interface PhotoUploadModalProps {
  person: PersonRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: PersonRecord) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  person,
  isOpen,
  onClose,
  onSave
}) => {
  if (!isOpen || !person) return null;

  const [name, setName] = useState(person.name);
  const [marathiName, setMarathiName] = useState(person.marathiName || '');
  const [designation, setDesignation] = useState(person.designation);
  const [department, setDepartment] = useState(person.department || '');
  const [qualification, setQualification] = useState(person.qualification || '');
  const [phone, setPhone] = useState(person.phone || '');
  const [email, setEmail] = useState(person.email || '');
  const [biography, setBiography] = useState(person.biography || '');
  const [photoUrl, setPhotoUrl] = useState(person.photoUrl || '');
  const [isActive, setIsActive] = useState(person.isActive);
  const [previewError, setPreviewError] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size under 3MB
      if (file.size > 3 * 1024 * 1024) {
        alert("Please upload an image smaller than 3MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result as string);
        setPreviewError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...person,
      name,
      marathiName: marathiName || undefined,
      designation,
      department: department || undefined,
      qualification: qualification || undefined,
      phone: phone || undefined,
      email: email || undefined,
      biography: biography || undefined,
      photoUrl: photoUrl.trim() ? photoUrl.trim() : null,
      isActive
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between p-5 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-xs z-10">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Manage Person & Photo
            </h3>
            <p className="text-xs text-slate-500">
              Update official profile & photographic record for SuperAdmin
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-4">
          {/* Photo Management Section */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Official Portrait Photo
            </label>
            
            <div className="flex items-center gap-4">
              {/* Preview Box */}
              <div className="w-20 h-24 rounded-lg border border-slate-300 bg-white overflow-hidden shrink-0 flex items-center justify-center shadow-xs">
                {photoUrl && !previewError ? (
                  <img
                    src={photoUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={() => setPreviewError(true)}
                  />
                ) : (
                  <div className="text-center p-1 text-slate-400">
                    <Image className="w-6 h-6 mx-auto mb-1 text-slate-300" />
                    <span className="text-[9px] block leading-tight">No Photo Set</span>
                  </div>
                )}
              </div>

              {/* Upload & URL Controls */}
              <div className="flex-1 space-y-2">
                <div>
                  <label className="text-xs text-slate-600 block mb-1">
                    Upload from computer (JPG, PNG, WebP)
                  </label>
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg text-xs font-medium text-slate-700 cursor-pointer shadow-xs transition-colors">
                    <Upload className="w-3.5 h-3.5 text-slate-500" />
                    Choose Image File
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div>
                  <label className="text-xs text-slate-600 block mb-1">
                    Or Enter Hosted Photo URL (Cloudinary, S3, R2)
                  </label>
                  <input
                    type="url"
                    value={photoUrl}
                    onChange={(e) => {
                      setPhotoUrl(e.target.value);
                      setPreviewError(false);
                    }}
                    placeholder="https://example.com/photos/staff-photo.jpg"
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>

                {photoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setPhotoUrl('');
                      setPreviewError(false);
                    }}
                    className="text-[11px] text-red-600 hover:underline"
                  >
                    Remove Photo (Revert to Official Placeholder)
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Core Profile Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Full Name (English) *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Marathi Name
              </label>
              <input
                type="text"
                value={marathiName}
                onChange={(e) => setMarathiName(e.target.value)}
                placeholder="श्री. / प्रा. नाव"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Designation *
              </label>
              <input
                type="text"
                required
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Department
              </label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="e.g. Chemistry, English, Administration"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Qualifications
            </label>
            <input
              type="text"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              placeholder="e.g. M.Sc., Ph.D., SET, NET"
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9422070783"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Official Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="faculty@scsco.org.in"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Biography / Research Highlights
            </label>
            <textarea
              rows={2}
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              placeholder="Short biographical profile or administrative duties..."
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="isActiveToggle"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="w-4 h-4 text-amber-600 rounded-sm border-slate-300 focus:ring-amber-500"
            />
            <label htmlFor="isActiveToggle" className="text-xs font-medium text-slate-700 cursor-pointer">
              Active Record (Display publicly on website and directories)
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
