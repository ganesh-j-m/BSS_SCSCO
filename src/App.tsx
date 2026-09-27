import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Views
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { DepartmentsView } from './components/views/DepartmentsView';
import { FacultyView } from './components/views/FacultyView';
import { StaffView } from './components/views/StaffView';
import { CoursesView } from './components/views/CoursesView';
import { AdmissionsView } from './components/views/AdmissionsView';
import { FeesView } from './components/views/FeesView';
import { ScholarshipsView } from './components/views/ScholarshipsView';
import { PrizesView } from './components/views/PrizesView';
import { FacilitiesView } from './components/views/FacilitiesView';
import { CareerKattaView } from './components/views/CareerKattaView';
import { ResearchView } from './components/views/ResearchView';
import { NoticesView } from './components/views/NoticesView';
import { CertificateVerifyView } from './components/views/CertificateVerifyView';
import { AiAssistantView } from './components/views/AiAssistantView';
import { DownloadZipView } from './components/views/DownloadZipView';

// Portals
import { StudentPortal } from './components/portals/StudentPortal';
import { ParentPortal } from './components/portals/ParentPortal';
import { TeacherPortal } from './components/portals/TeacherPortal';
import { PrincipalPortal } from './components/portals/PrincipalPortal';
import { SuperAdminPortal } from './components/portals/SuperAdminPortal';

const AppContent: React.FC = () => {
  const { currentRoute } = useApp();

  const renderCurrentView = () => {
    switch (currentRoute) {
      case 'home':
        return <HomeView />;
      case 'about':
      case 'vision-mission':
      case 'leadership':
      case 'administration':
      case 'principal-desk':
      case 'branches':
        return <AboutView initialTab={currentRoute} />;
      case 'departments':
        return <DepartmentsView />;
      case 'faculty':
        return <FacultyView />;
      case 'staff':
        return <StaffView />;
      case 'courses':
      case 'nep2020':
      case 'junior-college':
      case 'senior-college':
        return <CoursesView />;
      case 'admissions':
        return <AdmissionsView />;
      case 'fees':
        return <FeesView />;
      case 'scholarships':
        return <ScholarshipsView />;
      case 'prizes':
        return <PrizesView />;
      case 'facilities':
      case 'library':
      case 'rac-lab':
      case 'soil-lab':
      case 'incubation':
        return <FacilitiesView />;
      case 'career-katta':
        return <CareerKattaView />;
      case 'research':
      case 'research-guides':
        return <ResearchView />;
      case 'notices':
      case 'events':
        return <NoticesView />;
      case 'verify':
        return <CertificateVerifyView />;
      case 'ai-assistant':
        return <AiAssistantView />;
      case 'download-zip':
        return <DownloadZipView />;
      
      // Campus Portals
      case 'student':
        return <StudentPortal />;
      case 'parent':
        return <ParentPortal />;
      case 'teacher':
        return <TeacherPortal />;
      case 'principal':
        return <PrincipalPortal />;
      case 'superadmin':
        return <SuperAdminPortal />;

      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-poppins">
      <Header />
      <main className="flex-1">
        {renderCurrentView()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
