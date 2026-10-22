import React from 'react';
import MuseumNavbar from './components/MuseumNavbar';
import MuseumEntrance from './components/MuseumEntrance';
import MuseumGallery from './components/MuseumGallery';
import CaseStudiesSection from './components/CaseStudiesSection';
import CuratorSection from './components/CuratorSection';
import GuestbookSection from './components/GuestbookSection';

export default function App() {
  return (
    <div className="museum-app-root relative min-h-screen">
      {/* Sticky Museum Navigation */}
      <MuseumNavbar />

      <main>
        {/* Room 01: Museum Entrance Hall */}
        <MuseumEntrance />

        {/* Room 02: Exhibition Gallery */}
        <MuseumGallery />

        {/* Case Studies: AgriMart & Zypha (Exhibition Halls A & B) */}
        <CaseStudiesSection />

        {/* Room 03: About Me — The Curator ("The Person Behind the Pixels") */}
        <CuratorSection />

        {/* Museum Exit & Guestbook */}
        <GuestbookSection />
      </main>
    </div>
  );
}
