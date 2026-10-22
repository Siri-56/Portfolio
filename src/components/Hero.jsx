import React, { useState } from 'react';
import AvatarCanvas from './AvatarCanvas';
import { Sparkles, Glasses, Eye, ArrowDown, ExternalLink } from 'lucide-react';

export default function Hero({
  name = 'ANITA',
  fullName = 'Anita Madadi',
  showGlasses = false,
  onToggleGlasses,
  sensitivity = 1
}) {
  const [blinkKey, setBlinkKey] = useState(0);

  // Parse first name for the giant headline
  const displayName = (name || 'ANITA').toUpperCase();

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '90px',
        paddingBottom: '60px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 30%, #2B1322 0%, #170A12 55%, #0F050B 100%)',
      }}
    >
      {/* Subtle Background Accent Grid */}
      <div
        className="bg-subtle-grid"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      {/* Floating 3D Orbs matching the reference screenshot */}
      {/* 1. Baby Blue Floating Orb (Bottom Left) */}
      <div
        className="orb-glow-blue"
        style={{
          width: '85px',
          height: '85px',
          left: 'clamp(5%, 12vw, 18%)',
          bottom: 'clamp(15%, 22vh, 32%)',
          zIndex: 5,
        }}
        title="Soft blue ambient light orb"
      />

      {/* 2. Cherry / Coral Gradient Orb (Right) */}
      <div
        className="orb-glow-cherry"
        style={{
          width: '95px',
          height: '95px',
          right: 'clamp(5%, 14vw, 22%)',
          top: 'clamp(38%, 46vh, 58%)',
          zIndex: 5,
        }}
        title="Cherry coral gradient orb"
      />

      {/* Hero Content Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        {/* Giant Headline Layer (HI, I'M [NAME]) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            textAlign: 'center',
            marginBottom: '-60px', // Creates tight visual lockup with avatar
            zIndex: 1,
            userSelect: 'none',
          }}
        >
          <h1
            className="hero-title-text"
            style={{
              fontSize: 'clamp(3.8rem, 13vw, 11rem)',
              margin: 0,
              display: 'inline-block',
              letterSpacing: '-0.02em',
              fontWeight: 900,
            }}
          >
            HI, I'M {displayName}
          </h1>
        </div>

        {/* Central Stage: Avatar with Tagline on Left */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1100px',
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 320px) 1fr minmax(180px, 280px)',
            alignItems: 'center',
            zIndex: 12,
          }}
          className="hero-stage-grid"
        >
          {/* Left Column: UI/UX Designer Tagline (exact replica of reference) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 15,
              paddingRight: '12px',
            }}
            className="hero-tagline-col"
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)',
                fontWeight: 800,
                color: '#FFF5E9',
                lineHeight: 1.35,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                maxWidth: '280px',
              }}
            >
              UI/UX DESIGNER PASSIONATE ABOUT CRAFTING BOLD AND MEMORABLE PROJECTS
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--cherry-rose)',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--cherry-rose)',
                }}
              />
              Design Systems & Interaction
            </div>
          </div>

          {/* Center Column: The Interactive Cursor-Tracking Avatar */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 20,
            }}
          >
            {/* Subtle backlight glow behind avatar */}
            <div
              style={{
                position: 'absolute',
                width: '70%',
                height: '70%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(233, 160, 168, 0.22) 0%, rgba(84, 44, 57, 0) 70%)',
                filter: 'blur(40px)',
                zIndex: -1,
              }}
            />

            {/* Avatar Canvas Component */}
            <div
              style={{
                width: '100%',
                maxWidth: '460px',
              }}
            >
              <AvatarCanvas
                key={blinkKey}
                showGlasses={showGlasses}
                sensitivity={sensitivity}
                interactive={true}
              />
            </div>
          </div>

          {/* Right Column: Interactive Micro-Actions */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              alignItems: 'flex-start',
              zIndex: 15,
              paddingLeft: '16px',
            }}
            className="hero-actions-col"
          >
            {/* Realtime Eye Tracking Indicator */}
            <div
              className="pill-badge pill-cherry"
              style={{
                boxShadow: '0 4px 15px rgba(233, 160, 168, 0.15)',
              }}
            >
              <Eye size={14} />
              <span>Eyes Follow Cursor</span>
            </div>

            {/* Quick Interactive Controls */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <button
                onClick={() => setBlinkKey((k) => k + 1)}
                style={{
                  background: 'rgba(255, 245, 233, 0.08)',
                  border: '1px solid rgba(255, 245, 233, 0.16)',
                  color: '#FFF5E9',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(233, 160, 168, 0.2)';
                  e.currentTarget.style.borderColor = 'var(--cherry-rose)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 245, 233, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 245, 233, 0.16)';
                }}
              >
                <Sparkles size={13} color="#E7C86A" />
                <span>Blink / Wink</span>
              </button>

              <button
                onClick={onToggleGlasses}
                style={{
                  background: showGlasses
                    ? 'rgba(233, 160, 168, 0.25)'
                    : 'rgba(255, 245, 233, 0.08)',
                  border: showGlasses
                    ? '1px solid var(--cherry-rose)'
                    : '1px solid rgba(255, 245, 233, 0.16)',
                  color: showGlasses ? '#FFF5E9' : 'rgba(255, 245, 233, 0.85)',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s',
                }}
              >
                <Glasses size={13} color="#D4DDF6" />
                <span>{showGlasses ? 'Glasses On' : 'Glasses Off'}</span>
              </button>
            </div>

            <div
              style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 245, 233, 0.55)',
                lineHeight: 1.4,
                marginTop: '4px',
              }}
            >
              Move your mouse around to see her eyes track your cursor seamlessly!
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar & CTAs */}
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            zIndex: 25,
          }}
        >
          <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
            <span>Explore Work</span>
            <ArrowDown size={17} />
          </a>
          <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <span>Get in Touch</span>
          </a>
        </div>
      </div>

      {/* Responsive media styling for hero layout */}
      <style>{`
        @media (max-width: 960px) {
          .hero-stage-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            text-align: center !important;
          }
          .hero-tagline-col {
            align-items: center !important;
            padding-right: 0 !important;
          }
          .hero-tagline-col > div {
            text-align: center !important;
            max-width: 100% !important;
          }
          .hero-actions-col {
            align-items: center !important;
            padding-left: 0 !important;
          }
          .hero-title-text {
            font-size: clamp(3.2rem, 11vw, 6.5rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
