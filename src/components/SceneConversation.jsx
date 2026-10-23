import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Landmark, Leaf } from 'lucide-react';
import AgriMartModal from './AgriMartModal';
import ZyphaModal from './ZyphaModal';

export default function SceneConversation() {
  const [activeProject, setActiveProject] = useState(null); // 'agrimart' | 'zypha' | null
  const [hoveredProject, setHoveredProject] = useState(null); // 'agrimart' | 'zypha' | null

  // Ref and bounds for locking hotspots exactly onto paintings across all aspect ratios
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

      // Natural image dimensions: 1024 x 682
      const imgAspect = 1024 / 682;
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

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeProject]);

  const handleScrollToNext = () => {
    const el = document.getElementById('gallery-wall') || document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
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
        backgroundColor: '#4A2330', // Deep burgundy base
      }}
    >
      {/* 1st Supplied Visual: Warm Conversation in the Art Gallery — FULL SCREEN, CRISP ORIGINAL QUALITY */}
      <img
        src="/museum_gallery_conversation.png"
        alt="Sirisha in the art gallery speaking with a visitor and pointing towards a painting"
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

      {/* Responsive Aspect-Ratio Aligned Hotspot Layer Locked to Painting Frames */}
      <div
        style={{
          ...overlayStyle,
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        {/* =========================================================================
            PORTRAIT 1: AGRIMART (Left Gold-Framed Portrait Artwork & Hotspot)
            ========================================================================= */}
        {/* Pasted Artwork Canvas inside the gold frame */}
        <div
          style={{
            position: 'absolute',
            left: '14.16%',
            top: '27.57%',
            width: '9.08%',
            height: '15.84%',
            overflow: 'hidden',
            borderRadius: '2px',
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.7)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <img
            src="/agrimart_portrait_artwork.jpg"
            alt="AgriMart Case Study Art"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              filter: hoveredProject === 'agrimart' ? 'brightness(1.08) contrast(1.04)' : 'brightness(0.96)',
              transform: hoveredProject === 'agrimart' ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
          {/* Subtle museum glass glare */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 40%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* AgriMart Clickable Hotspot Button & Badge */}
        <button
          id="portrait-hotspot-agrimart"
          onClick={() => setActiveProject('agrimart')}
          onMouseEnter={() => setHoveredProject('agrimart')}
          onMouseLeave={() => setHoveredProject(null)}
          onFocus={() => setHoveredProject('agrimart')}
          onBlur={() => setHoveredProject(null)}
          aria-label="Click portrait to open AgriMart project case study"
          style={{
            position: 'absolute',
            left: '12.8%',
            top: '25.0%',
            width: '11.8%',
            height: '21.8%',
            background:
              hoveredProject === 'agrimart' ? 'rgba(231, 200, 107, 0.15)' : 'transparent',
            border:
              hoveredProject === 'agrimart'
                ? '3px solid #E7C86B'
                : '1.5px solid transparent',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow:
              hoveredProject === 'agrimart'
                ? '0 0 35px rgba(231, 200, 107, 0.9), inset 0 0 20px rgba(231, 200, 107, 0.4)'
                : 'none',
            transform: hoveredProject === 'agrimart' ? 'scale(1.025)' : 'scale(1)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            outline: 'none',
            pointerEvents: 'auto',
            padding: 0,
            zIndex: 5,
          }}
          title="AgriMart — Click portrait to view case study"
        >
          {/* Floating Pill Badge */}
          <span
            style={{
              position: 'absolute',
              bottom: '-34px',
              left: '50%',
              transform: hoveredProject === 'agrimart' ? 'translateX(-50%) translateY(-2px)' : 'translateX(-50%)',
              background: 'rgba(42, 16, 26, 0.95)',
              color: 'var(--color-yellow)',
              border: '1.5px solid var(--color-yellow)',
              borderRadius: '999px',
              padding: '5px 14px',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              boxShadow: hoveredProject === 'agrimart'
                ? '0 8px 22px rgba(0,0,0,0.7), 0 0 15px rgba(231, 200, 107, 0.4)'
                : '0 4px 14px rgba(0,0,0,0.5)',
              transition: 'all 0.2s ease',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={13} />
            <span>{hoveredProject === 'agrimart' ? 'AgriMart • Case Study' : 'AgriMart'}</span>
          </span>
        </button>



        {/* =========================================================================
            PORTRAIT 2: ZYPHA (Right Gold-Framed Portrait Artwork & Hotspot)
            ========================================================================= */}
        {/* Pasted Artwork Canvas inside the gold frame */}
        <div
          style={{
            position: 'absolute',
            left: '66.60%',
            top: '26.39%',
            width: '8.40%',
            height: '19.06%',
            overflow: 'hidden',
            borderRadius: '2px',
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.7)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <img
            src="/zypha_portrait_artwork.jpg"
            alt="Zypha Case Study Art"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              filter: hoveredProject === 'zypha' ? 'brightness(1.08) contrast(1.04)' : 'brightness(0.96)',
              transform: hoveredProject === 'zypha' ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
          {/* Subtle museum glass glare */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 40%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Zypha Clickable Hotspot Button & Badge */}
        <button
          id="portrait-hotspot-zypha"
          onClick={() => setActiveProject('zypha')}
          onMouseEnter={() => setHoveredProject('zypha')}
          onMouseLeave={() => setHoveredProject(null)}
          onFocus={() => setHoveredProject('zypha')}
          onBlur={() => setHoveredProject(null)}
          aria-label="Click portrait to open Zypha project case study"
          style={{
            position: 'absolute',
            left: '65.2%',
            top: '24.2%',
            width: '11.2%',
            height: '24.2%',
            background:
              hoveredProject === 'zypha' ? 'rgba(213, 221, 246, 0.15)' : 'transparent',
            border:
              hoveredProject === 'zypha'
                ? '3px solid #D5DDF6'
                : '1.5px solid transparent',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow:
              hoveredProject === 'zypha'
                ? '0 0 35px rgba(213, 221, 246, 0.9), inset 0 0 20px rgba(213, 221, 246, 0.4)'
                : 'none',
            transform: hoveredProject === 'zypha' ? 'scale(1.025)' : 'scale(1)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            outline: 'none',
            pointerEvents: 'auto',
            padding: 0,
            zIndex: 5,
          }}
          title="Zypha — Click portrait to view case study"
        >
          {/* Floating Pill Badge */}
          <span
            style={{
              position: 'absolute',
              bottom: '-34px',
              left: '50%',
              transform: hoveredProject === 'zypha' ? 'translateX(-50%) translateY(-2px)' : 'translateX(-50%)',
              background: 'rgba(20, 28, 48, 0.95)',
              color: '#D5DDF6',
              border: '1.5px solid #D5DDF6',
              borderRadius: '999px',
              padding: '5px 14px',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              boxShadow: hoveredProject === 'zypha'
                ? '0 8px 22px rgba(0,0,0,0.7), 0 0 15px rgba(213, 221, 246, 0.4)'
                : '0 4px 14px rgba(0,0,0,0.5)',
              transition: 'all 0.2s ease',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={13} />
            <span>{hoveredProject === 'zypha' ? 'Zypha • Case Study' : 'Zypha'}</span>
          </span>
        </button>


      </div>

      {/* Bottom Right Glassy Exhibition Plaque (Right side of the girl) */}
      <div
        className="glassy-exhibition-card"
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '28px',
          zIndex: 10,
          maxWidth: '380px',
          width: 'calc(100% - 56px)',
          padding: '24px 22px',
          background: 'rgba(255, 245, 233, 0.72)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          border: '1.5px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '26px',
          boxShadow: '0 16px 45px rgba(52, 25, 30, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Header Row: Museum Icon + Category + Star Accent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          {/* Left: Circular Museum Icon + Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: 'rgba(84, 44, 57, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Landmark size={14} color="#542c39" strokeWidth={2} />
            </div>
            <span
              style={{
                fontSize: '0.64rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#7f4e5a',
              }}
            >
              Exhibition Gallery • Featured Projects
            </span>
          </div>

          {/* Right: Thin horizontal line + 4-point star */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <div
              style={{
                width: '32px',
                height: '1px',
                background: 'rgba(84, 44, 57, 0.35)',
              }}
            />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#542c39">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(1.7rem, 2.3vw, 2.15rem)',
            fontWeight: 800,
            color: '#4a2330',
            lineHeight: 1.15,
            margin: '0 0 10px 0',
            letterSpacing: '-0.01em',
          }}
        >
          The Little Museum of Ideas
        </h2>

        {/* Subtitle Description */}
        <p
          style={{
            fontSize: '0.86rem',
            color: '#542c39',
            fontWeight: 500,
            lineHeight: 1.48,
            margin: '0 0 16px 0',
            opacity: 0.92,
          }}
        >
          Click the illuminated portraits on the wall to explore <strong>AgriMart</strong> and <strong>Zypha</strong>.
        </p>

        {/* Project Card 1: AgriMart */}
        <button
          onClick={() => setActiveProject('agrimart')}
          onMouseEnter={() => setHoveredProject('agrimart')}
          onMouseLeave={() => setHoveredProject(null)}
          aria-label="View AgriMart case study"
          style={{
            width: '100%',
            background:
              hoveredProject === 'agrimart'
                ? 'rgba(216, 234, 202, 0.96)'
                : 'rgba(232, 241, 222, 0.88)',
            border: '1px solid rgba(175, 205, 160, 0.55)',
            borderRadius: '18px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            cursor: 'pointer',
            textAlign: 'left',
            boxShadow:
              hoveredProject === 'agrimart'
                ? '0 6px 20px rgba(45, 80, 40, 0.16)'
                : '0 2px 8px rgba(0, 0, 0, 0.04)',
            transform: hoveredProject === 'agrimart' ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.22s ease',
            boxSizing: 'border-box',
            outline: 'none',
          }}
        >
          {/* Leaf Icon Circle */}
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(206, 226, 192, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Leaf size={22} color="#1b4720" fill="#1b4720" strokeWidth={1} />
          </div>

          <div style={{ minWidth: 0, flex: 1 }}>
            <div
              className="font-serif"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#1d4822',
                lineHeight: 1.2,
              }}
            >
              AgriMart
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#3d633c',
                marginTop: '3px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              From Fields to Your Doorstep
            </div>
          </div>
        </button>

        {/* Project Card 2: Zypha */}
        <button
          onClick={() => setActiveProject('zypha')}
          onMouseEnter={() => setHoveredProject('zypha')}
          onMouseLeave={() => setHoveredProject(null)}
          aria-label="View Zypha case study"
          style={{
            width: '100%',
            background:
              hoveredProject === 'zypha'
                ? 'rgba(255, 224, 226, 0.96)'
                : 'rgba(254, 235, 235, 0.88)',
            border: '1px solid rgba(238, 195, 199, 0.55)',
            borderRadius: '18px',
            padding: '12px 16px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            cursor: 'pointer',
            textAlign: 'left',
            boxShadow:
              hoveredProject === 'zypha'
                ? '0 6px 20px rgba(130, 40, 60, 0.16)'
                : '0 2px 8px rgba(0, 0, 0, 0.04)',
            transform: hoveredProject === 'zypha' ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.22s ease',
            boxSizing: 'border-box',
            outline: 'none',
          }}
        >
          {/* Medical Plus Cross Icon Circle */}
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(247, 207, 211, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#8f243b">
              <path d="M8 2H16V8H22V16H16V22H8V16H2V8H8V2Z" />
            </svg>
          </div>

          <div style={{ minWidth: 0, flex: 1 }}>
            <div
              className="font-serif"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#542c39',
                lineHeight: 1.2,
              }}
            >
              Zypha
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#7b4856',
                marginTop: '3px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              A Safer, Simpler Way to Manage Medicines
            </div>
          </div>
        </button>
      </div>

      {/* Bottom Center Floating Scroll Indicator (Exact Middle, Glassy) */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
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
          <span>Explore quiet gallery</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* =========================================================================
          INTERACTIVE CASE STUDY MODALS MATCHING REFERENCE DESIGNS
          ========================================================================= */}
      {activeProject === 'agrimart' && (
        <AgriMartModal onClose={() => setActiveProject(null)} />
      )}
      {activeProject === 'zypha' && (
        <ZyphaModal onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
