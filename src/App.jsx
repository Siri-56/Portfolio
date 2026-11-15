import React from 'react';
import MuseumNavbar from './components/navigation/MuseumNavbar';
import SceneCourtyard from './components/scenes/SceneCourtyard';
import SceneGalleryWall from './components/scenes/SceneGalleryWall';
import SceneQuietWall from './components/scenes/SceneQuietWall';
import SceneGuestbook from './components/scenes/SceneGuestbook';

export default function App() {
  return (
    <div className="museum-app-root relative min-h-screen">
      {/* Navigation: HOME | PROJECTS | ABOUT ME | CONTACT */}
      <MuseumNavbar />

      <main>
        {/* Scene 1 (HOME): Entrance Courtyard with Sirisha */}
        <SceneCourtyard />

        {/* Scene 2 (PROJECTS): Gallery Wall with Framed Project Case Studies */}
        <SceneGalleryWall />

        {/* Scene 3 (ABOUT): Quiet Gallery Wall with Inscription */}
        <SceneQuietWall />

        {/* Scene 4 (CONTACT): Guestbook & Museum Exit */}
        <SceneGuestbook />
      </main>
    </div>
  );
}
