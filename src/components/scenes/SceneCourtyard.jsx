
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { smoothScrollTo } from '../../utils/smoothScroll';

export default function SceneCourtyard() {
  const sceneRef = useRef(null);
  const backgroundRef = useRef(null);
  const [isStepping, setIsStepping] = useState(false);

  const handleScrollToNext = () => {
    if (isStepping) return;
    setIsStepping(true);

    const nextSection =
      document.getElementById('projects') ||
      document.getElementById('gallery');

    if (nextSection) {
      smoothScrollTo(nextSection, 950, () => {
        setTimeout(() => setIsStepping(false), 300);
      });
    } else {
      setIsStepping(false);
    }
  };

  // Background zooms in as you scroll down
  // and zooms out as you scroll back up.
  useEffect(() => {
    const scene = sceneRef.current;
    const background = backgroundRef.current;

    if (!scene || !background) return;

    let frameId = null;

    const updateZoom = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const rect = scene.getBoundingClientRect();

        const progress = Math.max(
          0,
          Math.min(1, -rect.top / rect.height)
        );

        const scale = 1 + progress * 0.25;

        background.style.transform = `scale(${scale})`;
      });
    };

    window.addEventListener('scroll', updateZoom, {
      passive: true,
    });

    window.addEventListener('resize', updateZoom);

    updateZoom();

    return () => {
      window.removeEventListener('scroll', updateZoom);
      window.removeEventListener('resize', updateZoom);

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={sceneRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '92px',
        paddingBottom: '24px',
        overflow: 'hidden',
        backgroundColor: '#FFF5E9',
        isolation: 'isolate',
      }}
    >
      {/* Museum background with scroll zoom */}
      <img
        ref={backgroundRef}
        src="/scenes/courtyard_background.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          transform: 'scale(1)',
          transformOrigin: 'center center',
          willChange: 'transform',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Single avatar image — no blinking or image switching */}
      <div className={`courtyard-avatar-container ${isStepping ? 'is-stepping' : ''}`}>
        <img
          src="/scenes/courtyard_avatar.png"
          alt="Illustrated portrait of Sirisha"
          className="courtyard-avatar-image"
          draggable="false"
        />
      </div>

      {/* Glass speech bubble */}
      <div className={`curator-speech-bubble ${isStepping ? 'is-stepping' : ''}`}>
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="bubble-tail"
        >
          <path
            d="M22 0C18 8 10 16 0 24C12 20 22 14 28 6V0H22Z"
            fill="rgba(255,245,233,0.88)"
          />
          <path
            d="M0 24C12 20 22 14 28 6"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        <div className="bubble-heading">
          Hey there! I’m Sirisha.
        </div>

        <div className="bubble-subtitle">
          Designing intuitive digital experiences through user-centred thinking, thoughtful interactions and visual storytelling.
        </div>
      </div>

      {/* Scroll invitation */}
      <div className="scroll-invitation-container">
        <button
          type="button"
          onClick={handleScrollToNext}
          className={`scroll-invitation ${isStepping ? 'is-stepping' : ''}`}
        >
          <span>{isStepping ? 'Stepping inside...' : 'Step inside the gallery'}</span>
          <ChevronDown size={16} className={`chevron-icon ${isStepping ? 'chevron-stepping' : ''}`} />
        </button>
      </div>

      {/* Atmospheric Portal Wash when stepping inside */}
      <div className={`courtyard-portal-wash ${isStepping ? 'active' : ''}`} aria-hidden="true" />

      <style>{`
        /* Avatar positioning and breathing animation */
        .courtyard-avatar-container {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: min(58vw, 720px);
          max-height: 76%;
          transform: translateX(-50%);
          transform-origin: center bottom;
          z-index: 5;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          pointer-events: none;
        }

        .courtyard-avatar-image {
          display: block;
          width: 100%;
          height: auto;
          max-height: 76vh;
          object-fit: contain;
          object-position: bottom center;
          background: transparent;
          user-select: none;
          -webkit-user-drag: none;
          transform-origin: center bottom;
          animation: avatar-breathe 4.5s ease-in-out infinite;
        }

        @keyframes avatar-breathe {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        /* Glass speech bubble */
        .curator-speech-bubble {
          position: absolute;
          top: clamp(130px, 22vh, 200px);
          left: clamp(52%, calc(50% + 60px), 62%);
          max-width: clamp(290px, 28vw, 420px);
          padding: 18px 24px;
          background: rgba(255, 245, 233, 0.78);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: 24px 24px 24px 6px;
          box-shadow: 0 12px 35px rgba(52, 25, 30, 0.16);
          box-sizing: border-box;
          z-index: 20;
        }

        .bubble-tail {
          position: absolute;
          bottom: -19px;
          left: 8px;
          pointer-events: none;
          filter: drop-shadow(
            0 3px 4px rgba(52, 25, 30, 0.1)
          );
        }

        .bubble-heading {
          font-family: inherit;
          font-size: clamp(1.3rem, 1.9vw, 1.75rem);
          font-weight: 800;
          color: #542c39;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .bubble-subtitle {
          font-size: clamp(0.78rem, 0.95vw, 0.88rem);
          color: #8e5866;
          font-weight: 600;
          margin-top: 6px;
          letter-spacing: 0.01em;
          line-height: 1.45;
        }

        /* Scroll button */
        .scroll-invitation-container {
          position: absolute;
          bottom: 24px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          pointer-events: none;
          z-index: 15;
        }

        .scroll-invitation {
          pointer-events: auto;
          background: rgba(255, 245, 233, 0.72);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          border-radius: 9999px;
          padding: 10px 26px;
          color: #542c39;
          font-weight: 700;
          font-size: 0.86rem;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow:
            0 8px 32px rgba(52, 25, 30, 0.15),
            inset 0 1px 1px rgba(255, 255, 255, 0.9);
          outline: none;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, background 0.3s ease;
        }

        .scroll-invitation:hover {
          transform: translateY(-2px);
          box-shadow:
            0 12px 36px rgba(52, 25, 30, 0.22),
            0 0 20px rgba(231, 200, 107, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.95);
        }

        .scroll-invitation:active,
        .scroll-invitation.is-stepping {
          transform: translateY(2px) scale(0.97);
          background: rgba(255, 245, 233, 0.92);
          box-shadow:
            0 4px 18px rgba(52, 25, 30, 0.25),
            0 0 35px rgba(231, 200, 107, 0.75),
            inset 0 1px 2px rgba(255, 255, 255, 1);
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }

        .chevron-stepping {
          animation: chevron-pulse 0.65s infinite alternate ease-in-out;
        }

        @keyframes chevron-pulse {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(5px);
          }
        }

        /* Atmospheric Portal Wash when stepping inside */
        .courtyard-portal-wash {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 60%, rgba(255, 245, 233, 0) 20%, rgba(84, 44, 57, 0.3) 100%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.85s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 12;
        }

        .courtyard-portal-wash.active {
          opacity: 1;
        }

        /* Avatar and speech bubble response on step */
        .courtyard-avatar-container {
          transition: transform 0.95s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .courtyard-avatar-container.is-stepping {
          transform: translateX(-50%) scale(1.035) translateY(8px);
        }

        .curator-speech-bubble {
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .curator-speech-bubble.is-stepping {
          opacity: 0;
          transform: translateY(-12px);
        }

        /* Mobile layout */
        @media (max-width: 680px) {
          .courtyard-avatar-container {
            width: 90vw;
            max-height: 65%;
          }

          .courtyard-avatar-image {
            max-height: 65vh;
          }

          .curator-speech-bubble {
            top: 105px;
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
            max-width: 90%;
          }
        }

        /* Respect reduced-motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .courtyard-avatar-image {
            animation: none;
          }

          .scroll-invitation {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
