import React from 'react';
import { Palette, Compass, Layers, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      num: '01',
      title: 'Human-Centered Systems',
      desc: 'Grounding every wireframe and component in deep qualitative user research, empathy interviews, and behavioral psychology.',
      tag: 'Research & Strategy',
    },
    {
      num: '02',
      title: 'Emotion & Micro-Interactions',
      desc: 'Infusing digital interfaces with delight, personality, and tactile physics—transforming mundane tasks into memorable moments.',
      tag: 'Motion & Delight',
    },
    {
      num: '03',
      title: 'Production-Grade Design Systems',
      desc: 'Architecting scalable Figma token architectures that translate effortlessly into React, Tailwind, and native design tokens.',
      tag: 'Scalability',
    },
    {
      num: '04',
      title: 'Data-Informed Iteration',
      desc: 'Balancing bold creative instincts with rigorous A/B experimentation, accessibility (WCAG AAA), and funnel analytics.',
      tag: 'Product Impact',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'linear-gradient(180deg, #0F050B 0%, #1A0C14 50%, #12070E 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div className="pill-badge pill-cherry" style={{ marginBottom: '16px' }}>
            <Compass size={14} />
            <span>Philosophy & Approach</span>
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: '#FFF5E9',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Design that makes people <span style={{ color: 'var(--cherry-rose)' }}>feel something</span>.
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 245, 233, 0.7)',
              lineHeight: 1.6,
            }}
          >
            I bridge the gap between playful artistic intuition and disciplined product engineering.
            Every curve, transition, and micro-animation serves a clear purpose: clarity, trust, and resonance.
          </p>
        </div>

        {/* Feature Hero Card: Palette 09 Cherry & Cream (Direct nod to user reference!) */}
        <div
          className="glass-cream-card"
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            padding: '0',
            position: 'relative',
            transition: 'var(--transition-smooth)',
          }}
        >
          {/* Top Color Swatch Row (exact colors from Palette 09) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              height: '110px',
              width: '100%',
            }}
          >
            <div style={{ background: '#E9A0A8' }} title="Cherry Pink (#E9A0A8)" />
            <div style={{ background: '#FFF5E9' }} title="Warm Cream (#FFF5E9)" />
            <div style={{ background: '#542C39' }} title="Deep Cherry (#542C39)" />
            <div style={{ background: '#D4DDF6' }} title="Soft Airy Blue (#D4DDF6)" />
            <div style={{ background: '#E7C86A' }} title="Honey Gold (#E7C86A)" />
          </div>

          {/* Editorial Content Below Swatches */}
          <div
            style={{
              padding: 'clamp(28px, 4vw, 44px)',
              background: '#FFF5E9',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#542C39',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Palette size={16} />
              <span>Palette 09 — Cherry & Cream</span>
            </div>

            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                fontWeight: 800,
                color: '#542C39',
                lineHeight: 1.2,
                margin: '4px 0',
              }}
            >
              A little different.
            </h3>

            <p
              style={{
                fontSize: '1.18rem',
                color: '#542C39',
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              Warm cherry tones, soft blue and confident editorial typography.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'rgba(84, 44, 57, 0.7)',
                fontStyle: 'italic',
                marginTop: '4px',
              }}
            >
              Best for: a distinctive, expressive portfolio that stands apart from typical blue-and-white designer sites.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'var(--transition-smooth)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(233, 160, 168, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--cherry-dark-border)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    color: 'var(--cherry-rose)',
                  }}
                >
                  {pillar.num}
                </span>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--blue-soft)',
                    background: 'rgba(212, 221, 246, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '999px',
                  }}
                >
                  {pillar.tag}
                </span>
              </div>

              <h4
                className="font-display"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#FFF5E9',
                }}
              >
                {pillar.title}
              </h4>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'rgba(255, 245, 233, 0.72)',
                  lineHeight: 1.6,
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
