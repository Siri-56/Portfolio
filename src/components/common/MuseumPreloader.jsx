import React, { useState, useEffect, useRef } from 'react';

const PRELOAD_ASSETS = [
  // Primary Scene Visuals
  '/scenes/courtyard_background.png',
  '/scenes/courtyard_avatar.png',
  '/scenes/gallery_wall_room.jpg',
  '/scenes/quiet_wall_background.jpg',
  '/scenes/guestbook_background.jpg',

  // Museum Gallery Framed Artworks
  '/frames/frame_zypha.png',
  '/frames/frame_agrimart.png',
  '/frames/frame_classical_vista.png',
  '/frames/frame_sunset.png',
  '/frames/frame_curator_studio.png',

  // Case Study Device Showcases
  '/case-studies/agrimart/hero_devices.png',
  '/case-studies/agrimart/mobile_screens.png',
  '/case-studies/agrimart/web_laptop.png',
  '/case-studies/zypha/zypha_hero.png',
  '/case-studies/zypha/research_board.png',

  // Personas
  '/personas/persona_ramesh.png',
  '/personas/persona_priya.png',
  '/personas/persona_meera.png',
  '/personas/persona_aarav.png',
  '/personas/persona_sandeep.png',
];

export default function MuseumPreloader({ onLoaded }) {
  const [actualProgress, setActualProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = PRELOAD_ASSETS.length;

    const markLoaded = () => {
      loadedCount++;
      const nextRatio = Math.min(100, Math.round((loadedCount / totalAssets) * 100));
      progressRef.current = nextRatio;
      setActualProgress(nextRatio);
    };

    // Preload and decode all images into memory
    PRELOAD_ASSETS.forEach((src) => {
      const img = new Image();
      img.src = src;

      if (img.decode) {
        img
          .decode()
          .then(markLoaded)
          .catch(() => {
            // Fallback if decode rejects
            if (img.complete) {
              markLoaded();
            } else {
              img.onload = markLoaded;
              img.onerror = markLoaded;
            }
          });
      } else {
        if (img.complete) {
          markLoaded();
        } else {
          img.onload = markLoaded;
          img.onerror = markLoaded;
        }
      }
    });

    // Also wait for custom webfonts to render cleanly
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // Slight bump
      }).catch(() => {});
    }

    // Safety fallback: Never keep the user waiting longer than 7 seconds on slow connections
    const fallbackTimer = setTimeout(() => {
      progressRef.current = 100;
      setActualProgress(100);
    }, 7000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  // Smoothly interpolate the visible progress bar number
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        const target = progressRef.current;
        if (prev < target) {
          const step = Math.max(1, Math.ceil((target - prev) * 0.2));
          return Math.min(target, prev + step);
        }
        return prev;
      });
    }, 24);

    return () => clearInterval(interval);
  }, []);

  // When display reaches 100%, trigger smooth exit
  useEffect(() => {
    if (displayProgress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsFadingOut(true);
        if (onLoaded) onLoaded();

        const removeTimer = setTimeout(() => {
          setIsRemoved(true);
        }, 850);

        return () => clearTimeout(removeTimer);
      }, 400);

      return () => clearTimeout(exitTimer);
    }
  }, [displayProgress, onLoaded]);

  if (isRemoved) return null;

  // Curatorial status message based on current load phase
  const getStatusText = () => {
    if (displayProgress < 25) return 'Welcoming you to the courtyard...';
    if (displayProgress < 60) return 'Illuminating project paintings & frames...';
    if (displayProgress < 90) return 'Polishing interactive case studies...';
    if (displayProgress < 100) return 'Tuning gallery acoustics & ambiance...';
    return 'Exhibition ready — welcome inside.';
  };

  return (
    <div
      className={`museum-preloader-backdrop ${isFadingOut ? 'is-fading-out' : ''}`}
      aria-hidden={isFadingOut}
    >
      <div className="museum-preloader-card">
        {/* Arch Monogram / Museum Portal Icon */}
        <div className="museum-arch-emblem" aria-hidden="true">
          <svg
            width="56"
            height="68"
            viewBox="0 0 56 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 64V28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28V64"
              stroke="#E7C86B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M14 64V30C14 22.268 20.268 16 28 16C35.732 16 42 22.268 42 30V64"
              stroke="rgba(231, 200, 107, 0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="28" cy="30" r="3.5" fill="#E7C86B" />
          </svg>
        </div>

        {/* Museum Header */}
        <div className="museum-preloader-titles">
          <span className="museum-preloader-eyebrow">EXHIBITION PREVIEW</span>
          <h1 className="museum-preloader-name">The Little Museum of Ideas</h1>
          <p className="museum-preloader-curator">UI/UX Portfolio of Sirisha Kolluru</p>
        </div>

        {/* Progress Bar Container */}
        <div className="museum-progress-track">
          <div
            className="museum-progress-fill"
            style={{ width: `${displayProgress}%` }}
          />
        </div>

        {/* Footer Info: Percentage & Phase */}
        <div className="museum-preloader-footer">
          <span className="museum-status-indicator">{getStatusText()}</span>
          <span className="museum-percent-badge">{displayProgress}%</span>
        </div>
      </div>

      <style>{`
        .museum-preloader-backdrop {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background:
            radial-gradient(circle at 50% 40%, rgba(94, 38, 56, 0.92) 0%, rgba(26, 8, 16, 0.98) 75%),
            #1A0810;
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }

        .museum-preloader-backdrop.is-fading-out {
          opacity: 0;
          transform: scale(1.025);
          pointer-events: none;
        }

        .museum-preloader-card {
          width: 100%;
          max-width: 460px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
          padding: 40px 32px;
          background: rgba(43, 16, 26, 0.72);
          border: 1.5px solid rgba(231, 200, 107, 0.32);
          border-radius: 28px;
          box-shadow:
            0 24px 70px rgba(0, 0, 0, 0.6),
            0 0 50px rgba(231, 200, 107, 0.12),
            inset 0 1px 2px rgba(255, 245, 233, 0.2);
        }

        .museum-arch-emblem {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 6px 16px rgba(231, 200, 107, 0.35));
          animation: emblem-breathe 3.6s ease-in-out infinite;
        }

        @keyframes emblem-breathe {
          0%, 100% {
            transform: translateY(0);
            filter: drop-shadow(0 6px 16px rgba(231, 200, 107, 0.3));
          }
          50% {
            transform: translateY(-4px);
            filter: drop-shadow(0 10px 24px rgba(231, 200, 107, 0.55));
          }
        }

        .museum-preloader-titles {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .museum-preloader-eyebrow {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #E7C86B;
          text-transform: uppercase;
        }

        .museum-preloader-name {
          margin: 0;
          font-family: 'Fraunces', Georgia, serif;
          font-size: clamp(1.45rem, 3.2vw, 1.95rem);
          font-weight: 700;
          color: #FFF5E9;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .museum-preloader-curator {
          margin: 0;
          font-size: 0.86rem;
          color: rgba(255, 245, 233, 0.72);
          font-weight: 500;
        }

        /* Progress Track */
        .museum-progress-track {
          width: 100%;
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          position: relative;
        }

        .museum-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #D6B24D 0%, #E7C86B 60%, #FFF5E9 100%);
          border-radius: 999px;
          transition: width 0.12s ease-out;
          box-shadow: 0 0 14px rgba(231, 200, 107, 0.75);
          position: relative;
        }

        .museum-progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 30px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8));
          filter: blur(2px);
        }

        /* Footer */
        .museum-preloader-footer {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
          gap: 12px;
        }

        .museum-status-indicator {
          color: rgba(255, 245, 233, 0.72);
          font-style: italic;
          text-align: left;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .museum-percent-badge {
          color: #E7C86B;
          font-weight: 800;
          font-family: monospace;
          letter-spacing: 0.04em;
          background: rgba(231, 200, 107, 0.14);
          padding: 3px 10px;
          border-radius: 999px;
          border: 1px solid rgba(231, 200, 107, 0.3);
          flex-shrink: 0;
        }

        @media (max-width: 520px) {
          .museum-preloader-card {
            padding: 32px 22px;
            gap: 20px;
          }
          .museum-preloader-footer {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
          .museum-status-indicator {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
