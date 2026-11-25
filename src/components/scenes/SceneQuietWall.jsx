import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { smoothScrollTo } from '../../utils/smoothScroll';

export default function SceneQuietWall() {
  const containerRef = useRef(null);
  const [isSteppingToContact, setIsSteppingToContact] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateBounds = () => {
      if (!containerRef.current) return;
      const { clientWidth: W, clientHeight: H } = containerRef.current;
      if (!W || !H) return;

      const mobile = W < 768 || W / H < 1.05;
      setIsMobile(mobile);

      // Natural image dimensions of museum_gallery_framed_wall.jpg: 1024 x 576 (16:9)
      const imgAspect = 1024 / 576;
      const containerAspect = W / H;

      let renderedW, renderedH, left, top;
      if (containerAspect > imgAspect) {
        renderedW = W;
        renderedH = W / imgAspect;
        left = 0;
        top = (H - renderedH) / 2;
      } else {
        renderedH = H;
        renderedW = H * imgAspect;
        top = 0;
        left = (W - renderedW) / 2;
      }

      setOverlayStyle({
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
        width: `${renderedW}px`,
        height: `${renderedH}px`,
      });
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  const handleScrollToContact = () => {
    if (isSteppingToContact) return;
    setIsSteppingToContact(true);
    const el = document.getElementById('contact');
    if (el) {
      smoothScrollTo(el, 950, () => {
        setTimeout(() => setIsSteppingToContact(false), 300);
      });
    } else {
      setIsSteppingToContact(false);
    }
  };

  return (
    <section
      id="about"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '28px',
        overflow: 'hidden',
        backgroundColor: '#404B40',
      }}
    >
      {/* 3rd Supplied Visual: Quiet gallery wall with framed portrait — FULL SCREEN, CRISP ORIGINAL QUALITY */}
      <img
        src="/scenes/quiet_wall_background.jpg"
        alt="Quiet gallery wall with the framed portrait"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 1,
          imageRendering: '-webkit-optimize-contrast',
        }}
      />

      {/* Responsive Aspect-Ratio Layer */}
      <div
        style={{
          ...(isMobile ? { position: 'absolute', inset: 0, width: '100%', height: '100%' } : overlayStyle),
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        {/* Wall Text Inscription on the Green Wall Area */}
        <div
          className="framed-wall-inscription"
          style={{
            position: 'absolute',
            left: isMobile ? '5%' : '23.0%',
            right: isMobile ? '5%' : 'auto',
            top: isMobile ? 'clamp(84px, 13vh, 115px)' : '25.5%',
            width: isMobile ? '90%' : '39.0%',
            maxWidth: isMobile ? '440px' : '560px',
            margin: isMobile ? '0 auto' : '0',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '10px' : '14px',
            padding: isMobile ? '20px 22px' : '0',
            background: isMobile ? 'rgba(32, 42, 32, 0.78)' : 'transparent',
            backdropFilter: isMobile ? 'blur(16px)' : 'none',
            WebkitBackdropFilter: isMobile ? 'blur(16px)' : 'none',
            borderRadius: isMobile ? '20px' : '0',
            border: isMobile ? '1px solid rgba(255, 255, 255, 0.25)' : 'none',
            boxShadow: isMobile ? '0 12px 35px rgba(0, 0, 0, 0.45)' : 'none',
            boxSizing: 'border-box',
            pointerEvents: 'auto',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1), transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2
            className="font-serif"
            style={{
              fontSize: isMobile ? 'clamp(1.5rem, 5.5vw, 1.85rem)' : 'clamp(1.75rem, 2.8vw, 2.7rem)',
              fontWeight: 800,
              color: '#FFF5E9',
              letterSpacing: '0.01em',
              lineHeight: 1.2,
              margin: 0,
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.55), 0 1px 3px rgba(0, 0, 0, 0.7)',
            }}
          >
            Hey, I’m Sirisha.
          </h2>

          <p
            style={{
              fontSize: isMobile ? '0.88rem' : 'clamp(0.92rem, 1.28vw, 1.15rem)',
              color: 'rgba(255, 245, 233, 0.95)',
              fontWeight: 500,
              lineHeight: isMobile ? 1.55 : 1.68,
              letterSpacing: '0.01em',
              margin: 0,
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.8)',
            }}
          >
            I’m drawn to the little things that make or break an experience — a confusing flow, an overlooked user need, or a detail that makes everything click. I enjoy turning these into thoughtful interfaces that feel simple to use and make sense to the people using them.
          </p>
        </div>
      </div>

      {/* Spacer to keep the visual unobstructed */}
      <div style={{ flexGrow: 1 }} />

      {/* Bottom Floating Scroll Invitation */}
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
          onClick={handleScrollToContact}
          className={`scroll-invitation-framed ${isSteppingToContact ? 'is-stepping' : ''}`}
        >
          <span>{isSteppingToContact ? 'Opening Guestbook...' : 'Get in touch'}</span>
          <ChevronDown size={16} className={`chevron-icon ${isSteppingToContact ? 'chevron-stepping' : ''}`} />
        </button>
      </div>

      <style>{`
        .scroll-invitation-framed {
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
          box-shadow: 0 8px 32px rgba(52, 25, 30, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.9);
          outline: none;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, background 0.3s ease;
        }

        .scroll-invitation-framed:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(52, 25, 30, 0.25), 0 0 20px rgba(231, 200, 107, 0.4);
        }

        .scroll-invitation-framed:active,
        .scroll-invitation-framed.is-stepping {
          transform: translateY(2px) scale(0.97);
          background: rgba(255, 245, 233, 0.92);
          box-shadow: 0 4px 16px rgba(52, 25, 30, 0.25), 0 0 35px rgba(231, 200, 107, 0.7);
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
            transform: translateY(4px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .framed-wall-inscription {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .scroll-invitation-framed {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
