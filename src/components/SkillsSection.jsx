import React, { useState } from 'react';
import { Cpu, Sparkles, Code2, Users, Layout, Smartphone, Palette, CheckCircle } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'code', label: 'Front-End & Tokens' },
    { id: 'strategy', label: 'Research & Strategy' },
  ];

  const skills = [
    { name: 'Figma & Auto Layout', category: 'design', level: 'Mastery', icon: '🎨' },
    { name: 'Design Systems & Tokens', category: 'design', level: 'Mastery', icon: '🧩' },
    { name: 'Micro-interactions & Motion', category: 'design', level: 'Advanced', icon: '✨' },
    { name: 'Mobile App Design (iOS/Android)', category: 'design', level: 'Mastery', icon: '📱' },
    { name: 'Framer & Prototyping', category: 'design', level: 'Advanced', icon: '⚡' },
    { name: 'Accessibility (WCAG AAA)', category: 'design', level: 'Mastery', icon: '👁️' },

    { name: 'React & JSX Architecture', category: 'code', level: 'Advanced', icon: '⚛️' },
    { name: 'CSS3 / Modern Layouts', category: 'code', level: 'Mastery', icon: '🎭' },
    { name: 'HTML5 Semantic Web', category: 'code', level: 'Mastery', icon: '🌐' },
    { name: 'Vite & Web Tooling', category: 'code', level: 'Advanced', icon: '⚡' },
    { name: 'Canvas & SVG Animation', category: 'code', level: 'Advanced', icon: '📐' },

    { name: 'User Journey Mapping', category: 'strategy', level: 'Mastery', icon: '🗺️' },
    { name: 'Qualitative User Interviews', category: 'strategy', level: 'Advanced', icon: '🎙️' },
    { name: 'Usability & A/B Testing', category: 'strategy', level: 'Advanced', icon: '🧪' },
    { name: 'Information Architecture', category: 'strategy', level: 'Mastery', icon: '🏛️' },
    { name: 'Design Sprints & Workshops', category: 'strategy', level: 'Advanced', icon: '💡' },
  ];

  const filteredSkills =
    activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'linear-gradient(180deg, #0F050B 0%, #170A12 50%, #12070E 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <div className="pill-badge pill-cherry" style={{ marginBottom: '14px' }}>
            <Cpu size={14} />
            <span>Toolkit & Craft</span>
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              color: '#FFF5E9',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            The tools behind the <span style={{ color: 'var(--cherry-rose)' }}>magic</span>.
          </h2>
          <p style={{ color: 'rgba(255, 245, 233, 0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
            Combining product discovery, expressive visual craftsmanship, and real-world code implementation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border:
                  activeTab === cat.id
                    ? '1px solid var(--cherry-rose)'
                    : '1px solid rgba(255, 245, 233, 0.12)',
                background:
                  activeTab === cat.id
                    ? 'rgba(233, 160, 168, 0.2)'
                    : 'rgba(255, 245, 233, 0.04)',
                color: activeTab === cat.id ? '#FFF5E9' : 'rgba(255, 245, 233, 0.7)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {filteredSkills.map((item, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                borderRadius: '16px',
                padding: '20px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(233, 160, 168, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--cherry-dark-border)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                <div>
                  <div
                    style={{
                      fontSize: '0.94rem',
                      fontWeight: 700,
                      color: '#FFF5E9',
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      color: 'var(--cherry-rose)',
                      fontWeight: 600,
                    }}
                  >
                    {item.level}
                  </div>
                </div>
              </div>

              <CheckCircle size={16} color="var(--blue-soft)" opacity={0.7} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
