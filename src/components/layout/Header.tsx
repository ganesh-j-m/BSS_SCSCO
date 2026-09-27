import React, { useState } from 'react';
import { useApp, UserRole } from '../../context/AppContext';
import { COLLEGE_PROFILE } from '../../data/officialData';
import {
  GraduationCap,
  BookOpen,
  Users,
  Building,
  Award,
  Calendar,
  FileCheck,
  Search,
  Sparkles,
  Download,
  Menu,
  X,
  ChevronDown,
  Shield,
  Phone,
  Mail,
  UserCheck,
  CheckCircle2,
  LogIn
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentRoute, setCurrentRoute, currentUser, loginAs, logout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    {
      id: 'about',
      label: 'About Us',
      children: [
        { id: 'about', label: 'History & Overview' },
        { id: 'vision-mission', label: 'Vision, Mission & Goals' },
        { id: 'leadership', label: 'Management & Karyakari Mandal' },
        { id: 'administration', label: 'Administrative Setup' },
        { id: 'principal-desk', label: "Principal's Desk" },
        { id: 'branches', label: 'Sister Institutions (15)' }
      ]
    },
    {
      id: 'academics',
      label: 'Academics',
      children: [
        { id: 'courses', label: 'All Programs & Courses' },
        { id: 'nep2020', label: 'NEP 2020 Framework' },
        { id: 'junior-college', label: 'Junior College (Arts, Sci, Com, MCVC)' },
        { id: 'senior-college', label: 'Senior College (UG & PG)' },
        { id: 'research', label: 'Ph.D. Centers & CRFC' }
      ]
    },
    { id: 'departments', label: 'Departments' },
    {
      id: 'people',
      label: 'People',
      children: [
        { id: 'faculty', label: 'Teaching Faculty Directory' },
        { id: 'staff', label: 'Non-Teaching & Support Staff' },
        { id: 'research-guides', label: 'Recognized Research Guides' }
      ]
    },
    {
      id: 'admissions-fees',
      label: 'Admissions & Fees',
      children: [
        { id: 'admissions', label: 'Admission Procedure 2026-27' },
        { id: 'fees', label: 'Fee Structure (Jr & Sr College)' },
        { id: 'scholarships', label: 'Scholarships & Concessions (15)' },
        { id: 'prizes', label: 'Merit Prizes & Endowments (29)' }
      ]
    },
    {
      id: 'facilities-menu',
      label: 'Campus Facilities',
      children: [
        { id: 'facilities', label: 'Campus Infrastructure' },
        { id: 'library', label: 'Central Library & Night Hall' },
        { id: 'rac-lab', label: 'ICICI Foundation RAC Lab' },
        { id: 'soil-lab', label: 'Mati Parikshan Kendra' },
        { id: 'career-katta', label: 'Career Katta & Center of Excellence' },
        { id: 'incubation', label: 'SCSC-ICE Incubation Center' }
      ]
    },
    { id: 'notices', label: 'Notices' },
    { id: 'verify', label: 'Verify Certificate' }
  ];

  const handleNavClick = (routeId: string) => {
    setCurrentRoute(routeId);
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  const roles: { role: UserRole; label: string; badge: string }[] = [
    { role: 'GUEST', label: 'Public Visitor', badge: 'Public' },
    { role: 'STUDENT', label: 'Aniket More (Student)', badge: 'Student' },
    { role: 'PARENT', label: 'Balasaheb More (Parent)', badge: 'Parent' },
    { role: 'TEACHER', label: 'Dr. Suryawanshi (Faculty)', badge: 'Teacher' },
    { role: 'PRINCIPAL', label: 'Dr. Sanjay Aswale (Principal)', badge: 'Executive' },
    { role: 'SUPER_ADMIN', label: 'System SuperAdmin (CMS)', badge: 'Admin' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-2xs font-poppins">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-100 text-[11px] py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-400">
              <Award className="w-3.5 h-3.5" />
              NAAC 'A' Grade (CGPA 3.14)
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-200 font-medium">
              AAA Audit Grade 'A' (263/300)
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">
              Affiliated to Dr. BAMU Chhatrapati Sambhajinagar
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-amber-300 font-mono">Code: C34650</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:02475252020" className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>(02475) 252020</span>
            </a>
            <span className="text-slate-600">|</span>
            {/* Quick AI Assistant Trigger */}
            <button
              onClick={() => handleNavClick('ai-assistant')}
              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-medium transition-colors"
            >
              <Sparkles className="w-3 h-3" />
              <span>AI College Desk</span>
            </button>
            <span className="text-slate-600">|</span>
            {/* Download Zip Trigger */}
            <button
              onClick={() => handleNavClick('download-zip')}
              className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200 font-medium transition-colors"
            >
              <Download className="w-3 h-3" />
              <span>Download ZIP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 cursor-pointer group select-none"
        >
          {/* Institutional Crest Icon */}
          <div className="w-13 h-13 rounded-xl bg-linear-to-br from-amber-700 via-amber-800 to-amber-950 text-white flex flex-col items-center justify-center p-1 shadow-md border border-amber-600/40 shrink-0 group-hover:scale-103 transition-transform">
            <Building className="w-5 h-5 text-amber-300" />
            <span className="text-[9px] font-bold tracking-tighter leading-tight mt-0.5 text-amber-100">
              SC(S)CO
            </span>
          </div>

          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-amber-800 leading-tight">
              {COLLEGE_PROFILE.sansthaMarathiName}
            </div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-amber-900 transition-colors leading-snug">
              {COLLEGE_PROFILE.marathiName}
            </h1>
            <div className="text-xs font-medium text-slate-700 flex items-center gap-1.5 flex-wrap">
              <span>{COLLEGE_PROFILE.name}</span>
              <span className="text-slate-700 font-mono">· Estd. 1959</span>
            </div>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Role Switcher Pill */}
          <div className="relative">
            <button
              onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 transition-all shadow-2xs"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">Role:</span>
              <span className="font-semibold text-slate-900">{currentUser.role}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {roleSwitcherOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Switch Active Role (Demo)
                </div>
                {roles.map(r => (
                  <button
                    key={r.role}
                    onClick={() => {
                      loginAs(r.role);
                      setRoleSwitcherOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                      currentUser.role === r.role ? 'bg-amber-50/70 font-semibold text-amber-900' : 'text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{r.label}</div>
                      <div className="text-[10px] text-slate-400 capitalize">{r.role.toLowerCase()}</div>
                    </div>
                    {currentUser.role === r.role && (
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                    )}
                  </button>
                ))}
                {currentUser.role !== 'GUEST' && (
                  <div className="pt-1.5 mt-1 border-t border-slate-100 px-3">
                    <button
                      onClick={() => {
                        logout();
                        setRoleSwitcherOpen(false);
                      }}
                      className="w-full text-left py-1 text-xs text-red-600 hover:underline flex items-center gap-1"
                    >
                      <LogIn className="w-3.5 h-3.5 rotate-180" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Dedicated Portal Button */}
          {currentUser.role !== 'GUEST' ? (
            <button
              onClick={() => handleNavClick(currentUser.role.toLowerCase())}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>My Portal</span>
            </button>
          ) : (
            <button
              onClick={() => setRoleSwitcherOpen(true)}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-amber-400" />
              <span>Portal Login</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar (Desktop) */}
      <nav className="hidden lg:block bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium text-slate-700">
          <div className="flex items-center space-x-1">
            {navItems.map(item => {
              if (item.children) {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`px-3 py-2.5 rounded-md inline-flex items-center gap-1 hover:text-slate-900 hover:bg-slate-200/60 transition-colors ${
                        dropdownOpen === item.id ? 'text-amber-900 bg-slate-200/60 font-semibold' : ''
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" />
                    </button>

                    <div className="absolute left-0 mt-0.5 w-60 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 hidden group-hover:block z-50">
                      {item.children.map(child => (
                        <button
                          key={child.id}
                          onClick={() => handleNavClick(child.id)}
                          className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors block"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 rounded-md hover:text-slate-900 hover:bg-slate-200/60 transition-colors ${
                    currentRoute === item.id ? 'text-amber-900 font-bold bg-amber-100/60' : ''
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Quick Portals Links */}
          <div className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold">
            <button
              onClick={() => handleNavClick('student')}
              className={`px-2 py-1 rounded hover:text-amber-800 ${currentRoute === 'student' ? 'text-amber-800 font-bold' : ''}`}
            >
              Student
            </button>
            <span>·</span>
            <button
              onClick={() => handleNavClick('parent')}
              className={`px-2 py-1 rounded hover:text-amber-800 ${currentRoute === 'parent' ? 'text-amber-800 font-bold' : ''}`}
            >
              Parent
            </button>
            <span>·</span>
            <button
              onClick={() => handleNavClick('teacher')}
              className={`px-2 py-1 rounded hover:text-amber-800 ${currentRoute === 'teacher' ? 'text-amber-800 font-bold' : ''}`}
            >
              Teacher
            </button>
            <span>·</span>
            <button
              onClick={() => handleNavClick('principal')}
              className={`px-2 py-1 rounded hover:text-amber-800 ${currentRoute === 'principal' ? 'text-amber-800 font-bold' : ''}`}
            >
              Principal
            </button>
            <span>·</span>
            <button
              onClick={() => handleNavClick('superadmin')}
              className={`px-2 py-1 rounded hover:text-amber-800 ${currentRoute === 'superadmin' ? 'text-amber-800 font-bold' : ''}`}
            >
              SuperAdmin
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 max-h-[80vh] overflow-y-auto p-4 space-y-2">
          {navItems.map(item => (
            <div key={item.id} className="border-b border-slate-100 pb-1">
              {item.children ? (
                <div>
                  <div className="text-xs font-bold text-slate-800 uppercase px-2 py-1 tracking-wider">
                    {item.label}
                  </div>
                  <div className="pl-3 space-y-1 mt-1">
                    {item.children.map(child => (
                      <button
                        key={child.id}
                        onClick={() => handleNavClick(child.id)}
                        className="w-full text-left text-xs py-1.5 px-2 text-slate-600 hover:text-amber-800 block"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left text-xs font-medium py-2 px-2 text-slate-700 hover:text-amber-800"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}

          {/* Mobile Portals Links */}
          <div className="pt-2">
            <div className="text-xs font-bold text-slate-800 uppercase px-2 py-1 tracking-wider">
              Institutional Portals
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                onClick={() => handleNavClick('student')}
                className="p-2 text-left bg-slate-50 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                Student Portal
              </button>
              <button
                onClick={() => handleNavClick('parent')}
                className="p-2 text-left bg-slate-50 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                Parent Portal
              </button>
              <button
                onClick={() => handleNavClick('teacher')}
                className="p-2 text-left bg-slate-50 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                Teacher Portal
              </button>
              <button
                onClick={() => handleNavClick('principal')}
                className="p-2 text-left bg-slate-50 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                Principal Command
              </button>
              <button
                onClick={() => handleNavClick('superadmin')}
                className="p-2 text-left bg-amber-50 rounded-lg text-xs font-medium text-amber-900 hover:bg-amber-100 col-span-2"
              >
                SuperAdmin CMS & Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
