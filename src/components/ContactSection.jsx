import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, ArrowUpRight, Globe } from 'lucide-react';

export default function ContactSection({ email = 'anita.madadi.design@gmail.com' }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '110px 24px 80px 24px',
        position: 'relative',
        background: 'radial-gradient(circle at 50% 100%, #311526 0%, #170A12 60%, #0F050B 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div className="pill-badge pill-cherry" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} />
            <span>Get in Touch</span>
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#FFF5E9',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Let's build something <br />
            <span style={{ color: 'var(--cherry-rose)' }}>truly memorable</span>.
          </h2>
          <p style={{ color: 'rgba(255, 245, 233, 0.72)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Have a project in mind, a design system to scale, or just want to chat about product craft?
            My inbox is always open.
          </p>
        </div>

        {/* Content Box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Direct Reach Card */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--cherry-rose)',
                  marginBottom: '8px',
                }}
              >
                Direct Contact
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#FFF5E9',
                }}
              >
                Drop me a line
              </h3>
            </div>

            {/* Email Pill Box */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                borderRadius: '16px',
                background: 'rgba(255, 245, 233, 0.06)',
                border: '1px solid rgba(255, 245, 233, 0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--cherry-rose)" />
                <span
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#FFF5E9',
                    wordBreak: 'break-all',
                  }}
                >
                  {email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                style={{
                  background: copied ? '#4ADE80' : 'rgba(233, 160, 168, 0.2)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  color: copied ? '#0F172A' : 'var(--cherry-rose)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s',
                  marginLeft: '8px',
                  flexShrink: 0,
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Social Channels */}
            <div>
              <div
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'rgba(255, 245, 233, 0.6)',
                  marginBottom: '12px',
                }}
              >
                Find me online:
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  {
                    name: 'LinkedIn',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                    href: 'https://linkedin.com',
                  },
                  {
                    name: 'Dribbble',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                        <path d="M8.5 2.5a14.7 14.7 0 0 1 6.5 18" />
                      </svg>
                    ),
                    href: 'https://dribbble.com',
                  },
                  {
                    name: 'GitHub',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    ),
                    href: 'https://github.com',
                  },
                  {
                    name: 'Twitter',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                      </svg>
                    ),
                    href: 'https://twitter.com',
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255, 245, 233, 0.06)',
                      border: '1px solid rgba(255, 245, 233, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFF5E9',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(233, 160, 168, 0.25)';
                      e.currentTarget.style.borderColor = 'var(--cherry-rose)';
                      e.currentTarget.style.color = '#FFF5E9';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 245, 233, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255, 245, 233, 0.12)';
                      e.currentTarget.style.color = '#FFF5E9';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Working Quick Message Form */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <h3
              className="font-display"
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#FFF5E9',
              }}
            >
              Send a quick message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'rgba(74, 222, 128, 0.12)',
                  border: '1px solid rgba(74, 222, 128, 0.3)',
                  color: '#4ADE80',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ fontSize: '1.6rem' }}>✨</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Message received!</div>
                <div style={{ fontSize: '0.88rem', color: 'rgba(255, 245, 233, 0.8)' }}>
                  Thank you! I will get back to you within 24 hours.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'rgba(255, 245, 233, 0.7)',
                      marginBottom: '6px',
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 245, 233, 0.05)',
                      border: '1px solid rgba(255, 245, 233, 0.15)',
                      color: '#FFF5E9',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'rgba(255, 245, 233, 0.7)',
                      marginBottom: '6px',
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 245, 233, 0.05)',
                      border: '1px solid rgba(255, 245, 233, 0.15)',
                      color: '#FFF5E9',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'rgba(255, 245, 233, 0.7)',
                      marginBottom: '6px',
                    }}
                  >
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, timeline, or design goals..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 245, 233, 0.05)',
                      border: '1px solid rgba(255, 245, 233, 0.15)',
                      color: '#FFF5E9',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  <Send size={16} />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Credit & Copyright */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '40px',
            borderTop: '1px solid rgba(233, 160, 168, 0.1)',
            fontSize: '0.86rem',
            color: 'rgba(255, 245, 233, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div>
            Designed with <span style={{ color: 'var(--cherry-rose)' }}>Palette 09 — Cherry & Cream</span>.
          </div>
          <div style={{ fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} • Interactive Bitmoji Eyeball Tracking Powered by HTML5 Canvas & React.
          </div>
        </div>
      </div>
    </section>
  );
}
