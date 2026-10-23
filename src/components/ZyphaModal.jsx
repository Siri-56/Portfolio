import React from 'react';
import {
  X,
  ExternalLink,
  Shield,
  ShieldCheck,
  Zap,
  Target,
  BarChart3,
  Lightbulb,
  Smartphone,
  Search,
  PlusCircle,
  Compass,
  UserCheck,
  Users,
} from 'lucide-react';

export default function ZyphaModal({ onClose }) {
  const figmaUrl =
    'https://www.figma.com/design/wouweJgLNqtjMlKgjapMbA/Untitled?node-id=0-1&t=plQG4DIEXL0H5Uko-1';

  const personas = [
    {
      name: 'Priya, 62',
      role: 'Retired Bank Officer',
      avatar: '/persona_priya.png',
      desc: 'Forgets refills, struggles with small text.',
    },
    {
      name: 'Ramesh, 32',
      role: 'Sales Manager',
      avatar: '/persona_ramesh.png',
      desc: 'Busy professional, needs fast delivery and accurate orders.',
    },
    {
      name: 'Aarav, 21',
      role: 'College Student',
      avatar: '/persona_aarav.png',
      desc: 'Prefers digital convenience and clear instructions.',
    },
    {
      name: 'Meera, 38',
      role: 'Single Mother',
      avatar: '/persona_meera.png',
      desc: "Manages child's medication, needs reliable alerts.",
    },
    {
      name: 'Sandeep, 45',
      role: 'IT Consultant',
      avatar: '/persona_sandeep.png',
      desc: 'Needs predictable delivery for insulin and diabetic supplies.',
    },
  ];

  const hypotheses = [
    {
      num: '01',
      text: 'Users prefer fast, verified delivery over traditional pharmacy visits.',
    },
    {
      num: '02',
      text: 'Safety checks increase user trust and adoption.',
    },
    {
      num: '03',
      text: 'A simple, accessible interface improves user satisfaction.',
    },
    {
      num: '04',
      text: 'Reminders and refill automation reduce missed medication.',
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="zypha-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(16, 6, 11, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px, 2.5vw, 24px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: '26px',
          padding: 'clamp(22px, 3.5vw, 36px)',
          background: '#2B121C',
          border: '1.5px solid rgba(213, 221, 246, 0.45)',
          boxShadow:
            '0 30px 80px rgba(0, 0, 0, 0.85), 0 0 50px rgba(213, 221, 246, 0.12)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          color: '#FFF5E9',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================================================================
            TOP SECTION: HEADER & 3-PHONE HERO SHOWCASE
            ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '28px',
            position: 'relative',
          }}
        >
          {/* Left Title Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 14px',
                borderRadius: '999px',
                background: 'rgba(213, 221, 246, 0.12)',
                border: '1px solid rgba(213, 221, 246, 0.3)',
                color: 'var(--color-blue)',
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                width: 'fit-content',
              }}
            >
              <Compass size={13} />
              <span>EXHIBITION HALL A • CASE STUDY</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2
                id="zypha-title"
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                  fontWeight: 800,
                  color: '#FFF5E9',
                  lineHeight: 1.1,
                  margin: 0,
                  letterSpacing: '0.01em',
                }}
              >
                Zypha
              </h2>
              <span
                style={{
                  color: 'var(--color-yellow)',
                  fontSize: '2rem',
                  lineHeight: 1,
                }}
              >
                ✦
              </span>
            </div>

            <p
              style={{
                fontSize: 'clamp(0.96rem, 1.25vw, 1.12rem)',
                color: 'rgba(255, 245, 233, 0.88)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              A next-generation medical platform that helps people order verified
              medicines instantly, ensuring safety, accuracy, and accessibility for
              every user.
            </p>

            {/* Quick Metadata Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '4px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(56, 23, 34, 0.85)',
                  border: '1px solid rgba(255, 245, 233, 0.15)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'rgba(255, 245, 233, 0.9)',
                }}
              >
                <Smartphone size={14} color="var(--color-blue)" />
                <span>Mobile App Design</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(56, 23, 34, 0.85)',
                  border: '1px solid rgba(255, 245, 233, 0.15)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'rgba(255, 245, 233, 0.9)',
                }}
              >
                <Search size={14} color="var(--color-blue)" />
                <span>User Research</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(56, 23, 34, 0.85)',
                  border: '1px solid rgba(255, 245, 233, 0.15)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'rgba(255, 245, 233, 0.9)',
                }}
              >
                <PlusCircle size={14} color="var(--color-blue)" />
                <span>Healthcare UX</span>
              </div>
            </div>
          </div>

          {/* Right Hero Device Showcase */}
          <div
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255, 245, 233, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#3A1824',
            }}
          >
            <img
              src="/zypha_hero_devices.png"
              alt="Zypha 3-phone mobile app experience"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'rgba(255, 245, 233, 0.12)',
              border: '1px solid rgba(255, 245, 233, 0.25)',
              borderRadius: '999px',
              color: '#FFF5E9',
              padding: '7px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              zIndex: 30,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 245, 233, 0.12)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* =========================================================================
            MIDDLE ROW: THE PROBLEM & PROJECT GOALS
            ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Card 1: THE PROBLEM */}
          <div
            style={{
              background: '#3A1725',
              border: '1px solid rgba(255, 245, 233, 0.12)',
              borderRadius: '18px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-yellow)',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <Shield size={16} />
              <span>THE PROBLEM</span>
            </div>

            <p
              style={{
                fontSize: '0.94rem',
                color: 'rgba(255, 245, 233, 0.88)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              People often struggle with managing prescriptions, verifying medicines,
              and accessing trustworthy delivery services. Busy individuals may not have
              time to visit pharmacies, while elderly users face difficulties reading
              prescriptions and identifying correct dosages. Existing platforms lack
              frequent safety checks, prescription validation, and inclusive design,
              leading to risks such as incorrect medicines and unreliable interactions.
            </p>
          </div>

          {/* Card 2: PROJECT GOALS */}
          <div
            style={{
              background: '#3A1725',
              border: '1px solid rgba(255, 245, 233, 0.12)',
              borderRadius: '18px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-yellow)',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <Target size={16} />
              <span>PROJECT GOALS</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px',
              }}
            >
              {/* Goal 1 */}
              <div
                style={{
                  background: 'rgba(25, 9, 15, 0.65)',
                  border: '1px solid rgba(255, 245, 233, 0.1)',
                  borderRadius: '14px',
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(74, 187, 180, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ShieldCheck size={18} color="#4ABBB4" />
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFF5E9' }}>
                  Ensure Medical Safety
                </div>
                <div
                  style={{
                    fontSize: '0.74rem',
                    color: 'rgba(255, 245, 233, 0.72)',
                    lineHeight: 1.45,
                  }}
                >
                  Integrate OCR, pharmacist review, and real-time safety alerts to
                  prevent incorrect or unsafe orders.
                </div>
              </div>

              {/* Goal 2 */}
              <div
                style={{
                  background: 'rgba(25, 9, 15, 0.65)',
                  border: '1px solid rgba(255, 245, 233, 0.1)',
                  borderRadius: '14px',
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(59, 124, 230, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Zap size={18} color="#3B7CE6" />
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFF5E9' }}>
                  Improve Convenience
                </div>
                <div
                  style={{
                    fontSize: '0.74rem',
                    color: 'rgba(255, 245, 233, 0.72)',
                    lineHeight: 1.45,
                  }}
                >
                  Simplify prescription upload, reordering, medicine tracking, and
                  emergency support.
                </div>
              </div>

              {/* Goal 3 */}
              <div
                style={{
                  background: 'rgba(25, 9, 15, 0.65)',
                  border: '1px solid rgba(255, 245, 233, 0.1)',
                  borderRadius: '14px',
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(140, 177, 110, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <UserCheck size={18} color="#8CB16E" />
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFF5E9' }}>
                  Enhance Accessibility
                </div>
                <div
                  style={{
                    fontSize: '0.74rem',
                    color: 'rgba(255, 245, 233, 0.72)',
                    lineHeight: 1.45,
                  }}
                >
                  Design an inclusive interface with clear layouts, large touch targets,
                  and easy navigation for elderly users.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            THIRD SECTION: RESEARCH INSIGHTS & USER PERSONAS
            ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Left: Research Insights with 2 Clean SVG Pie Charts */}
          <div
            style={{
              background: '#3A1725',
              border: '1px solid rgba(255, 245, 233, 0.12)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-yellow)',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <BarChart3 size={16} />
              <span>RESEARCH INSIGHTS</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                alignItems: 'center',
              }}
            >
              {/* Chart 1 */}
              <div
                style={{
                  background: 'rgba(25, 9, 15, 0.65)',
                  border: '1px solid rgba(255, 245, 233, 0.1)',
                  borderRadius: '14px',
                  padding: '14px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'center',
                }}
              >
                <svg width="100" height="100" viewBox="0 0 120 120">
                  <path
                    d="M 60 60 L 60.00 12.00 A 48 48 0 0 1 60.00 108.00 Z"
                    fill="#E0533C"
                  />
                  <text
                    x="88.8"
                    y="60.0"
                    fill="#fff"
                    fontSize="9"
                    fontWeight="800"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    50%
                  </text>
                  <path
                    d="M 60 60 L 60.00 108.00 A 48 48 0 0 1 12.00 60.00 Z"
                    fill="#F4A724"
                  />
                  <text
                    x="39.6"
                    y="80.4"
                    fill="#fff"
                    fontSize="9"
                    fontWeight="800"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    25%
                  </text>
                  <path
                    d="M 60 60 L 12.00 60.00 A 48 48 0 0 1 33.27 20.13 Z"
                    fill="#3B7CE6"
                  />
                  <text
                    x="34.6"
                    y="46.4"
                    fill="#fff"
                    fontSize="9"
                    fontWeight="800"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    15.6%
                  </text>
                  <path
                    d="M 60 60 L 33.27 20.13 A 48 48 0 0 1 60.00 12.00 Z"
                    fill="#27A04D"
                  />
                  <text
                    x="51.6"
                    y="32.4"
                    fill="#fff"
                    fontSize="9"
                    fontWeight="800"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    9.4%
                  </text>
                </svg>
                <div
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    color: 'rgba(255, 245, 233, 0.85)',
                    lineHeight: 1.3,
                  }}
                >
                  Difficulty finding prescribed medicines on time
                  <div style={{ opacity: 0.65, fontSize: '0.68rem', marginTop: '2px' }}>
                    (27 responses)
                  </div>
                </div>
              </div>

              {/* Chart 2 */}
              <div
                style={{
                  background: 'rgba(25, 9, 15, 0.65)',
                  border: '1px solid rgba(255, 245, 233, 0.1)',
                  borderRadius: '14px',
                  padding: '14px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'center',
                }}
              >
                <svg width="100" height="100" viewBox="0 0 120 120">
                  <path
                    d="M 60 60 L 60.00 12.00 A 48 48 0 1 1 20.13 86.73 Z"
                    fill="#3B7CE6"
                  />
                  <text
                    x="85.4"
                    y="73.6"
                    fill="#fff"
                    fontSize="9"
                    fontWeight="800"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    65.6%
                  </text>
                  <path
                    d="M 60 60 L 20.13 86.73 A 48 48 0 0 1 41.49 15.71 Z"
                    fill="#F4A724"
                  />
                  <text
                    x="32.4"
                    y="51.7"
                    fill="#fff"
                    fontSize="9"
                    fontWeight="800"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    28.1%
                  </text>
                  <path
                    d="M 60 60 L 41.49 15.71 A 48 48 0 0 1 60.00 12.00 Z"
                    fill="#E0533C"
                  />
                  <text
                    x="54.3"
                    y="31.8"
                    fill="#fff"
                    fontSize="9"
                    fontWeight="800"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    6.3%
                  </text>
                </svg>
                <div
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    color: 'rgba(255, 245, 233, 0.85)',
                    lineHeight: 1.3,
                  }}
                >
                  Would you like an emergency "SOS delivery" feature?
                  <div style={{ opacity: 0.65, fontSize: '0.68rem', marginTop: '2px' }}>
                    (27 responses)
                  </div>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 245, 233, 0.76)',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              A survey with 27 participants showed a strong preference for fast and
              reliable medicine access, especially among users who struggle to get
              prescriptions on time. Findings indicated high interest in under-30-minute
              emergency SOS delivery and automated refill reminders.
            </p>
          </div>

          {/* Right: User Personas 5 Profiles */}
          <div
            style={{
              background: '#3A1725',
              border: '1px solid rgba(255, 245, 233, 0.12)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-yellow)',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <Users size={16} />
              <span>USER PERSONAS</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(95px, 1fr))',
                gap: '10px',
              }}
            >
              {personas.map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: 'rgba(25, 9, 15, 0.65)',
                    border: '1px solid rgba(255, 245, 233, 0.1)',
                    borderRadius: '14px',
                    padding: '12px 8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '6px',
                  }}
                >
                  <img
                    src={p.avatar}
                    alt={p.name}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1.5px solid rgba(255, 245, 233, 0.25)',
                    }}
                  />
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#FFF5E9',
                      lineHeight: 1.2,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.64rem',
                      fontWeight: 600,
                      color: 'var(--color-blue)',
                      lineHeight: 1.2,
                    }}
                  >
                    {p.role}
                  </div>
                  <div
                    style={{
                      fontSize: '0.64rem',
                      color: 'rgba(255, 245, 233, 0.68)',
                      lineHeight: 1.35,
                      marginTop: '2px',
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            FOURTH SECTION: KEY HYPOTHESES
            ========================================================================= */}
        <div
          style={{
            background: '#3A1725',
            border: '1px solid rgba(255, 245, 233, 0.12)',
            borderRadius: '18px',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-yellow)',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <Lightbulb size={16} />
            <span>KEY HYPOTHESES</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '14px',
            }}
          >
            {hypotheses.map((h) => (
              <div
                key={h.num}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  background: 'rgba(25, 9, 15, 0.55)',
                  border: '1px solid rgba(255, 245, 233, 0.08)',
                  borderRadius: '12px',
                  padding: '12px 14px',
                }}
              >
                <span
                  style={{
                    color: 'var(--color-yellow)',
                    fontWeight: 800,
                    fontSize: '0.94rem',
                    lineHeight: 1.3,
                  }}
                >
                  {h.num}
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'rgba(255, 245, 233, 0.88)',
                    lineHeight: 1.45,
                  }}
                >
                  {h.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM ACTION BAR: FIGMA LINKS & RETURN BUTTON
            ========================================================================= */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 245, 233, 0.12)',
          }}
        >
          {/* Left Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              'Figma',
              'Mobile UI',
              'Healthcare UX',
              'User Research',
              'Inclusive Design',
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'rgba(56, 23, 34, 0.75)',
                  border: '1px solid rgba(255, 245, 233, 0.12)',
                  borderRadius: '999px',
                  padding: '5px 12px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: 'rgba(255, 245, 233, 0.75)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {/* View Mobile Figma Button */}
            <a
              href={figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(56, 23, 34, 0.9)',
                border: '1.5px solid rgba(213, 221, 246, 0.4)',
                borderRadius: '999px',
                padding: '9px 18px',
                color: '#FFF5E9',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(213, 221, 246, 0.2)';
                e.currentTarget.style.borderColor = 'var(--color-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(56, 23, 34, 0.9)';
                e.currentTarget.style.borderColor = 'rgba(213, 221, 246, 0.4)';
              }}
            >
              <span>View Mobile Figma</span>
              <ExternalLink size={14} />
            </a>

            {/* Return to Gallery Button */}
            <button
              onClick={onClose}
              style={{
                background: 'var(--color-yellow)',
                border: 'none',
                borderRadius: '999px',
                padding: '9px 20px',
                color: '#2B121C',
                fontSize: '0.84rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow =
                  '0 4px 14px rgba(231, 200, 107, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Return to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
