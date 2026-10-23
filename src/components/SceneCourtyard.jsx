import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function SceneCourtyard() {
  const handleScrollToNext = () => {
    const el = document.getElementById('projects') || document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '92px',
        paddingBottom: '24px',
        overflow: 'hidden',
        backgroundColor: '#FFF5E9',
      }}
    >
      {/* 2nd Supplied Visual: Warm Courtyard Portrait with Arched Doors — FULL SCREEN, CRISP ORIGINAL QUALITY */}
      <img
        src="/museum_entrance_courtyard.jpg"
        alt="Sirisha portrait in the museum courtyard with arched doors"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          zIndex: 1,
          imageRendering: '-webkit-optimize-contrast',
        }}
      />

      {/* Talking Speech Bubble on the right side of Sirisha in a glassy frame */}
      <div
        className="curator-speech-bubble"
        style={{
          position: 'absolute',
          top: 'clamp(130px, 22vh, 200px)',
          left: 'clamp(52%, calc(50% + 60px), 62%)',
          maxWidth: 'clamp(280px, 26vw, 380px)',
          padding: '18px 24px',
          background: 'rgba(255, 245, 233, 0.78)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgba(255, 255, 255, 0.75)',
          borderRadius: '24px 24px 24px 6px',
          boxShadow: '0 12px 35px rgba(52, 25, 30, 0.16)',
          zIndex: 20,
          boxSizing: 'border-box',
          transformOrigin: 'bottom left',
        }}
      >
        {/* Talking bubble pointer / tail pointing down-left toward Sirisha's face */}
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: '-19px',
            left: '8px',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 3px 4px rgba(52, 25, 30, 0.1))',
          }}
        >
          <path
            d="M22 0C18 8 10 16 0 24C12 20 22 14 28 6V0H22Z"
            fill="rgba(255, 245, 233, 0.88)"
          />
          <path
            d="M0 24C12 20 22 14 28 6"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        <div
          className="font-serif"
          style={{
            fontSize: 'clamp(1.3rem, 1.9vw, 1.75rem)',
            fontWeight: 800,
            color: '#542c39',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
          }}
        >
          Hey there! I’m Sirisha.
        </div>
        <div
          style={{
            fontSize: 'clamp(0.8rem, 1vw, 0.92rem)',
            color: '#8e5866',
            fontWeight: 600,
            marginTop: '5px',
            letterSpacing: '0.01em',
            lineHeight: 1.35,
          }}
        >
          UI/UX Designer &amp; Creative Problem Solver
        </div>
      </div>

      {/* Bottom Floating Scroll Invitation (Exact Middle, Glassy) */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 15,
        }}
      >
        <button
          onClick={handleScrollToNext}
          className="scroll-invitation"
          style={{
            pointerEvents: 'auto',
            background: 'rgba(255, 245, 233, 0.68)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255, 255, 255, 0.85)',
            borderRadius: '9999px',
            padding: '10px 26px',
            color: '#542c39',
            fontWeight: 700,
            fontSize: '0.86rem',
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(52, 25, 30, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
            outline: 'none',
          }}
        >
          <span>Step inside the gallery</span>
          <ChevronDown size={16} />
        </button>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .curator-speech-bubble {
            top: 105px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            max-width: 90% !important;
            width: max-content !important;
          }
        }
      `}</style>
    </section>
  );
}
