import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';

export default function SceneGuestbook() {
  const [copied, setCopied] = useState(false);

  const email = 'khamjana24@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/sirisha-kolluru-95249b275';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    } catch {
      fallbackCopy(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const fallbackCopy = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#2A101A',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(40px, 6vh, 60px) clamp(20px, 3.5vw, 48px)',
      }}
    >
      {/* 1. SOLID, CRISP AVATAR BACKGROUND — NO BLUR, NO DARK VIGNETTE ON SIRISHA */}
      <img
        src="/scenes/guestbook_background.jpg"
        alt="Sirisha in the gallery hall"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 1,
          imageRendering: '-webkit-optimize-contrast',
          filter: 'none',
        }}
      />

      {/* 2. SUBTLE WALL GRADIENT CONFINED STRICTLY TO THE RIGHT EMPTY SPACE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, transparent 0%, transparent 38%, rgba(32, 11, 18, 0.35) 52%, rgba(32, 11, 18, 0.68) 75%, rgba(32, 11, 18, 0.8) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* 3. BALANCED 2-COLUMN LAYOUT */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 40%) 1fr',
          alignItems: 'center',
          gap: 'clamp(20px, 3vw, 48px)',
        }}
        className="contact-layout-grid"
      >
        {/* Left Column Spacer: Keeps Sirisha completely unobstructed, solid and clear */}
        <div className="avatar-preserved-space" style={{ minHeight: '100px' }} />

        {/* Right Column: Centered in the open wall space with "Before you leave..." directly on top of the card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '540px',
            margin: '0 auto',
            width: '100%',
            gap: '22px',
          }}
        >
          {/* Header Block: Right on top of the rectangle card */}
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 3.6vw, 3.3rem)',
                fontWeight: 800,
                color: '#FFF5E9',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.01em',
                textShadow: '0 3px 18px rgba(0, 0, 0, 0.75)',
              }}
            >
              Before you leave...
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.88rem, 1.1vw, 1rem)',
                color: 'rgba(255, 245, 233, 0.92)',
                lineHeight: 1.58,
                maxWidth: '490px',
                margin: '10px auto 0 auto',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)',
                fontWeight: 400,
              }}
            >
              Thank you for exploring The Little Museum of Ideas. Whether you have an open design role,
              a collaborative project, or just want to share feedback, I’d love to hear from you.
            </p>
          </div>

          {/* Contact Card: Right in the middle of the empty space */}
          <div
            style={{
              background: 'rgba(42, 16, 24, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1.5px solid rgba(231, 200, 107, 0.35)',
              borderRadius: '24px',
              padding: 'clamp(24px, 3.2vw, 34px)',
              width: '100%',
              maxWidth: '480px',
              boxShadow:
                '0 24px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(231, 200, 107, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxSizing: 'border-box',
            }}
          >
            {/* Card Header: Sirisha ✦ */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.9rem, 2.8vw, 2.4rem)',
                    fontWeight: 800,
                    color: '#FFF5E9',
                    lineHeight: 1.1,
                    margin: 0,
                    letterSpacing: '0.01em',
                  }}
                >
                  Sirisha
                </h3>
                <span
                  style={{
                    color: 'var(--color-yellow)',
                    fontSize: '1.3rem',
                    lineHeight: 1,
                  }}
                >
                  ✦
                </span>
              </div>

              {/* Sub-label: UI / UX DESIGNER */}
              <div
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: 'var(--color-yellow)',
                  textTransform: 'uppercase',
                  marginTop: '6px',
                }}
              >
                UI / UX DESIGNER
              </div>

              {/* Gold Underline Bar */}
              <div
                style={{
                  width: '44px',
                  height: '2.5px',
                  backgroundColor: 'var(--color-yellow)',
                  borderRadius: '2px',
                  marginTop: '10px',
                }}
              />
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize: '0.96rem',
                color: 'rgba(255, 245, 233, 0.88)',
                lineHeight: 1.5,
                margin: '2px 0 0 0',
                paddingBottom: '14px',
                borderBottom: '1px solid rgba(255, 245, 233, 0.12)',
              }}
            >
              Always open for meaningful design conversations.
            </p>

            {/* Email Row with Mailto & Direct Copy Button */}
            <div
              style={{
                background: 'rgba(25, 9, 15, 0.78)',
                border: '1px solid rgba(255, 245, 233, 0.14)',
                borderRadius: '14px',
                padding: '11px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                transition: 'all 0.2s ease',
              }}
            >
              <a
                href={`mailto:${email}`}
                title={`Send email to ${email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  color: '#FFF5E9',
                  minWidth: 0,
                  flex: 1,
                }}
              >
                <Mail size={18} color="var(--color-yellow)" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: 'clamp(0.82rem, 1vw, 0.92rem)',
                    fontWeight: 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {email}
                </span>
              </a>

              {/* Copy Button */}
              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                style={{
                  background: copied ? 'rgba(231, 200, 107, 0.28)' : 'rgba(95, 38, 52, 0.75)',
                  border: copied
                    ? '1px solid var(--color-yellow)'
                    : '1px solid rgba(255, 245, 233, 0.22)',
                  borderRadius: '8px',
                  color: copied ? 'var(--color-yellow)' : '#FFF5E9',
                  padding: '6px 14px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (!copied) e.currentTarget.style.backgroundColor = 'rgba(125, 50, 70, 0.9)';
                }}
                onMouseLeave={(e) => {
                  if (!copied) e.currentTarget.style.backgroundColor = 'rgba(95, 38, 52, 0.75)';
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn Connection Button */}
            <a
              id="linkedin-connect-btn"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Sirisha on LinkedIn"
              style={{
                background: 'rgba(25, 9, 15, 0.78)',
                border: '1px solid rgba(255, 245, 233, 0.14)',
                borderRadius: '14px',
                padding: '13px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: '#FFF5E9',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(55, 25, 36, 0.92)';
                e.currentTarget.style.borderColor = 'rgba(213, 221, 246, 0.55)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(25, 9, 15, 0.78)';
                e.currentTarget.style.borderColor = 'rgba(255, 245, 233, 0.14)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, color: 'var(--color-blue)' }}
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span style={{ fontSize: '0.92rem', fontWeight: 600, letterSpacing: '0.01em' }}>
                  Connect on LinkedIn
                </span>
              </div>
              <ExternalLink size={16} color="rgba(255, 245, 233, 0.7)" style={{ flexShrink: 0 }} />
            </a>
          </div>

          {/* Bottom subtle museum signoff */}
          <div
            style={{
              textAlign: 'center',
              color: 'rgba(255, 245, 233, 0.45)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: '4px',
            }}
          >
            The Little Museum of Ideas • Designed by Sirisha
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .avatar-preserved-space {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
