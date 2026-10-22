import React, { useState, useEffect } from 'react';
import { Eye, Sparkles, Send, Menu, X, Sliders } from 'lucide-react';

export default function Navbar({
  name = 'Anita Madadi',
  onOpenSettings,
  showGlasses,
  onToggleGlasses
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
      style={{
        paddingLeft: 'max(24px, env(safe-area-inset-left))',
        paddingRight: 'max(24px, env(safe-area-inset-right))',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E9A0A8 0%, #542C39 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF5E9',
              fontWeight: 800,
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(233, 160, 168, 0.35)',
              border: '1.5px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {name.charAt(0)}
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.1rem',
                letterSpacing: '-0.01em',
                color: '#FFF5E9',
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                color: 'var(--cherry-rose)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              UI/UX Designer
            </div>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: 'rgba(255, 245, 233, 0.8)',
                textDecoration: 'none',
                fontSize: '0.86rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                transition: 'color 0.2s ease, transform 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#E9A0A8';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255, 245, 233, 0.8)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action & Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* Settings / Customize Drawer Trigger */}
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              style={{
                background: 'rgba(233, 160, 168, 0.12)',
                border: '1px solid rgba(233, 160, 168, 0.24)',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--cherry-rose)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              title="Customize Name & Avatar"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(233, 160, 168, 0.25)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(233, 160, 168, 0.12)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Sliders size={17} />
            </button>
          )}

          {/* Availability Pill */}
          <a
            href="#contact"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, rgba(84, 44, 57, 0.9) 0%, rgba(39, 19, 31, 0.95) 100%)',
              border: '1px solid rgba(233, 160, 168, 0.3)',
              color: '#FFF5E9',
              fontSize: '0.82rem',
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--cherry-rose)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(233, 160, 168, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span className="pulse-dot" />
            <span>Available for hire</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#FFF5E9',
              cursor: 'pointer',
              padding: '6px',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(20, 8, 15, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--cherry-dark-border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#FFF5E9',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 245, 233, 0.08)',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Media query styling for responsive nav */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
