import React from 'react';
import { 
  ShoppingBag, ShieldCheck, CheckCircle2, ArrowRight, Layers, 
  Search, Users, Smartphone, Compass, Lightbulb, BookOpen, ExternalLink, Image as ImageIcon
} from 'lucide-react';

export default function CaseStudiesSection() {
  return (
    <div className="case-studies-container">
      {/* =========================================================================
          CASE STUDY 1: AGRIMART
          ========================================================================= */}
      <section
        id="agrimart"
        style={{
          padding: '100px 24px',
          backgroundColor: 'var(--color-cream)',
          color: 'var(--color-burgundy)',
          position: 'relative',
          borderBottom: '1px solid rgba(84, 44, 57, 0.15)',
        }}
      >
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Header Plaque */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                borderRadius: '999px',
                background: 'rgba(84, 44, 57, 0.08)',
                color: 'var(--color-burgundy)',
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              <ShoppingBag size={14} />
              <span>Exhibition Hall A • Case Study</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--color-burgundy)',
                lineHeight: 1.15,
                margin: '0 0 12px 0',
              }}
            >
              AgriMart: Farm-to-Customer Platform
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-burgundy-soft)',
                maxWidth: '780px',
                lineHeight: 1.6,
              }}
            >
              A digital ecosystem bridging rural agricultural producers directly with urban households, eliminating
              unnecessary intermediaries through transparent product discovery and accessible producer dashboards.
            </p>

            {/* Tools Used Pill Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '18px' }}>
              {['Figma', 'React.js', 'HTML5', 'CSS3', 'JavaScript'].map((tool) => (
                <span
                  key={tool}
                  style={{
                    background: 'var(--color-cream-light)',
                    border: '1px solid rgba(84, 44, 57, 0.2)',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--color-burgundy)',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 6-Stage Narrative Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* 1. Problem & 2. Research */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Problem */}
              <div className="museum-plaque" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-burgundy-soft)', textTransform: 'uppercase' }}>
                    01 • Problem
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px' }}>
                  Disconnected Supply & Opaque Pricing
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'rgba(84, 44, 57, 0.85)', lineHeight: 1.6 }}>
                  Smallholder farmers lacked direct access to consumer markets, relying heavily on middlemen who dictated
                  unpredictable margins. Meanwhile, urban consumers struggled to verify produce freshness, origin, and fair
                  pricing. The challenge was creating a platform usable by farmers with varying digital literacy while offering
                  consumers a frictionless grocery delivery experience.
                </p>
              </div>

              {/* Research */}
              <div className="museum-plaque" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-burgundy-soft)', textTransform: 'uppercase' }}>
                    02 • Research
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px' }}>
                  Field Inquiries & Marketplace Dynamics
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'rgba(84, 44, 57, 0.85)', lineHeight: 1.6 }}>
                  Evaluated real producer pain points: connectivity issues in regional areas, the necessity of voice-assisted
                  prompts or minimal typing, and transparent inventory tracking. Consumer inquiries underscored the paramount
                  importance of harvest dates, batch traceability, and rapid checkout.
                </p>
              </div>
            </div>

            {/* 3. Design Process */}
            <div className="museum-plaque" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-burgundy-soft)', textTransform: 'uppercase' }}>
                  03 • Design Process
                </span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '14px' }}>
                Information Architecture & Dual-Sided Workflows
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'rgba(84, 44, 57, 0.85)', lineHeight: 1.6, marginBottom: '16px' }}>
                Mapped distinct personas: the Consumer searching for organic regional produce, and the Farmer/Admin managing
                harvest listings, stock availability, and incoming payouts.
              </p>

              {/* Step Flow Architecture */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px',
                  marginTop: '12px',
                }}
              >
                {[
                  { step: 'A', title: 'Product Discovery', desc: 'Category filters, seasonal harvest badges, location-based freshness index.' },
                  { step: 'B', title: 'Farmer Dashboard', desc: 'Simplified inventory tally, one-touch stock adjustments, payout clarity.' },
                  { step: 'C', title: 'Ordering & Cart', desc: 'Transparent batch delivery schedules and consolidated local bundling.' },
                  { step: 'D', title: 'Payment Flows', desc: 'Secure digital checkout supporting mobile wallets, cards, and cash on delivery.' },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: 'rgba(84, 44, 57, 0.04)',
                      padding: '16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(84, 44, 57, 0.1)',
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '0.8rem', color: 'var(--color-burgundy-soft)', marginBottom: '4px' }}>
                      Flow {item.step}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-burgundy)', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(84, 44, 57, 0.75)', lineHeight: 1.5 }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Key Decisions & 5. Final Design */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Key Decisions */}
              <div className="museum-plaque" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-burgundy-soft)', textTransform: 'uppercase' }}>
                    04 • Key Decisions
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }}>
                  Strategic UX Choices
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Visual icon-based controls on farmer dashboards to minimize reliance on heavy text input.',
                    'Clear "Harvested on [Date]" badges on produce cards to build immediate consumer trust.',
                    'Consolidated district delivery hubs to reduce transportation overhead for smallholders.',
                    'Modular responsive CSS grid tested across entry-level Android devices and modern web viewports.'
                  ].map((decision, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem' }}>
                      <CheckCircle2 size={16} color="var(--color-burgundy)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: 'rgba(84, 44, 57, 0.85)' }}>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Final Design Visual Exhibit */}
              <div className="museum-plaque" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-burgundy-soft)', textTransform: 'uppercase' }}>
                    05 • Final Design Showcase
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }}>
                  Interface Highlights
                </h3>

                {/* Interface Mockup Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div
                    style={{
                      background: '#1F2E1E',
                      color: '#FFF5E9',
                      padding: '16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(163, 230, 53, 0.3)',
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: '#A3E635', fontWeight: 700, textTransform: 'uppercase' }}>
                      Marketplace Feed
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, marginTop: '2px' }}>
                      Product Catalog with Farm Origin Badges
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255, 245, 233, 0.75)', marginTop: '4px' }}>
                      Categorized by organic certification, seasonal yield, and delivery radius.
                    </div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(84, 44, 57, 0.06)',
                      padding: '16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(84, 44, 57, 0.15)',
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: 'var(--color-burgundy)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Producer Portal
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, marginTop: '2px' }}>
                      Order Fulfillment & Stock Tally
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(84, 44, 57, 0.75)', marginTop: '4px' }}>
                      Large tactile cards with status pills: Ready for Pickup, En Route, Settled.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Learnings Plaque */}
            <div
              style={{
                background: 'var(--color-cream-light)',
                borderLeft: '4px solid var(--color-yellow)',
                padding: '22px 28px',
                borderRadius: '0 12px 12px 0',
                boxShadow: 'var(--shadow-plaque)',
              }}
            >
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-burgundy-soft)' }}>
                06 • Key Learnings & Takeaways
              </div>
              <div
                className="font-serif"
                style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-burgundy)', marginTop: '4px' }}
              >
                Simplicity is an accessibility requirement, not just a stylistic preference.
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(84, 44, 57, 0.85)', marginTop: '6px', lineHeight: 1.6 }}>
                Designing for agricultural workflows proved that high visual contrast, clear affordances, and zero-jargon
                labeling drastically improve user confidence and onboarding speed compared to feature-heavy enterprise portals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDY 2: ZYPHA
          ========================================================================= */}
      <section
        id="zypha"
        style={{
          padding: '100px 24px',
          backgroundColor: '#351B25', // Rich museum burgundy room
          color: 'var(--color-cream)',
          position: 'relative',
        }}
      >
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Header Plaque */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                borderRadius: '999px',
                background: 'rgba(213, 221, 246, 0.15)',
                color: 'var(--color-blue)',
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
                border: '1px solid rgba(213, 221, 246, 0.3)',
              }}
            >
              <ShieldCheck size={14} />
              <span>Exhibition Hall B • Case Study</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                color: '#FFF5E9',
                lineHeight: 1.15,
                margin: '0 0 12px 0',
              }}
            >
              Zypha: AI Medicine Delivery & Safety
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 245, 233, 0.8)',
                maxWidth: '780px',
                lineHeight: 1.6,
              }}
            >
              An intelligent pharmaceutical companion pairing automated prescription parsing with strict safety verification,
              designed to eliminate medication delivery delays and dosage confusion.
            </p>

            {/* Tools Used Pill Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '18px' }}>
              {['Figma', 'FigJam', 'Canva'].map((tool) => (
                <span
                  key={tool}
                  style={{
                    background: 'rgba(255, 245, 233, 0.08)',
                    border: '1px solid rgba(213, 221, 246, 0.25)',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--color-blue)',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 6-Stage Narrative Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* 1. Problem & 2. Research */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Problem */}
              <div className="museum-plaque-dark" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-blue)', textTransform: 'uppercase' }}>
                    01 • Problem
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: '#FFF5E9' }}>
                  Critical Prescription Friction & Anxiety
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'rgba(255, 245, 233, 0.8)', lineHeight: 1.6 }}>
                  Patients undergoing urgent treatment often encounter pharmacy stock shortages, illegible handwriting on
                  physical prescriptions, and confusing dosage schedules. Conventional delivery apps treat pharmaceuticals like fast
                  food, creating severe anxiety around safety, temperature control, and pharmacist verification.
                </p>
              </div>

              {/* Research */}
              <div className="museum-plaque-dark" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-blue)', textTransform: 'uppercase' }}>
                    02 • Research & Competitor Analysis
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: '#FFF5E9' }}>
                  Clinical Safety Protocols & Personas
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'rgba(255, 245, 233, 0.8)', lineHeight: 1.6 }}>
                  Benchmarked existing healthcare apps, mapping where users dropped off (primarily prescription scan errors and
                  unclear insurance coverage). Created two core personas: an elderly patient needing recurring chronic medication
                  with high-legibility UI, and a caregiver ordering urgent pediatric supplies during late hours.
                </p>
              </div>
            </div>

            {/* 3. Design Process */}
            <div className="museum-plaque-dark" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-blue)', textTransform: 'uppercase' }}>
                  03 • Design Process
                </span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '14px', color: '#FFF5E9' }}>
                From FigJam Brainstorms to Wireframe Systems
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'rgba(255, 245, 233, 0.8)', lineHeight: 1.6, marginBottom: '16px' }}>
                Conducted end-to-end user flow mapping in FigJam to isolate every decision junction where medication safety must be
                explicitly confirmed by certified pharmacists.
              </p>

              {/* Step Flow Architecture */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px',
                  marginTop: '12px',
                }}
              >
                {[
                  { step: 'A', title: 'AI Prescription Scan', desc: 'Realtime OCR highlights medicine names, strengths, and refills for patient verification.' },
                  { step: 'B', title: 'Pharmacist Sign-Off', desc: 'Visual verification badge indicating certified clinical review before dispatch.' },
                  { step: 'C', title: 'Dosage Clarification', desc: 'Large font instructions: "Take 1 pill after dinner" with visual schedule icons.' },
                  { step: 'D', title: 'Temperature Track', desc: 'Insulated packaging indicator for biologics requiring cold-chain refrigeration.' },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: 'rgba(255, 245, 233, 0.05)',
                      padding: '16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(213, 221, 246, 0.15)',
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '0.8rem', color: 'var(--color-blue)', marginBottom: '4px' }}>
                      Safety Tier {item.step}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF5E9', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255, 245, 233, 0.7)', lineHeight: 1.5 }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Key Decisions & 5. Final Design */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Key Decisions */}
              <div className="museum-plaque-dark" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-blue)', textTransform: 'uppercase' }}>
                    04 • Key Decisions
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px', color: '#FFF5E9' }}>
                  Accessibility & Safety Constraints
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Enforced strict WCAG AAA color contrast ratios across all dosage labels and warning badges.',
                    'Implemented double-confirmation modal before prescription orders can be submitted.',
                    'Included one-tap emergency pharmacy phone line accessible on every screen.',
                    'Used reassuring powder-blue and warm-cream tones to alleviate clinical stress.'
                  ].map((decision, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem' }}>
                      <CheckCircle2 size={16} color="var(--color-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: 'rgba(255, 245, 233, 0.8)' }}>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Final Design Visual Exhibit */}
              <div className="museum-plaque-dark" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-blue)', textTransform: 'uppercase' }}>
                    05 • Final Design Showcase
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px', color: '#FFF5E9' }}>
                  Interface Highlights
                </h3>

                {/* Interface Mockup Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div
                    style={{
                      background: 'rgba(213, 221, 246, 0.08)',
                      padding: '16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(213, 221, 246, 0.25)',
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: 'var(--color-blue)', fontWeight: 700, textTransform: 'uppercase' }}>
                      AI OCR Scanner
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, marginTop: '2px', color: '#FFF5E9' }}>
                      Prescription Extraction & Validation
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255, 245, 233, 0.75)', marginTop: '4px' }}>
                      Instant camera viewfinder with bounding box confirmation of medicine name and dosage.
                    </div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(255, 245, 233, 0.05)',
                      padding: '16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 245, 233, 0.1)',
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: 'var(--color-yellow)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Adherence Schedule
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, marginTop: '2px', color: '#FFF5E9' }}>
                      Daily Reminder Timeline
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255, 245, 233, 0.75)', marginTop: '4px' }}>
                      Morning / Afternoon / Night medication tracker with notification sync.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Learnings Plaque */}
            <div
              style={{
                background: 'rgba(213, 221, 246, 0.12)',
                borderLeft: '4px solid var(--color-blue)',
                padding: '22px 28px',
                borderRadius: '0 12px 12px 0',
                borderTop: '1px solid rgba(213, 221, 246, 0.2)',
                borderBottom: '1px solid rgba(213, 221, 246, 0.2)',
                borderRight: '1px solid rgba(213, 221, 246, 0.2)',
              }}
            >
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-blue)' }}>
                06 • Key Learnings & Takeaways
              </div>
              <div
                className="font-serif"
                style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFF5E9', marginTop: '4px' }}
              >
                In healthcare products, peace of mind is the ultimate metric.
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 245, 233, 0.85)', marginTop: '6px', lineHeight: 1.6 }}>
                Every UI interaction in healthcare must prioritize reassurance, calm aesthetics, and explicit confirmation over
                rushed conversion funnels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
