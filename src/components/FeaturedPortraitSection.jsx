import React, { useState } from 'react';
import { Sparkles, X, ArrowRight, CheckCircle2, ShoppingBag, ShieldCheck, CornerDownRight } from 'lucide-react';

export default function FeaturedPortraitSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // 'agrimart' | 'zypha' | null
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSelectedProject(null); // start on selection menu
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="gallery"
      style={{
        position: 'relative',
        backgroundColor: '#404B40', // Muted sage green museum room harmonizing with wall art
        color: 'var(--color-cream)',
        paddingTop: '90px',
        paddingBottom: '90px',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #3A202B 0%, #353D35 40%, #2A312A 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-narrow"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        {/* Curatorial Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(231, 200, 107, 0.18)',
              border: '1px solid rgba(231, 200, 107, 0.35)',
              color: 'var(--color-yellow)',
              fontSize: '0.76rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            <Sparkles size={13} />
            <span>Room 03 • The Project Gallery</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              color: 'var(--color-cream)',
              lineHeight: 1.15,
              marginBottom: '10px',
            }}
          >
            The Featured Collection
          </h2>

          <p
            style={{
              fontSize: '0.98rem',
              color: 'rgba(255, 245, 233, 0.82)',
              lineHeight: 1.6,
            }}
          >
            Within this gallery wall hangs the gateway to my primary design works. Click the illuminated framed portrait
            to select and explore a case study.
          </p>
        </div>

        {/* The Exact Supplied Visual "WhatsApp Image 2026-10-23 at 02.34.30(1).jpeg" */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1024px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(15, 20, 15, 0.7), 0 0 0 1px rgba(231, 200, 107, 0.2)',
            background: '#2B322B',
          }}
        >
          {/* Base Landscape Museum Image */}
          <img
            src="/museum_gallery_framed_wall.jpg"
            alt="Quiet museum gallery wall with framed portrait on the right"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              aspectRatio: '1024 / 576',
              objectFit: 'contain',
            }}
          />

          {/* Interactive Clickable Hotspot Aligned with the Framed Portrait */}
          <button
            onClick={handleOpenModal}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            aria-label="Click framed portrait to open project selection for AgriMart and Zypha"
            style={{
              position: 'absolute',
              // Exact measured percentage coordinates of the gold frame in 1024x576:
              left: '64.65%',
              top: '26.74%',
              width: '16.80%',
              height: '36.11%',
              background: isHovered ? 'rgba(231, 200, 107, 0.12)' : 'transparent',
              border: isHovered ? '2px solid #E7C86B' : '1px solid rgba(231, 200, 107, 0.35)',
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: isHovered
                ? '0 0 25px rgba(231, 200, 107, 0.7), inset 0 0 15px rgba(231, 200, 107, 0.3)'
                : '0 0 10px rgba(231, 200, 107, 0.15)',
              transform: isHovered ? 'scale(1.025)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              outline: 'none',
              zIndex: 10,
              padding: 0,
            }}
          >
            {/* Subtle floating discovery badge on hover */}
            <span
              style={{
                position: 'absolute',
                bottom: '-28px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(42, 16, 26, 0.95)',
                color: 'var(--color-yellow)',
                border: '1px solid var(--color-yellow)',
                borderRadius: '999px',
                padding: '3px 10px',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.2s ease',
                pointerEvents: 'none',
              }}
            >
              Click to Explore Projects
            </span>
          </button>
        </div>

        {/* Accessible Text Action Link */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleOpenModal}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-yellow)',
              fontSize: '0.9rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              padding: '6px 12px',
            }}
          >
            <span>Explore Featured Projects in Frame (AgriMart & Zypha)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* =========================================================================
          THE TWO-PROJECT SELECTION INTERFACE (MODAL)
          Presents exactly two options:
          - AgriMart — Farm-to-Customer Digital Platform
          - Zypha — AI-Powered Medicine Delivery Platform
          ========================================================================= */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(20, 8, 14, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'modalFadeIn 0.25s ease-out',
          }}
          onClick={handleCloseModal}
        >
          <div
            className="museum-plaque-dark"
            style={{
              width: '100%',
              maxWidth: '680px',
              borderRadius: '24px',
              padding: 'clamp(28px, 4vw, 44px)',
              background: '#2B131D', // Deep burgundy curatorial background
              border: '1.5px solid rgba(231, 200, 107, 0.5)',
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.8), 0 0 50px rgba(231, 200, 107, 0.2)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={handleCloseModal}
              aria-label="Close project selection"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 245, 233, 0.1)',
                border: '1px solid rgba(255, 245, 233, 0.15)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: 'var(--color-cream)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.1)')}
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div>
              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-yellow)',
                  marginBottom: '6px',
                }}
              >
                Curated Exhibition Archive
              </div>
              <h3
                id="project-modal-title"
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: 'var(--color-cream)',
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Featured Design Projects
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'rgba(255, 245, 233, 0.75)',
                  margin: '6px 0 0 0',
                }}
              >
                Select a project below to open its case study overview:
              </p>
            </div>

            {/* The Two Project Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Option 1: AgriMart */}
              <button
                onClick={() => setSelectedProject('agrimart')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '22px 24px',
                  borderRadius: '16px',
                  background:
                    selectedProject === 'agrimart'
                      ? 'rgba(231, 200, 107, 0.15)'
                      : 'rgba(255, 245, 233, 0.05)',
                  border:
                    selectedProject === 'agrimart'
                      ? '2px solid var(--color-yellow)'
                      : '1px solid rgba(255, 245, 233, 0.15)',
                  color: 'var(--color-cream)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'var(--transition-smooth)',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (selectedProject !== 'agrimart') {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(231, 200, 107, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedProject !== 'agrimart') {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 245, 233, 0.15)';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#1F2E1E',
                      border: '1px solid rgba(163, 230, 53, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ShoppingBag size={22} color="#A3E635" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#A3E635', fontWeight: 800, textTransform: 'uppercase' }}>
                      Option 01
                    </div>
                    <div className="font-serif" style={{ fontSize: '1.28rem', fontWeight: 800, color: 'var(--color-cream)' }}>
                      AgriMart
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'rgba(255, 245, 233, 0.75)', marginTop: '2px' }}>
                      Farm-to-Customer Digital Platform
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: selectedProject === 'agrimart' ? 'var(--color-yellow)' : 'rgba(255, 245, 233, 0.5)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                  }}
                >
                  <span>{selectedProject === 'agrimart' ? 'Selected' : 'Select'}</span>
                  <ArrowRight size={16} />
                </div>
              </button>

              {/* Option 2: Zypha */}
              <button
                onClick={() => setSelectedProject('zypha')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '22px 24px',
                  borderRadius: '16px',
                  background:
                    selectedProject === 'zypha'
                      ? 'rgba(213, 221, 246, 0.18)'
                      : 'rgba(255, 245, 233, 0.05)',
                  border:
                    selectedProject === 'zypha'
                      ? '2px solid var(--color-blue)'
                      : '1px solid rgba(255, 245, 233, 0.15)',
                  color: 'var(--color-cream)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'var(--transition-smooth)',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (selectedProject !== 'zypha') {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(213, 221, 246, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedProject !== 'zypha') {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 245, 233, 0.15)';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#1A233A',
                      border: '1px solid rgba(213, 221, 246, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={22} color="var(--color-blue)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--color-blue)', fontWeight: 800, textTransform: 'uppercase' }}>
                      Option 02
                    </div>
                    <div className="font-serif" style={{ fontSize: '1.28rem', fontWeight: 800, color: 'var(--color-cream)' }}>
                      Zypha
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'rgba(255, 245, 233, 0.75)', marginTop: '2px' }}>
                      AI-Powered Medicine Delivery Platform
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: selectedProject === 'zypha' ? 'var(--color-blue)' : 'rgba(255, 245, 233, 0.5)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                  }}
                >
                  <span>{selectedProject === 'zypha' ? 'Selected' : 'Select'}</span>
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>

            {/* Selected Project Status View (Placeholder for future detailed case study step) */}
            {selectedProject && (
              <div
                style={{
                  padding: '18px 20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 245, 233, 0.06)',
                  border: '1px dashed rgba(231, 200, 107, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  animation: 'modalFadeIn 0.2s ease-out',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-yellow)', fontWeight: 800, textTransform: 'uppercase' }}>
                    Active Project Selection:
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--color-cream)', marginTop: '2px' }}>
                    {selectedProject === 'agrimart'
                      ? 'AgriMart — Farm-to-Customer Digital Platform'
                      : 'Zypha — AI-Powered Medicine Delivery Platform'}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255, 245, 233, 0.65)', marginTop: '4px' }}>
                    * Detailed case study layout and visuals will be implemented in the next phase.
                  </div>
                </div>

                <button
                  onClick={handleCloseModal}
                  style={{
                    background: 'var(--color-yellow)',
                    color: '#2A101A',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    padding: '8px 18px',
                    borderRadius: '999px',
                    border: 'none',
                    cursor: 'pointer',
                    flexShrink: 0,
                    marginLeft: '12px',
                  }}
                >
                  Confirm & Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
