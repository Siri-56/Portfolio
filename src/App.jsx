import React from 'react';
import MuseumNavbar from './components/MuseumNavbar';
import SceneConversation from './components/SceneConversation';
import SceneCourtyard from './components/SceneCourtyard';
import SceneFramedWall from './components/SceneFramedWall';
import CuratorSection from './components/CuratorSection';
import GuestbookSection from './components/GuestbookSection';

export default function App() {
  return (
    <div className="museum-app-root relative min-h-screen">
      {/* Navigation: HOME | PROJECTS | ABOUT ME | CONTACT */}
      <MuseumNavbar />

      <main>
        {/* 1st Scene (HOME): Courtyard Portrait of Sirisha ("Hey there! I’m Sirisha.") */}
        <SceneCourtyard />

        {/* 2nd Scene (PROJECTS): Warm Conversation in the Art Gallery with Clickable Project Portraits */}
        <SceneConversation />

        {/* 3rd Scene: Quiet Gallery Wall */}
        <SceneFramedWall />

        {/* Section 4: About Me — The Curator ("The Person Behind the Pixels") */}
        <CuratorSection />

        {/* Section 5: Contact — Museum Exit & Guestbook ("Before you leave…") */}
        <GuestbookSection />
      </main>
    </div>
  );
}

