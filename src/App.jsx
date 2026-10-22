import React from 'react';
import MuseumNavbar from './components/MuseumNavbar';
import MuseumEntranceSection from './components/MuseumEntranceSection';
import GalleryConversationSection from './components/GalleryConversationSection';
import FeaturedPortraitSection from './components/FeaturedPortraitSection';
import CuratorSection from './components/CuratorSection';
import GuestbookSection from './components/GuestbookSection';

export default function App() {
  return (
    <div className="museum-app-root relative min-h-screen">
      {/* Sticky Minimal Navigation: SIRISHA | GALLERY | ABOUT | CONTACT */}
      <MuseumNavbar />

      <main>
        {/* Section 1: Museum Entrance (Warm Courtyard Portrait with Arched Doors) */}
        <MuseumEntranceSection />

        {/* Section 2: Gallery Scene (Warm Conversation in the Art Gallery) */}
        <GalleryConversationSection />

        {/* Section 3: The Two Featured Project Portraits (Quiet gallery wall with interactive framed portrait) */}
        <FeaturedPortraitSection />

        {/* Section 4: About Me — The Curator ("The Person Behind the Pixels") */}
        <CuratorSection />

        {/* Section 5: Contact — The Museum Guestbook & Exit ("Before you leave…") */}
        <GuestbookSection />
      </main>
    </div>
  );
}
