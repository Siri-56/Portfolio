import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, ExternalLink, Heart, BookOpen } from 'lucide-react';

export default function GuestbookSection() {
  const [copied, setCopied] = useState(false);
  const [guestEntry, setGuestEntry] = useState({ name: '', role: '', note: '' });
  const [signatures, setSignatures] = useState([
    { name: 'Sarah L.', role: 'Product Manager', note: 'Loved the museum walkthrough! AgriMart UX is exceptionally clean.' },
    { name: 'David K.', role: 'Design Lead', note: 'Such a refreshing portfolio format. The eye-tracking curator is delightful.' },
  ]);
  const [signed, setSigned] = useState(false);

  const email = 'khamjana24@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com'; // Placeholder link as requested

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSignGuestbook = (e) => {
    e.preventDefault();
    if (!guestEntry.name || !guestEntry.note) return;
    setSignatures([
      { name: guestEntry.name, role: guestEntry.role || 'Museum Visitor', note: guestEntry.note },
      ...signatures,
    ]);
    setSigned(true);
    setGuestEntry({ name: '', role: '', note: '' });
  };

  return (
    <section
      id="contact"
      style={{
        padding: '110px 24px 80px 24px',
        backgroundColor: '#2A101A', // Deep museum exit burgundy
        color: 'var(--color-cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Atmospheric Floor Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '20%',
          right: '20%',
          height: '240px',
          background: 'radial-gradient(circle, rgba(233, 160, 168, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Museum Exit Header */}
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
            <BookOpen size={13} />
            <span>Museum Exit & Guestbook</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--color-cream)',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            Before you leave…
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 245, 233, 0.82)',
              lineHeight: 1.6,
            }}
          >
            Thank you for exploring The Little Museum of Ideas. Whether you have an open design role, a collaborative project,
            or just want to share feedback, I'd love to hear from you.
          </p>
        </div>

        {/* Content Columns: Waving Avatar & Direct Links (Left) + Museum Guestbook (Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Left: Waving Curator & Direct Links */}
          <div
            className="museum-plaque-dark"
            style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Waving Avatar Graphic with subtle wave animation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(255, 245, 233, 0.12)',
              }}
            >
              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-cherry) 0%, var(--color-burgundy) 100%)',
                  padding: '3px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/standing_face.png"
                  alt="Sirisha Waving"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    right: '-4px',
                    fontSize: '1.3rem',
                    animation: 'handWave 2s infinite ease-in-out',
                    display: 'inline-block',
                    transformOrigin: '70% 70%',
                  }}
                >
                  👋
                </span>
              </div>

              <div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-cream)', margin: 0 }}>
                  Sirisha
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-yellow)', fontWeight: 600 }}>
                  Curator & UI/UX Designer
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255, 245, 233, 0.65)', marginTop: '4px' }}>
                  Always open for meaningful design conversations.
                </div>
              </div>
            </div>

            {/* Email Contact Box */}
            <div>
              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-yellow)',
                  marginBottom: '8px',
                }}
              >
                Official Correspondence
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255, 245, 233, 0.06)',
                  border: '1px solid rgba(255, 245, 233, 0.15)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                  <Mail size={18} color="var(--color-cherry)" style={{ flexShrink: 0 }} />
                  <a
                    href={`mailto:${email}`}
                    style={{
                      color: 'var(--color-cream)',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {email}
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: copied ? 'var(--color-yellow)' : 'rgba(233, 160, 168, 0.2)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    color: copied ? 'var(--color-burgundy-deep)' : 'var(--color-cherry)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'var(--transition-smooth)',
                    marginLeft: '8px',
                    flexShrink: 0,
                  }}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn & Social Links */}
            <div>
              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-yellow)',
                  marginBottom: '8px',
                }}
              >
                Professional Network
              </div>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  background: 'rgba(213, 221, 246, 0.12)',
                  border: '1px solid rgba(213, 221, 246, 0.25)',
                  color: 'var(--color-blue)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  transition: 'var(--transition-smooth)',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(213, 221, 246, 0.22)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(213, 221, 246, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </div>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Right: The Interactive Museum Guestbook */}
          <div
            className="museum-plaque-dark"
            style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-yellow)',
                  marginBottom: '4px',
                }}
              >
                Museum Visitor Registry
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-cream)', margin: 0 }}>
                Sign the Guestbook
              </h3>
            </div>

            {signed ? (
              <div
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  background: 'rgba(231, 200, 107, 0.15)',
                  border: '1px solid var(--color-yellow)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ fontSize: '1.5rem' }}>✨</div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-cream)' }}>
                  Signature added to the collection!
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 245, 233, 0.8)' }}>
                  Thank you for visiting The Little Museum of Ideas.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSignGuestbook} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: 'rgba(255, 245, 233, 0.7)', marginBottom: '4px' }}>
                      Visitor Name
                    </label>
                    <input
                      type="text"
                      required
                      value={guestEntry.name}
                      onChange={(e) => setGuestEntry({ ...guestEntry, name: e.target.value })}
                      placeholder="e.g. Alex"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255, 245, 233, 0.05)',
                        border: '1px solid rgba(255, 245, 233, 0.15)',
                        color: 'var(--color-cream)',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: 'rgba(255, 245, 233, 0.7)', marginBottom: '4px' }}>
                      Role / Organization
                    </label>
                    <input
                      type="text"
                      value={guestEntry.role}
                      onChange={(e) => setGuestEntry({ ...guestEntry, role: e.target.value })}
                      placeholder="e.g. Design Enthusiast"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255, 245, 233, 0.05)',
                        border: '1px solid rgba(255, 245, 233, 0.15)',
                        color: 'var(--color-cream)',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: 'rgba(255, 245, 233, 0.7)', marginBottom: '4px' }}>
                    Note or Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={guestEntry.note}
                    onChange={(e) => setGuestEntry({ ...guestEntry, note: e.target.value })}
                    placeholder="Leave a note or reflection for the curator..."
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: 'rgba(255, 245, 233, 0.05)',
                      border: '1px solid rgba(255, 245, 233, 0.15)',
                      color: 'var(--color-cream)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'var(--color-yellow)',
                    color: 'var(--color-burgundy-deep)',
                    fontWeight: 800,
                    fontSize: '0.86rem',
                    padding: '10px 20px',
                    borderRadius: '999px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
                >
                  <Send size={15} />
                  <span>Leave Note in Guestbook</span>
                </button>
              </form>
            )}

            {/* Recent Signatures List */}
            <div style={{ marginTop: '8px' }}>
              <div style={{ fontSize: '0.74rem', color: 'rgba(255, 245, 233, 0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Recent Museum Notes:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '140px', overflowY: 'auto' }}>
                {signatures.map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '10px 12px',
                      background: 'rgba(255, 245, 233, 0.04)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 245, 233, 0.08)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-yellow)', fontWeight: 700, fontSize: '0.76rem' }}>
                      <span>{s.name}</span>
                      <span style={{ color: 'rgba(255, 245, 233, 0.5)', fontWeight: 500 }}>{s.role}</span>
                    </div>
                    <div style={{ color: 'rgba(255, 245, 233, 0.85)', marginTop: '2px', fontStyle: 'italic' }}>
                      "{s.note}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Museum Footer Credit */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '36px',
            borderTop: '1px solid rgba(255, 245, 233, 0.1)',
            fontSize: '0.82rem',
            color: 'rgba(255, 245, 233, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <div>
            The Little Museum of Ideas • Curated by <strong>Sirisha</strong>
          </div>
          <div style={{ fontSize: '0.74rem', color: 'rgba(255, 245, 233, 0.4)' }}>
            Handcrafted with React, Vite & CSS • Flat-vector illustration art direction • {new Date().getFullYear()}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes handWave {
          0%, 100% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-8deg);
          }
          60% {
            transform: rotate(14deg);
          }
          80% {
            transform: rotate(-4deg);
          }
        }
      `}</style>
    </section>
  );
}
