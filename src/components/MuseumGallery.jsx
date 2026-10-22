import React from 'react';
import { ArrowDownRight, Sparkles, ExternalLink, ShieldCheck, ShoppingBag, Eye } from 'lucide-react';

export default function MuseumGallery() {
  const scrollToProject = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="gallery"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#4A2330', // Deep burgundy gallery tone
        paddingTop: '80px',
        paddingBottom: '90px',
        overflow: 'hidden',
        color: 'var(--color-cream)',
      }}
    >
      {/* Illustrated Museum Gallery Background Art */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/museum_gallery_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.35,
          zIndex: 1,
        }}
      />

      {/* Atmospheric Gallery Spotlights Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(84, 44, 57, 0.85) 0%, rgba(61, 28, 39, 0.94) 50%, rgba(42, 16, 26, 0.98) 100%)',
          zIndex: 2,
        }}
      />

      <div
        className="container-narrow"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
        }}
      >
        {/* Gallery Room Header & Curatorial Plaque */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(231, 200, 107, 0.15)',
              border: '1px solid rgba(231, 200, 107, 0.3)',
              color: 'var(--color-yellow)',
              fontSize: '0.76rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            <Sparkles size={13} />
            <span>Room 02 • Project Wing</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              color: 'var(--color-cream)',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}
          >
            The Exhibition Gallery
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255, 245, 233, 0.8)',
              lineHeight: 1.6,
            }}
          >
            Two primary design works are on display. Select an interactive framed exhibit to view its complete
            problem-to-solution case study.
          </p>
        </div>

        {/* 2 Prominent Interactive Framed Exhibits */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
            maxWidth: '1040px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* EXHIBIT 1: AGRIMART */}
          <div
            className="gold-frame-interactive"
            onClick={() => scrollToProject('agrimart')}
            style={{
              borderRadius: '16px',
              background: '#2B131D',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-frame)',
              position: 'relative',
            }}
          >
            {/* Museum Spotlight Accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: '4px',
                background: 'var(--color-yellow)',
                boxShadow: '0 0 20px var(--color-yellow)',
                borderRadius: '0 0 8px 8px',
              }}
            />

            {/* Artwork Canvas / UI Preview */}
            <div
              style={{
                height: '240px',
                background: 'linear-gradient(135deg, #1A2818 0%, #0E170E 100%)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '2px solid rgba(231, 200, 107, 0.25)',
              }}
            >
              {/* Subtle Illustrated Farm Pattern */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.12,
                  backgroundImage: 'radial-gradient(#A3E635 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#A3E635',
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(163, 230, 53, 0.3)',
                  }}
                >
                  Featured Exhibit 01
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'rgba(255, 245, 233, 0.7)',
                    fontWeight: 600,
                  }}
                >
                  Figma • React
                </span>
              </div>

              {/* Central Graphic Showcase */}
              <div
                style={{
                  zIndex: 2,
                  background: 'rgba(20, 32, 20, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(163, 230, 53, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <ShoppingBag size={18} color="#A3E635" />
                  <span
                    className="font-serif"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#FFF5E9',
                    }}
                  >
                    AgriMart
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#D5DDF6' }}>
                  Direct farm-to-customer agricultural marketplace & producer management suite.
                </div>
              </div>
            </div>

            {/* Museum Plaque Mounted Below Frame */}
            <div
              style={{
                padding: '22px 24px',
                background: '#3A1B27',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-yellow)',
                    marginBottom: '2px',
                  }}
                >
                  Gallery Catalog #01
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#FFF5E9',
                    lineHeight: 1.2,
                  }}
                >
                  AgriMart — Agricultural Platform
                </h3>
              </div>

              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255, 245, 233, 0.75)',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Solving fragmented food supply chains through clear discovery, fair pricing transparency, and an intuitive
                farmer dashboard.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 245, 233, 0.1)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--color-yellow)',
                }}
              >
                <span>Read Full Case Study</span>
                <ArrowDownRight size={16} />
              </div>
            </div>
          </div>

          {/* EXHIBIT 2: ZYPHA */}
          <div
            className="gold-frame-interactive"
            onClick={() => scrollToProject('zypha')}
            style={{
              borderRadius: '16px',
              background: '#1F1B2B',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-frame)',
              position: 'relative',
            }}
          >
            {/* Museum Spotlight Accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: '4px',
                background: 'var(--color-blue)',
                boxShadow: '0 0 20px var(--color-blue)',
                borderRadius: '0 0 8px 8px',
              }}
            />

            {/* Artwork Canvas / UI Preview */}
            <div
              style={{
                height: '240px',
                background: 'linear-gradient(135deg, #18233C 0%, #0E1526 100%)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '2px solid rgba(213, 221, 246, 0.25)',
              }}
            >
              {/* Subtle Tech Pattern */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.1,
                  backgroundImage: 'radial-gradient(#93C5FD 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-blue)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(213, 221, 246, 0.3)',
                  }}
                >
                  Featured Exhibit 02
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'rgba(255, 245, 233, 0.7)',
                    fontWeight: 600,
                  }}
                >
                  Figma • FigJam
                </span>
              </div>

              {/* Central Graphic Showcase */}
              <div
                style={{
                  zIndex: 2,
                  background: 'rgba(20, 28, 48, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(213, 221, 246, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <ShieldCheck size={18} color="var(--color-blue)" />
                  <span
                    className="font-serif"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#FFF5E9',
                    }}
                  >
                    Zypha
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#FFF5E9' }}>
                  AI-powered prescription medicine delivery with verified dosage safety safeguards.
                </div>
              </div>
            </div>

            {/* Museum Plaque Mounted Below Frame */}
            <div
              style={{
                padding: '22px 24px',
                background: '#3A1B27',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-blue)',
                    marginBottom: '2px',
                  }}
                >
                  Gallery Catalog #02
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#FFF5E9',
                    lineHeight: 1.2,
                  }}
                >
                  Zypha — AI Medicine Platform
                </h3>
              </div>

              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255, 245, 233, 0.75)',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Human-centered healthcare design addressing medication adherence, prescription scanning clarity, and
                emergency order assistance.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 245, 233, 0.1)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--color-blue)',
                }}
              >
                <span>Read Full Case Study</span>
                <ArrowDownRight size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Curatorial Note */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '0.82rem',
            color: 'rgba(255, 245, 233, 0.55)',
            fontStyle: 'italic',
          }}
        >
          * Additional artworks and guest exhibits in the background are part of the museum's permanent historical collection.
        </div>
      </div>
    </section>
  );
}
