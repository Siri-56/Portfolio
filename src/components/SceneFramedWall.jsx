import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SceneFramedWall() {
  const containerRef = useRef(null);
  const [overlayStyle, setOverlayStyle] = useState({
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
  });

  useEffect(() => {
    const updateBounds = () => {
      if (!containerRef.current) return;
      const { clientWidth: W, clientHeight: H } = containerRef.current;
      if (!W || !H) return;

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

  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="gallery-wall"
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
        src="/museum_gallery_framed_wall.jpg"
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

      {/* Responsive Aspect-Ratio Layer Locked Exactly to the Green Wall Section */}
      <div
        style={{
          ...overlayStyle,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        {/* Wall Text Inscription on the Green Wall Area */}
        <div
          style={{
            position: 'absolute',
            left: '23.0%',
            top: '25.5%',
            width: '39.0%',
            maxWidth: '560px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            pointerEvents: 'auto',
          }}
        >
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.75rem, 2.8vw, 2.7rem)',
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
              fontSize: 'clamp(0.92rem, 1.28vw, 1.15rem)',
              color: 'rgba(255, 245, 233, 0.95)',
              fontWeight: 500,
              lineHeight: 1.68,
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
          onClick={handleScrollToAbout}
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
          <span>About the curator</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </section>
  );
}
