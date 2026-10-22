import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';

export default function GalleryConversationSection() {
  const handleScrollToProjects = () => {
    const el = document.getElementById('featured-portrait');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="gallery-conversation"
      style={{
        position: 'relative',
        backgroundColor: '#4A2330', // Deep burgundy gallery tone matching wall artwork
        color: 'var(--color-cream)',
        paddingTop: '90px',
        paddingBottom: '90px',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 20%, rgba(233, 160, 168, 0.12) 0%, rgba(84, 44, 57, 0.95) 60%, #351722 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-narrow"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '36px',
        }}
      >
        {/* Curatorial Wall Plaque */}
        <div style={{ textAlign: 'center', maxWidth: '680px' }}>
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
            <Sparkles size={13} />
            <span>Room 02 • The Exhibition Gallery</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              color: 'var(--color-cream)',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}
          >
            A Dialogue Between Ideas & Craft
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255, 245, 233, 0.85)',
              lineHeight: 1.6,
            }}
          >
            Every project begins with a conversation: listening closely to user struggles, understanding constraints,
            and translating complex systems into clear, memorable digital journeys.
          </p>
        </div>

        {/* The Exact Supplied Artwork "Warm Conversation in the Art Gallery(1).png" */}
        <div
          style={{
            width: '100%',
            maxWidth: '1024px',
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(25, 7, 14, 0.65), 0 0 0 1px rgba(231, 200, 107, 0.25)',
            position: 'relative',
            background: '#3A1B27',
          }}
        >
          <img
            src="/museum_gallery_conversation.png"
            alt="Sirisha in conversation with a gallery visitor pointing towards the artwork"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              aspectRatio: '1024 / 576',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Bottom invitation to proceed to featured project portrait */}
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button
            onClick={handleScrollToProjects}
            style={{
              background: 'rgba(255, 245, 233, 0.08)',
              border: '1.5px solid rgba(231, 200, 107, 0.4)',
              borderRadius: '9999px',
              padding: '10px 24px',
              color: 'var(--color-yellow)',
              fontWeight: 700,
              fontSize: '0.84rem',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-yellow)';
              e.currentTarget.style.color = '#3A1B27';
              e.currentTarget.style.borderColor = 'var(--color-yellow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.08)';
              e.currentTarget.style.color = 'var(--color-yellow)';
              e.currentTarget.style.borderColor = 'rgba(231, 200, 107, 0.4)';
            }}
          >
            <span>Proceed to the Featured Project Wall</span>
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
