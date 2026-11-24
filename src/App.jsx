import React, { useState } from 'react';
import MuseumNavbar from './components/navigation/MuseumNavbar';
import SceneCourtyard from './components/scenes/SceneCourtyard';
import SceneGalleryWall from './components/scenes/SceneGalleryWall';
import SceneQuietWall from './components/scenes/SceneQuietWall';
import SceneGuestbook from './components/scenes/SceneGuestbook';
import MuseumPreloader from './components/common/MuseumPreloader';

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  return (
    <>
      {/* Museum Buffer / Preloader: loads all visual assets before unveil */}
      <MuseumPreloader onLoaded={() => setIsAppLoaded(true)} />

      <div
        className="museum-app-root relative min-h-screen"
        style={{
          opacity: isAppLoaded ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
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
    </>
  );
}
