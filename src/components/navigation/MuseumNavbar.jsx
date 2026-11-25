import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollTo } from '../../utils/smoothScroll';

export default function MuseumNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
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
    { label: 'Home', href: '#home', key: 'home' },
    { label: 'Projects', href: '#projects', key: 'projects' },
    { label: 'About Me', href: '#about', key: 'about' },
    { label: 'Contact', href: '#contact', key: 'contact' },
  ];

  const handleNavClick = (e, href, key) => {
    e.preventDefault();
    setActiveSection(key);
    setMobileOpen(false);
    smoothScrollTo(href, 950);
  };

  return (
    <header
      className="navbar"
      style={{
        position: 'fixed',
        top: '20px',
        left: '4%',
        width: '92%',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 28px',
        background: 'rgba(255, 245, 233, 0.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255, 255, 255, 0.65)',
        borderRadius: '24px',
        boxShadow: '0 8px 30px rgba(52, 25, 30, 0.12)',
        boxSizing: 'border-box',
      }}
    >
      {/* Brand: SIRISHA / THE LITTLE MUSEUM */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, '#home', 'home')}
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            letterSpacing: '0.22em',
            color: '#542c39',
            lineHeight: 1.15,
            textTransform: 'uppercase',
            fontFamily: 'inherit',
          }}
        >
          SIRISHA
        </span>
        <span
          style={{
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            color: '#8e5866',
            lineHeight: 1.2,
            marginTop: '3px',
            textTransform: 'uppercase',
            fontFamily: 'inherit',
          }}
        >
          UI/UX DESIGNER
        </span>
      </a>

      {/* Desktop Nav: Home | Projects | About Me | Contact */}
      <nav
        className="desktop-menu"
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '36px',
        }}
      >
        {navItems.map((item) => {
          const isActive =
            (item.key === 'home' && activeSection === 'home') ||
            (item.key === 'projects' && (activeSection === 'projects' || activeSection === 'gallery-wall')) ||
            (item.key === 'about' && activeSection === 'about') ||
            (item.key === 'contact' && activeSection === 'contact');

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.key)}
              className={isActive ? 'active' : ''}
              style={{
                color: '#542c39',
                textDecoration: 'none',
                position: 'relative',
                fontSize: '0.94rem',
                fontWeight: isActive ? 700 : 500,
                letterSpacing: '0.01em',
                transition: 'color 0.2s ease',
                padding: '4px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = '#381622';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = '#542c39';
              }}
            >
              <span>{item.label}</span>
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '-8px',
                    width: '100%',
                    height: '2px',
                    background: '#e9a0a8',
                    borderRadius: '2px',
                  }}
                />
              )}
            </a>
          );
        })}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Navigation Menu"
        className="mobile-toggle"
        style={{
          display: 'none',
          background: 'transparent',
          border: 'none',
          color: '#542c39',
          cursor: 'pointer',
          padding: '4px',
        }}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            left: 0,
            right: 0,
            background: 'rgba(255, 245, 233, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '20px',
            padding: '18px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 12px 35px rgba(52, 25, 30, 0.15)',
          }}
        >
          {navItems.map((item) => {
            const isActive =
              (item.key === 'home' && activeSection === 'home') ||
              (item.key === 'projects' && (activeSection === 'projects' || activeSection === 'gallery-wall')) ||
              (item.key === 'about' && activeSection === 'about') ||
              (item.key === 'contact' && activeSection === 'contact');

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.key)}
                style={{
                  color: '#542c39',
                  fontSize: '1rem',
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  padding: '6px 0',
                  borderBottom: isActive ? '2px solid #e9a0a8' : 'none',
                  width: 'fit-content',
                }}
              >
                {item.label}
              </a>
            );
          })}
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
          .navbar {
            top: 12px !important;
            left: 3% !important;
            width: 94% !important;
            padding: 10px 16px !important;
            border-radius: 18px !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
