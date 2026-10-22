import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function MuseumEntranceSection() {
  const handleScrollToGallery = () => {
    const el = document.getElementById('gallery-conversation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
        paddingBottom: '36px',
        backgroundColor: '#FFF5E9',
        overflow: 'hidden',
      }}
    >
      {/* Background: Exact supplied image "Warm Courtyard Portrait with Arched Doors(1).png" */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/museum_entrance_courtyard.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      {/* Gentle atmospheric lighting gradient to ensure text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(255, 245, 233, 0.88) 0%, rgba(255, 245, 233, 0.2) 35%, rgba(84, 44, 57, 0.15) 80%, rgba(84, 44, 57, 0.45) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Top Title Plaque Overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '640px',
          padding: '0 20px',
          animation: 'museumFadeIn 1.2s ease-out',
        }}
      >
        <div
          className="museum-plaque"
          style={{
            padding: '16px 36px',
            display: 'inline-block',
            background: 'rgba(255, 250, 243, 0.96)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--color-burgundy-soft)',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={13} color="var(--color-yellow)" />
            <span>Exhibition Entrance • Room 01</span>
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--color-burgundy)',
              lineHeight: 1.15,
              margin: '2px 0 6px 0',
            }}
          >
            The Little Museum of Ideas
          </h1>

          <div
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              color: 'var(--color-burgundy)',
              fontWeight: 700,
              marginTop: '4px',
            }}
          >
            Hey there! I’m Sirisha.
          </div>

          <p
            style={{
              fontSize: '0.86rem',
              color: 'var(--color-burgundy-soft)',
              margin: '6px 0 0 0',
              fontWeight: 500,
            }}
          >
            Welcome to my curated collection of user experiences, design systems & digital craft.
          </p>
        </div>
      </div>

      {/* Spacer to preserve unobstructed view of Sirisha's portrait and courtyard arch */}
      <div style={{ flexGrow: 1, minHeight: '180px', zIndex: 5 }} />

      {/* Bottom Floating Scroll Invitation */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <button
          onClick={handleScrollToGallery}
          className="scroll-invitation"
          style={{
            background: 'var(--color-cream-light)',
            border: '2px solid var(--color-burgundy)',
            borderRadius: '9999px',
            padding: '10px 24px',
            color: 'var(--color-burgundy)',
            fontWeight: 800,
            fontSize: '0.86rem',
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(84, 44, 57, 0.25)',
            transition: 'var(--transition-smooth)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-yellow)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-cream-light)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label="Scroll to enter the museum gallery"
        >
          <span>Step inside the gallery</span>
          <ChevronDown size={17} />
        </button>

        <span
          style={{
            fontSize: '0.74rem',
            color: 'var(--color-cream-light)',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textShadow: '0 2px 6px rgba(0,0,0,0.6)',
          }}
        >
          Scroll to explore the collection ↓
        </span>
      </div>

      <style>{`
        @keyframes museumFadeIn {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
