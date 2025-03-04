import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutSchool from './pages/AboutUs/AboutSchool';
import VisionMission from './pages/AboutUs/VisionMission';
import Affiliation from './pages/AboutUs/Affiliation';
import Patron from './pages/AboutUs/Patron';
import HigherBoard from './pages/AboutUs/HigherBoard';
import ManagementCommittee from './pages/AboutUs/ManagementCommittee';
import PrincipalMessage from './pages/AboutUs/PrincipalMessage';
import Admission from './pages/Admission/Admission';
import Prospectus from './pages/Admission/Prospectus';
import FeeStructure from './pages/Admission/FeeStructure';
import SchoolCalendar from './pages/Academics/SchoolCalendar';
import Curriculum from './pages/Academics/Curriculum';
import SchoolUniform from './pages/Academics/SchoolUniform';
import Worksheets from './pages/Academics/Worksheets';
import Vacations from './pages/Academics/Vacations';
import SchoolTimings from './pages/Academics/SchoolTimings';
import Circulars from './pages/Circulars';
import Contact from './pages/Contact';
import EventGallery from './pages/Events/EventGallery';
import AnnouncementDetail from './pages/Announcements/AnnouncementDetail';
import NewsDetail from './pages/News/NewsDetail';
import AllEvents from './pages/Events/AllEvents';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Us Routes */}
          <Route path="/about/school" element={<AboutSchool />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/affiliation" element={<Affiliation />} />
          <Route path="/about/patron" element={<Patron />} />
          <Route path="/about/higher-board" element={<HigherBoard />} />
          <Route path="/about/management-committee" element={<ManagementCommittee />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          
          {/* Admission Routes */}
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission/prospectus" element={<Prospectus />} />
          <Route path="/admission/fee-structure" element={<FeeStructure />} />
          
          {/* Academics Routes */}
          <Route path="/academics/school-calendar" element={<SchoolCalendar />} />
          <Route path="/academics/curriculum" element={<Curriculum />} />
          <Route path="/academics/school-uniform" element={<SchoolUniform />} />
          <Route path="/academics/worksheets" element={<Worksheets />} />
          <Route path="/academics/vacations" element={<Vacations />} />
          <Route path="/academics/school-timings" element={<SchoolTimings />} />
          
          {/* Other Routes */}
          <Route path="/circulars" element={<Circulars />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* New Detail Pages */}
          <Route path="/event/:id" element={<EventGallery />} />
          <Route path="/announcement/:id" element={<AnnouncementDetail />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/events" element={<AllEvents />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;