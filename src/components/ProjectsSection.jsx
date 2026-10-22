import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle, X } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'aura-pay',
      title: 'Aura Pay — Next-Gen Neobank & Wealth',
      subtitle: 'Mobile Banking & Visual Financial Intelligence',
      category: 'Fintech & Design Systems',
      year: '2025',
      impact: '+46% User Engagement • 4.9 App Store Rating',
      palette: ['#E9A0A8', '#542C39', '#FFF5E9'],
      tags: ['Figma Tokens', 'iOS & Android', 'Micro-interactions', 'User Testing'],
      overview:
        'Re-architected the mobile wealth management experience for 250,000+ daily active users, replacing overwhelming charts with tactile visual budgeting cards and intelligent spending forecasting.',
      challenge:
        'Millennial and Gen-Z retail investors felt intimidated by traditional Wall Street jargon and spreadsheet-style tables.',
      solution:
        'Created a tactile modular financial card system with fluid haptic animations, automated round-up savings, and zero-jargon portfolio summaries.',
      metrics: [
        { label: 'DAU Growth', value: '+46%' },
        { label: 'Onboarding Dropoff', value: '-38%' },
        { label: 'CSAT Score', value: '4.9/5' }
      ],
      previewColor: 'linear-gradient(135deg, #381B28 0%, #1A0C13 100%)',
      accentColor: '#E9A0A8'
    },
    {
      id: 'luminary-health',
      title: 'Luminary Health — Patient Companion',
      subtitle: 'Telehealth & Real-time Recovery Tracker',
      category: 'HealthTech & Accessibility',
      year: '2025',
      impact: '100% WCAG AAA Compliant • 92% Adherence Rate',
      palette: ['#D4DDF6', '#4364D8', '#1F0F17'],
      tags: ['Accessibility', 'Clinical Research', 'Design System', 'Prototyping'],
      overview:
        'A high-empathy post-surgery recovery companion designed for elderly and neurodiverse patients, featuring high-contrast typography, voice-prompted check-ins, and direct clinician chat.',
      challenge:
        'Post-operative patients often skipped recovery journals due to small text, confusing iconography, and anxiety.',
      solution:
        'Designed an interface prioritizing large touch targets (64px+), calming ambient soft blue color psychology, and clear step-by-step guidance.',
      metrics: [
        { label: 'Med Adherence', value: '92%' },
        { label: 'Accessibility', value: 'WCAG AAA' },
        { label: 'Clinical Adoption', value: '18 Hospitals' }
      ],
      previewColor: 'linear-gradient(135deg, #1C2642 0%, #0F1322 100%)',
      accentColor: '#D4DDF6'
    },
    {
      id: 'velox-studio',
      title: 'Velox Studio — 3D Collaborative Canvas',
      subtitle: 'Browser-based Spatial Design Suite',
      category: 'Creative Tools & WebGL',
      year: '2024',
      impact: 'Product of the Day • 60fps WebGL Engine UI',
      palette: ['#E7C86A', '#542C39', '#1A0C13'],
      tags: ['SaaS Platform', 'Complex Workflows', 'Design Tokens', 'Dark Mode'],
      overview:
        'Crafted the complete user experience and dark-mode component architecture for a real-time multiplayer 3D scene builder running directly in the browser.',
      challenge:
        '3D modeling software is notoriously cluttered with hundreds of nested submenus, overwhelming newer creators.',
      solution:
        'Introduced contextual radial tool palettes, intelligent smart-snapping guidelines, and seamless multiplayer live cursors.',
      metrics: [
        { label: 'Time-to-First-Render', value: '2.5 min' },
        { label: 'Active Teams', value: '4,200+' },
        { label: 'Performance', value: '60 FPS UI' }
      ],
      previewColor: 'linear-gradient(135deg, #2D2313 0%, #150F08 100%)',
      accentColor: '#E7C86A'
    },
    {
      id: 'kite-flow',
      title: 'Kite Flow — Minimalist Knowledge OS',
      subtitle: 'Distraction-free Markdown & Canvas Suite',
      category: 'Productivity & Editorial UI',
      year: '2024',
      impact: 'Featured on Minimal Gallery & SiteInspire',
      palette: ['#FFF5E9', '#E9A0A8', '#542C39'],
      tags: ['Editorial Typography', 'Micro-interactions', 'Desktop App', 'UX Writing'],
      overview:
        'An intentional, distraction-free writing environment built around refined typography, tactile keyboard shortcuts, and bi-directional graph connections.',
      challenge:
        'Users suffered from mental fatigue caused by notification overload and hyperactive productivity tools.',
      solution:
        'Built an editorial typography-first canvas with warm cream themes, zero clutter, and smooth spring physics.',
      metrics: [
        { label: 'Weekly Retention', value: '78%' },
        { label: 'Avg Writing Session', value: '42 min' },
        { label: 'NPS Score', value: '+74' }
      ],
      previewColor: 'linear-gradient(135deg, #2A1722 0%, #160A11 100%)',
      accentColor: '#E9A0A8'
    }
  ];

  return (
    <section
      id="projects"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'linear-gradient(180deg, #12070E 0%, #1A0C14 50%, #0F050B 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <div className="pill-badge pill-blue" style={{ marginBottom: '14px' }}>
              <Layers size={14} />
              <span>Selected Works</span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: 800,
                color: '#FFF5E9',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Crafted with rigor, <br />
              <span style={{ color: 'var(--cherry-rose)' }}>refined with care</span>.
            </h2>
          </div>

          <p
            style={{
              maxWidth: '380px',
              fontSize: '0.98rem',
              color: 'rgba(255, 245, 233, 0.65)',
              lineHeight: 1.6,
            }}
          >
            A curated selection of digital products spanning fintech, healthcare, and creative tooling.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px',
          }}
        >
          {projects.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition-smooth)',
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={() => setSelectedProject(item)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = item.accentColor;
                e.currentTarget.style.boxShadow = `0 20px 40px -10px rgba(0,0,0,0.6), 0 0 30px ${item.accentColor}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--cherry-dark-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Card Visual Hero Area */}
              <div
                style={{
                  height: '240px',
                  background: item.previewColor,
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Decorative floating shape */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${item.accentColor}40 0%, transparent 70%)`,
                    filter: 'blur(30px)',
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
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: item.accentColor,
                      background: 'rgba(0,0,0,0.4)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${item.accentColor}40`,
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    style={{
                      color: 'rgba(255, 245, 233, 0.6)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                <div style={{ zIndex: 2 }}>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: item.accentColor,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '6px',
                    }}
                  >
                    <Sparkles size={14} />
                    <span>{item.impact}</span>
                  </div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#FFF5E9',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div
                style={{
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  background: 'rgba(30, 14, 24, 0.6)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'rgba(255, 245, 233, 0.75)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.overview}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'rgba(255, 245, 233, 0.8)',
                        background: 'rgba(255, 245, 233, 0.06)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid rgba(255, 245, 233, 0.1)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: item.accentColor,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    marginTop: '8px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 245, 233, 0.08)',
                  }}
                >
                  <span>View Case Study Breakdown</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Preview */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(10, 4, 8, 0.85)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '720px',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '28px',
              padding: 'clamp(24px, 4vw, 40px)',
              background: '#1F0F18',
              border: `1.5px solid ${selectedProject.accentColor}60`,
              boxShadow: `0 30px 60px rgba(0,0,0,0.8), 0 0 40px ${selectedProject.accentColor}30`,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 245, 233, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#FFF5E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: selectedProject.accentColor,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                {selectedProject.category} • {selectedProject.year}
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#FFF5E9',
                  lineHeight: 1.2,
                }}
              >
                {selectedProject.title}
              </h2>
            </div>

            {/* Metrics Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                background: 'rgba(255, 245, 233, 0.05)',
                padding: '16px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 245, 233, 0.08)',
              }}
            >
              {selectedProject.metrics.map((m) => (
                <div key={m.label} style={{ textAlign: 'center' }}>
                  <div
                    className="font-display"
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: selectedProject.accentColor,
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 245, 233, 0.6)',
                      fontWeight: 600,
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <h4
                  style={{
                    color: 'var(--cherry-rose)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    marginBottom: '6px',
                  }}
                >
                  The Challenge
                </h4>
                <p style={{ color: 'rgba(255, 245, 233, 0.8)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {selectedProject.challenge}
                </p>
              </div>

              <div>
                <h4
                  style={{
                    color: '#E7C86A',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    marginBottom: '6px',
                  }}
                >
                  The Design Solution
                </h4>
                <p style={{ color: 'rgba(255, 245, 233, 0.8)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '12px',
                flexWrap: 'wrap',
              }}
            >
              <button
                className="btn-primary"
                onClick={() => setSelectedProject(null)}
                style={{ flex: 1 }}
              >
                <span>Close Case Study</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
