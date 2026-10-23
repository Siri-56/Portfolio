import React from 'react';
import {
  X,
  ExternalLink,
  Target,
  BarChart3,
  Layers,
  Users,
  Smartphone,
  Laptop,
  FileText,
  Compass,
} from 'lucide-react';

export default function AgriMartModal({ onClose }) {
  const figmaMobileUrl =
    'https://www.figma.com/design/P0TrKH1ysm9mk5LahpdpEx/MAD-Agrimart?node-id=0-1&t=1rYLY3QHEKRDtdGj-1';
  const figmaWebUrl =
    'https://www.figma.com/design/a6QbgGpuLpLuc9qxljDSk0/Agrimart?node-id=0-1&t=mny5BvRjHK2RVYUi-1';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="agrimart-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(16, 6, 11, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px, 2.5vw, 24px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: '26px',
          padding: 'clamp(22px, 3.5vw, 36px)',
          background: '#2B121C',
          border: '1.5px solid rgba(231, 200, 107, 0.45)',
          boxShadow:
            '0 30px 80px rgba(0, 0, 0, 0.85), 0 0 50px rgba(231, 200, 107, 0.12)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          color: '#FFF5E9',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================================================================
            TOP SECTION: HEADER & HERO DEVICES SHOWCASE
            ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '28px',
            position: 'relative',
          }}
        >
          {/* Left Title Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 14px',
                borderRadius: '999px',
                background: 'rgba(231, 200, 107, 0.12)',
                border: '1px solid rgba(231, 200, 107, 0.3)',
                color: 'var(--color-yellow)',
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                width: 'fit-content',
              }}
            >
              <Compass size={13} />
              <span>EXHIBITION HALL A • CASE STUDY</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2
                id="agrimart-title"
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                  fontWeight: 800,
                  color: '#FFF5E9',
                  lineHeight: 1.1,
                  margin: 0,
                  letterSpacing: '0.01em',
                }}
              >
                AgriMart
              </h2>
              <span
                style={{
                  color: 'var(--color-yellow)',
                  fontSize: '2rem',
                  lineHeight: 1,
                }}
              >
                ✦
              </span>
            </div>

            <p
              style={{
                fontSize: 'clamp(0.96rem, 1.25vw, 1.12rem)',
                color: 'rgba(255, 245, 233, 0.88)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              A farm-to-customer marketplace concept focused on fresh produce,
              source transparency, and direct farmer access.
            </p>

            {/* Quick Metadata Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '4px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(56, 23, 34, 0.85)',
                  border: '1px solid rgba(255, 245, 233, 0.15)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'rgba(255, 245, 233, 0.9)',
                }}
              >
                <Users size={14} color="var(--color-yellow)" />
                <span>27 survey participants</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(56, 23, 34, 0.85)',
                  border: '1px solid rgba(255, 245, 233, 0.15)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'rgba(255, 245, 233, 0.9)',
                }}
              >
                <Smartphone size={14} color="var(--color-yellow)" />
                <span>Mobile app + website</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(56, 23, 34, 0.85)',
                  border: '1px solid rgba(255, 245, 233, 0.15)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'rgba(255, 245, 233, 0.9)',
                }}
              >
                <FileText size={14} color="var(--color-yellow)" />
                <span>UX research + UI design</span>
              </div>
            </div>
          </div>

          {/* Right Hero Device Showcase */}
          <div
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255, 245, 233, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#3A1824',
            }}
          >
            <img
              src="/agrimart_hero_devices.png"
              alt="AgriMart mobile and website mockup"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'rgba(255, 245, 233, 0.12)',
              border: '1px solid rgba(255, 245, 233, 0.25)',
              borderRadius: '999px',
              color: '#FFF5E9',
              padding: '7px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              zIndex: 30,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.12)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* =========================================================================
            MIDDLE ROW: THE DESIGN CHALLENGE & RESEARCH THAT SHAPED DESIGN
            ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Card 1: THE DESIGN CHALLENGE */}
          <div
            style={{
              background: '#3A1725',
              border: '1px solid rgba(255, 245, 233, 0.12)',
              borderRadius: '18px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-yellow)',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <Target size={16} />
              <span>THE DESIGN CHALLENGE</span>
            </div>

            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.35vw, 1.15rem)',
                color: 'rgba(255, 245, 233, 0.95)',
                fontWeight: 400,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              How might we help customers understand where their produce comes from
              while giving local farmers a more direct way to reach buyers?
            </p>
          </div>

          {/* Card 2: RESEARCH THAT SHAPED THE DESIGN */}
          <div
            style={{
              background: '#3A1725',
              border: '1px solid rgba(255, 245, 233, 0.12)',
              borderRadius: '18px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-yellow)',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <BarChart3 size={16} />
              <span>RESEARCH THAT SHAPED THE DESIGN</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '14px',
              }}
            >
              {/* Stat 1: 92.5% */}
              <div
                style={{
                  background: 'rgba(25, 9, 15, 0.65)',
                  border: '1px solid rgba(255, 245, 233, 0.1)',
                  borderRadius: '14px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="42" height="42" viewBox="0 0 72 72">
                    <path
                      d="M 36 36 L 36.00 6.00 A 30 30 0 1 1 22.38 9.27 Z"
                      fill="#8CB16E"
                    />
                    <path
                      d="M 36 36 L 22.38 9.27 A 30 30 0 0 1 36.00 6.00 Z"
                      fill="#4A1E2B"
                    />
                  </svg>
                  <div>
                    <div
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        color: '#FFF5E9',
                        lineHeight: 1,
                      }}
                    >
                      92.5%
                    </div>
                    <div
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'rgba(255, 245, 233, 0.75)',
                      }}
                    >
                      value source transparency
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '0.76rem',
                    color: 'rgba(255, 245, 233, 0.7)',
                    lineHeight: 1.4,
                  }}
                >
                  of 27 survey respondents rated it important or extremely important.
                  <span style={{ opacity: 0.8 }}> (48.1% extremely, 44.4% important)</span>
                </div>
              </div>

              {/* Stat 2: 88.9% */}
              <div
                style={{
                  background: 'rgba(25, 9, 15, 0.65)',
                  border: '1px solid rgba(255, 245, 233, 0.1)',
                  borderRadius: '14px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(140, 177, 110, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Users size={22} color="#8CB16E" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        color: '#FFF5E9',
                        lineHeight: 1,
                      }}
                    >
                      88.9%
                    </div>
                    <div
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'rgba(255, 245, 233, 0.75)',
                      }}
                    >
                      interested in farmer visibility
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '0.76rem',
                    color: 'rgba(255, 245, 233, 0.7)',
                    lineHeight: 1.4,
                  }}
                >
                  of 27 respondents wanted to see the actual farmer or farm their
                  produce comes from.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            THIRD SECTION: DESIGN WORK (MOBILE & WEBSITE EXPERIENCES)
            ========================================================================= */}
        <div
          style={{
            background: '#3A1725',
            border: '1px solid rgba(255, 245, 233, 0.12)',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-yellow)',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <Layers size={16} />
            <span>DESIGN WORK</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Mobile Experience Card */}
            <div
              style={{
                background: 'rgba(25, 9, 15, 0.65)',
                border: '1px solid rgba(255, 245, 233, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div>
                <h4
                  className="font-serif"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#FFF5E9',
                    margin: 0,
                  }}
                >
                  Mobile experience
                </h4>
                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'rgba(255, 245, 233, 0.8)',
                    lineHeight: 1.5,
                    margin: '6px 0 0 0',
                  }}
                >
                  A clean and easy-to-navigate mobile app for customers to explore
                  fresh produce, view farmer information, and shop directly from local
                  producers.
                </p>
              </div>

              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#2B121C',
                  border: '1px solid rgba(255, 245, 233, 0.1)',
                }}
              >
                <img
                  src="/agrimart_mobile_screens.png"
                  alt="AgriMart mobile flow screens"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>

            {/* Website Experience Card */}
            <div
              style={{
                background: 'rgba(25, 9, 15, 0.65)',
                border: '1px solid rgba(255, 245, 233, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div>
                <h4
                  className="font-serif"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#FFF5E9',
                    margin: 0,
                  }}
                >
                  Website experience
                </h4>
                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'rgba(255, 245, 233, 0.8)',
                    lineHeight: 1.5,
                    margin: '6px 0 0 0',
                  }}
                >
                  A web platform presenting AgriMart's concept, key information, and
                  product listings with a focus on freshness, transparency, and
                  direct farmer access.
                </p>
              </div>

              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#2B121C',
                  border: '1px solid rgba(255, 245, 233, 0.1)',
                }}
              >
                <img
                  src="/agrimart_web_laptop.png"
                  alt="AgriMart web platform showcase"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM ACTION BAR: FIGMA LINKS & RETURN BUTTON
            ========================================================================= */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 245, 233, 0.12)',
          }}
        >
          {/* Left Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Figma', 'Mobile UI', 'Website UI', 'User research'].map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'rgba(56, 23, 34, 0.75)',
                  border: '1px solid rgba(255, 245, 233, 0.12)',
                  borderRadius: '999px',
                  padding: '5px 12px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: 'rgba(255, 245, 233, 0.75)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {/* View Mobile Figma Button */}
            <a
              href={figmaMobileUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(56, 23, 34, 0.9)',
                border: '1.5px solid rgba(231, 200, 107, 0.4)',
                borderRadius: '999px',
                padding: '9px 18px',
                color: '#FFF5E9',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(231, 200, 107, 0.2)';
                e.currentTarget.style.borderColor = 'var(--color-yellow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(56, 23, 34, 0.9)';
                e.currentTarget.style.borderColor = 'rgba(231, 200, 107, 0.4)';
              }}
            >
              <span>View mobile Figma</span>
              <ExternalLink size={14} />
            </a>

            {/* View Website Figma Button */}
            <a
              href={figmaWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(56, 23, 34, 0.9)',
                border: '1.5px solid rgba(231, 200, 107, 0.4)',
                borderRadius: '999px',
                padding: '9px 18px',
                color: '#FFF5E9',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(231, 200, 107, 0.2)';
                e.currentTarget.style.borderColor = 'var(--color-yellow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(56, 23, 34, 0.9)';
                e.currentTarget.style.borderColor = 'rgba(231, 200, 107, 0.4)';
              }}
            >
              <span>View website Figma</span>
              <ExternalLink size={14} />
            </a>

            {/* Return to Gallery Button */}
            <button
              onClick={onClose}
              style={{
                background: 'var(--color-yellow)',
                border: 'none',
                borderRadius: '999px',
                padding: '9px 20px',
                color: '#2B121C',
                fontSize: '0.84rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow =
                  '0 4px 14px rgba(231, 200, 107, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Return to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
