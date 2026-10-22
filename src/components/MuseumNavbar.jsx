import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function MuseumNavbar() {
  const [activeSection, setActiveSection] = useState('entrance');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['entrance', 'gallery-conversation', 'gallery', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'SIRISHA', href: '#entrance' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'museum-nav py-3' : 'bg-transparent py-5'}`}
      style={{
        paddingLeft: 'max(24px, env(safe-area-inset-left))',
        paddingRight: 'max(24px, env(safe-area-inset-right))',
        transition: 'var(--transition-smooth)',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo / Brand */}
        <a
          href="#entrance"
          onClick={(e) => handleNavClick(e, '#entrance')}
          style={{
            textDecoration: 'none',
            color: 'var(--color-burgundy)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            className="font-serif"
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: 'var(--color-burgundy)',
            }}
          >
            SIRISHA
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-burgundy-soft)',
              padding: '2px 8px',
              borderRadius: '999px',
              background: 'rgba(84, 44, 57, 0.08)',
              fontWeight: 600,
            }}
          >
            The Little Museum
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-menu"
        >
          {navItems.slice(1).map((item) => {
            const isActive =
              (item.href === '#gallery' && (activeSection === 'gallery' || activeSection === 'agrimart' || activeSection === 'zypha')) ||
              (item.href === '#about' && activeSection === 'about') ||
              (item.href === '#contact' && activeSection === 'contact');

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  color: isActive ? 'var(--color-burgundy)' : 'rgba(84, 44, 57, 0.72)',
                  fontWeight: isActive ? 800 : 600,
                  fontSize: '0.86rem',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  borderBottom: isActive ? '2px solid var(--color-burgundy)' : '2px solid transparent',
                  transition: 'var(--transition-smooth)',
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-burgundy)',
            cursor: 'pointer',
            padding: '6px',
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--color-cream-light)',
            borderBottom: '1px solid rgba(84, 44, 57, 0.15)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: 'var(--shadow-plaque)',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                color: 'var(--color-burgundy)',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid rgba(84, 44, 57, 0.08)',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
