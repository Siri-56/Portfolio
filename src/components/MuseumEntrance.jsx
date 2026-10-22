import React from 'react';
import MuseumAvatar from './MuseumAvatar';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function MuseumEntrance() {
  const handleScrollDown = () => {
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="entrance"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '32px',
        overflow: 'hidden',
        backgroundColor: 'var(--color-cream)',
      }}
    >
      {/* Illustrated Museum Entrance Architecture Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/museum_entrance_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      {/* Subtle Warm Gradient Overlay for Atmospheric Lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 40%, rgba(255, 245, 233, 0.1) 0%, rgba(84, 44, 57, 0.12) 80%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Top Museum Plaque / Subtitle */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          marginTop: '10px',
          maxWidth: '560px',
          padding: '0 20px',
        }}
      >
        <div
          className="museum-plaque"
          style={{
            padding: '12px 28px',
            display: 'inline-block',
          }}
        >
          <div
            style={{
              fontSize: '0.74rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-burgundy-soft)',
              marginBottom: '2px',
            }}
          >
            Room 01 • Main Hall
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
              fontWeight: 800,
              color: 'var(--color-burgundy)',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            The Little Museum of Ideas
          </h1>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-burgundy)',
              fontWeight: 500,
              marginTop: '4px',
              opacity: 0.85,
            }}
          >
            A personal gallery of user experiences, design systems & creative craft.
          </p>
        </div>
      </div>

      {/* Central Curator Avatar with "Hey there!" Greeting */}
      <div
        style={{
          position: 'relative',
          zIndex: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
          maxWidth: '460px',
          flexGrow: 1,
          marginTop: '10px',
        }}
      >
        {/* Friendly Greeting Speech Bubble */}
        <div
          className="speech-bubble"
          style={{
            padding: '10px 22px',
            marginBottom: '10px',
            textAlign: 'center',
            cursor: 'default',
            userSelect: 'none',
          }}
        >
          <div
            className="font-serif"
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'var(--color-burgundy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span>Hey there!</span>
            <span style={{ fontSize: '1.2rem' }}>👋</span>
          </div>
          <div
            style={{
              fontSize: '0.78rem',
              color: 'var(--color-burgundy-soft)',
              fontWeight: 600,
            }}
          >
            I'm Sirisha. Welcome to my gallery.
          </div>
        </div>

        {/* The Curator Character with Pupils Following Cursor */}
        <div
          style={{
            width: 'clamp(280px, 42vw, 380px)',
            maxWidth: '100%',
            position: 'relative',
          }}
        >
          <MuseumAvatar />
        </div>
      </div>

      {/* Bottom Scroll Invitation Indicator */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <button
          onClick={handleScrollDown}
          className="scroll-invitation"
          style={{
            background: 'var(--color-cream-light)',
            border: '1.5px solid var(--color-burgundy)',
            borderRadius: '9999px',
            padding: '8px 20px',
            color: 'var(--color-burgundy)',
            fontWeight: 700,
            fontSize: '0.82rem',
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(84, 44, 57, 0.15)',
            transition: 'var(--transition-smooth)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-yellow)';
            e.currentTarget.style.borderColor = 'var(--color-burgundy)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-cream-light)';
            e.currentTarget.style.borderColor = 'var(--color-burgundy)';
          }}
        >
          <span>Step inside the gallery</span>
          <ChevronDown size={16} />
        </button>
        <span
          style={{
            fontSize: '0.72rem',
            color: 'var(--color-burgundy-soft)',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Curated projects await inside
        </span>
      </div>
    </section>
  );
}
