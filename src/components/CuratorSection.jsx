import React from 'react';
import { Eye, Layers, Sparkles } from 'lucide-react';

export default function CuratorSection() {
  const stages = [
    {
      num: '01',
      title: 'OBSERVE',
      subtitle: 'Understand users & uncover problems',
      desc: 'Before drawing a single wireframe, I immerse myself in user contexts, behavioral inquiry, and empathy mapping. True innovation begins by noticing what people struggle with in silence.',
      color: 'var(--color-burgundy)',
      tag: 'Qualitative Research',
      icon: <Eye size={20} color="var(--color-burgundy)" />,
    },
    {
      num: '02',
      title: 'ORGANIZE',
      subtitle: 'Structure information, flows & wireframes',
      desc: 'Transforming messy discovery insights into intuitive information architecture, clear mental models, and robust design token hierarchies that scale effortlessly.',
      color: 'var(--color-burgundy-soft)',
      tag: 'Systems & Architecture',
      icon: <Layers size={20} color="var(--color-burgundy)" />,
    },
    {
      num: '03',
      title: 'REFINE',
      subtitle: 'Improve interfaces, interactions & details',
      desc: 'Obsessing over micro-interactions, responsive fluidity, accessible contrast, and tactile delight. The final polish transforms an interface from functional to deeply memorable.',
      color: 'var(--color-cherry-dark)',
      tag: 'Craft & Interaction',
      icon: <Sparkles size={20} color="var(--color-burgundy)" />,
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '110px 24px',
        backgroundColor: 'var(--color-cream)',
        color: 'var(--color-burgundy)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        {/* Curatorial Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--color-burgundy)',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            The Person Behind the Pixels
          </h2>

          <p
            style={{
              fontSize: '1.08rem',
              color: 'var(--color-burgundy-soft)',
              lineHeight: 1.6,
            }}
          >
            Meet the curator behind this digital collection.
          </p>
        </div>

        {/* Curator Portrait & Introduction Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Framed Curator Portrait */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              className="gold-frame"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                maxWidth: '420px',
                width: '100%',
                background: '#41222D',
                boxShadow: 'var(--shadow-frame)',
              }}
            >
              <img
                src="/museum_curator_bg.jpg"
                alt="Curator in the Museum Gallery"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Plaque under portrait */}
            <div
              className="museum-plaque"
              style={{
                padding: '8px 24px',
                textAlign: 'center',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--color-burgundy)',
              }}
            >
              <span>Sirisha — Curator & Lead Product Designer</span>
            </div>
          </div>

          {/* Curator Biography & Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.3rem)',
                fontWeight: 800,
                color: 'var(--color-burgundy)',
                lineHeight: 1.2,
              }}
            >
              Curating interfaces with intention, empathy, and craft.
            </h3>

            <p style={{ fontSize: '0.98rem', color: 'rgba(84, 44, 57, 0.85)', lineHeight: 1.7 }}>
              I'm dedicated to building purposeful digital products that
              balance usability, emotional resonance, and solid technical foundations.
            </p>

            <p style={{ fontSize: '0.98rem', color: 'rgba(84, 44, 57, 0.85)', lineHeight: 1.7 }}>
              I view digital design through the lens of curation: removing the superficial noise, elevating what genuinely
              matters to the user, and framing complex engineering solutions in clear, intuitive interfaces.
            </p>

            {/* Quick Curator Fact Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {[
                'Design Systems Architecture',
                'WCAG Accessibility',
                'Figma & React Prototyping',
                'Story-driven Product Strategy'
              ].map((pill) => (
                <span
                  key={pill}
                  style={{
                    background: 'var(--color-cream-light)',
                    border: '1px solid rgba(84, 44, 57, 0.15)',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--color-burgundy)',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Stage Design Approach Museum Plaques */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                fontSize: '0.76rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-burgundy-soft)',
                marginBottom: '6px',
              }}
            >
              Curatorial Methodology
            </div>
            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                fontWeight: 800,
                color: 'var(--color-burgundy)',
              }}
            >
              How I Approach Every Problem
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {stages.map((stage) => (
              <div
                key={stage.num}
                className="museum-plaque"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--color-burgundy)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(84, 44, 57, 0.15)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(84, 44, 57, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {stage.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--color-burgundy-soft)',
                      background: 'var(--color-cream)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: '1px solid rgba(84, 44, 57, 0.12)',
                    }}
                  >
                    {stage.tag}
                  </span>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: 'var(--color-burgundy-soft)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    STAGE {stage.num}
                  </div>
                  <h4
                    className="font-serif"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: 'var(--color-burgundy)',
                      margin: '2px 0 4px 0',
                    }}
                  >
                    {stage.title}
                  </h4>
                  <div
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--color-burgundy-soft)',
                    }}
                  >
                    {stage.subtitle}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgba(84, 44, 57, 0.85)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
