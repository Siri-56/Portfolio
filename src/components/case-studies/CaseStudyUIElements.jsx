import React from 'react';
import {
  Search,
  ScanLine,
  Bell,
  AlertTriangle,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  PhoneCall,
  Activity,
  Layers,
  ArrowRight,
} from 'lucide-react';

/**
 * ============================================================================
 * 1. RESEARCH BOARD ELEMENT
 * Crisp, high-resolution native elements replacing blurry screenshots.
 * Contains the 5 User Interviewees + Quantitative Survey Insights.
 * ============================================================================
 */
export function ResearchBoardElement({ interviewees = [], surveyStats = [] }) {
  return (
    <div className="case-research-native-board">
      {/* 5 User Interviewee Cards (Priya, Ramesh, Aarav, Meera, Sandeep) */}
      <div className="case-interviewees-header">
        <div className="case-board-pill">USER INTERVIEWS & FIELD STUDY</div>
        <span className="case-board-sub">Direct feedback from 5 key demographic profiles</span>
      </div>

      <div className="case-interviewees-grid">
        {interviewees.map((person) => (
          <div className="case-interview-card" key={person.name}>
            <div className="case-interview-avatar-wrap">
              {person.avatar ? (
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="case-interview-avatar"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="case-interview-avatar-fallback">
                  {person.name.charAt(0)}
                </div>
              )}
            </div>

            <div className="case-interview-info">
              <h4 className="case-interview-name">{person.name}</h4>
              <span className="case-interview-role">{person.role}</span>
              {person.tag && <span className="case-interview-tag">{person.tag}</span>}
              <p className="case-interview-desc">“{person.desc}”</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quantitative Survey Insights Strip */}
      {surveyStats.length > 0 && (
        <div className="case-survey-strip">
          <div className="case-survey-label">
            <Activity size={14} color="#E4C16B" />
            <span>SURVEY FINDINGS (27 PARTICIPANTS)</span>
          </div>

          <div className="case-survey-metrics-grid">
            {surveyStats.map((statItem) => (
              <div className="case-survey-metric-card" key={statItem.label}>
                <div
                  className="case-survey-num"
                  style={{ color: statItem.color || '#E4C16B' }}
                >
                  {statItem.stat}
                </div>
                <div className="case-survey-text">
                  <h5>{statItem.label}</h5>
                  <p>{statItem.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * ============================================================================
 * 2. APPROACH PATH MOCKUPS
 * Crisp vector UI screens for Search & Order, Prescription Upload, Refills & SOS.
 * ============================================================================
 */
export function ApproachMockup({ index, path, type }) {
  // Special Emergency Feature
  if (type === 'emergency' || index === 3) {
    return (
      <div className="case-ui-mockup mockup-emergency">
        <div className="mockup-header-bar">
          <div className="mockup-pill-red">
            <AlertTriangle size={12} />
            <span>EMERGENCY DISPATCH</span>
          </div>
          <span className="mockup-sla">Guaranteed Delivery &lt; 30 Mins</span>
        </div>

        <div className="mockup-emergency-action-card">
          <div className="mockup-sos-badge">SOS</div>
          <div>
            <h4>Immediate Medical Courier</h4>
            <p>Priority dispatch from nearest 24/7 hospital dispensary</p>
          </div>
        </div>

        <div className="mockup-emergency-quick-rows">
          <div className="mockup-quick-row">
            <PhoneCall size={14} color="#FF8A80" />
            <span>Direct Line: On-Call Clinical Pharmacist</span>
            <span className="mockup-status-dot">Live</span>
          </div>
          <div className="mockup-quick-row">
            <Sparkles size={14} color="#80D8FF" />
            <span>AI Triage Assistant: Instant dosage guidance</span>
            <span className="mockup-arrow">→</span>
          </div>
        </div>
      </div>
    );
  }

  // Path 01: Search & Order
  if (index === 0) {
    return (
      <div className="case-ui-mockup mockup-search">
        <div className="mockup-search-bar">
          <Search size={14} color="#947044" />
          <span>Search medicines, salts, symptoms...</span>
          <span className="mockup-kbd">⌘K</span>
        </div>

        <div className="mockup-chips-row">
          <span className="mockup-chip active">All Verified</span>
          <span className="mockup-chip">Antibiotics</span>
          <span className="mockup-chip">Chronic Care</span>
          <span className="mockup-chip">Emergency SOS</span>
        </div>

        <div className="mockup-medicine-card">
          <div className="mockup-med-icon">💊</div>
          <div className="mockup-med-details">
            <div className="mockup-med-title-row">
              <h4>Amoxicillin 500mg</h4>
              <span className="mockup-rx-badge">Rx Required</span>
            </div>
            <p className="mockup-med-sub">10 Capsules • Verified Supplier</p>
            <div className="mockup-med-footer">
              <span className="mockup-price">₹142.00</span>
              <button type="button" className="mockup-add-btn">+ Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Path 02: Prescription Upload
  if (index === 1) {
    return (
      <div className="case-ui-mockup mockup-upload">
        <div className="mockup-scanner-frame">
          <div className="mockup-scan-laser" />
          <div className="mockup-scan-target">
            <ScanLine size={24} color="#239C94" />
            <span>AI OCR Medical Scanner</span>
            <small>Detecting prescription lines & dosage...</small>
          </div>
        </div>

        <div className="mockup-detected-list">
          <div className="mockup-detected-header">
            <CheckCircle2 size={13} color="#239C94" />
            <span>2 Medicines Auto-Detected</span>
          </div>
          <div className="mockup-detected-item">
            <span>• Metformin 500mg</span>
            <span>2x daily</span>
          </div>
          <div className="mockup-detected-item">
            <span>• Atorvastatin 10mg</span>
            <span>1x bedtime</span>
          </div>
        </div>
      </div>
    );
  }

  // Path 03: Smart Refills
  return (
    <div className="case-ui-mockup mockup-refill">
      <div className="mockup-refill-header">
        <div className="mockup-refill-icon-wrap">
          <Bell size={18} color="#E4C16B" />
        </div>
        <div>
          <h4>Smart Refill Alert</h4>
          <span className="mockup-refill-meta">Active Medication Routine</span>
        </div>
      </div>

      <div className="mockup-refill-progress-box">
        <div className="mockup-progress-info">
          <span>Metformin 500mg</span>
          <span className="mockup-days-left">4 Days Left</span>
        </div>
        <div className="mockup-progress-track">
          <div className="mockup-progress-bar" style={{ width: '22%' }} />
        </div>
        <small className="mockup-progress-note">8 of 30 tablets remaining • Refill threshold reached</small>
      </div>

      <button type="button" className="mockup-one-tap-refill">
        <span>⚡ 1-Tap Reorder Refill</span>
        <span>₹284.00</span>
      </button>
    </div>
  );
}

/**
 * ============================================================================
 * 3. PROCESS MOCKUPS (Sketches, Wireframes, Hi-Fi Mockups)
 * Crisp architectural vector diagrams.
 * ============================================================================
 */
export function ProcessMockup({ index }) {
  if (index === 0) {
    return (
      <div className="case-process-canvas canvas-sketch">
        <div className="sketch-label">PAPER SKETCH • V1.0</div>
        <div className="sketch-wire-grid">
          <div className="sketch-box header" />
          <div className="sketch-box hero">
            <div className="sketch-circle" />
            <div className="sketch-lines">
              <div className="sketch-line w80" />
              <div className="sketch-line w60" />
            </div>
          </div>
          <div className="sketch-box actions">
            <div className="sketch-btn" />
            <div className="sketch-btn" />
          </div>
        </div>
        <span className="sketch-annotation">✏️ Rapid low-fi validation of user journey junctions</span>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="case-process-canvas canvas-wireframe">
        <div className="wireframe-label">MID-FI WIREFRAME • FIGMA</div>
        <div className="wireframe-screen">
          <div className="wireframe-status-bar" />
          <div className="wireframe-nav" />
          <div className="wireframe-card" />
          <div className="wireframe-grid">
            <div className="wireframe-cell" />
            <div className="wireframe-cell" />
          </div>
        </div>
        <span className="wireframe-annotation">📐 Strict layout hierarchy & accessibility touch targets</span>
      </div>
    );
  }

  return (
    <div className="case-process-canvas canvas-hifi">
      <div className="hifi-label">HI-FIDELITY DESIGN • DESIGN SYSTEM</div>
      <div className="hifi-preview-card">
        <div className="hifi-header">
          <span className="hifi-brand-dot" />
          <span className="hifi-brand-name">Zypha Core</span>
        </div>
        <div className="hifi-content-block">
          <div className="hifi-pill">Verified Pharmacist Review</div>
          <div className="hifi-pill-gold">Under 30 Min Delivery</div>
        </div>
      </div>
      <span className="hifi-annotation">✦ Polished glassmorphism, accessible contrast, and micro-interactions</span>
    </div>
  );
}

/**
 * ============================================================================
 * 4. FINAL DESIGN SCREEN MOCKUPS
 * High-resolution vector interfaces.
 * ============================================================================
 */
export function FinalScreenMockup({ index, type }) {
  if (type === 'emergency') {
    return (
      <div className="case-final-screen-ui screen-emergency-ui">
        <div className="screen-notch" />
        <div className="screen-emergency-banner">
          <AlertTriangle size={18} color="#FF6E6E" />
          <div>
            <h4>Emergency Medical Hub</h4>
            <p>Immediate 24/7 care network</p>
          </div>
        </div>

        <div className="screen-sos-big-btn">
          <span>🚨 SOS MEDICINE COURIER</span>
          <small>Priority Dispatch &lt; 30 Minutes</small>
        </div>

        <div className="screen-emergency-options">
          <div className="screen-opt-card">
            <PhoneCall size={14} color="#80D8FF" />
            <span>Consult Doctor Now</span>
          </div>
          <div className="screen-opt-card">
            <ShieldCheck size={14} color="#B9F6CA" />
            <span>Verified 24/7 Chemists</span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 0) {
    return (
      <div className="case-final-screen-ui screen-home-ui">
        <div className="screen-notch" />
        <div className="screen-home-top">
          <div className="screen-user-badge">
            <div className="screen-user-avatar">P</div>
            <div>
              <small>Welcome back,</small>
              <strong>Priya Sharma</strong>
            </div>
          </div>
          <span className="screen-bell-dot">🔔</span>
        </div>

        <div className="screen-active-banner">
          <Clock size={14} color="#E4C16B" />
          <span>Active Order: Out for delivery (14 mins)</span>
        </div>

        <div className="screen-quick-tiles">
          <div className="screen-tile">
            <ScanLine size={16} color="#239C94" />
            <span>Upload Rx</span>
          </div>
          <div className="screen-tile">
            <Bell size={16} color="#E4C16B" />
            <span>Smart Refill</span>
          </div>
          <div className="screen-tile">
            <AlertTriangle size={16} color="#FF6E6E" />
            <span>SOS Help</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-final-screen-ui screen-track-ui">
      <div className="screen-notch" />
      <div className="screen-track-header">
        <h4>Live Order Tracking</h4>
        <span className="screen-order-id">#ZY-89241</span>
      </div>

      <div className="screen-track-stepper">
        <div className="screen-step completed">
          <div className="step-dot">✓</div>
          <div className="step-info">
            <strong>Prescription Verified</strong>
            <small>By Dr. K. Mehta (Reg. #8912)</small>
          </div>
        </div>
        <div className="screen-step completed">
          <div className="step-dot">✓</div>
          <div className="step-info">
            <strong>Packed in Cold-Chain Box</strong>
            <small>Stored at 4°C with seal</small>
          </div>
        </div>
        <div className="screen-step active">
          <div className="step-dot pulse">🚴</div>
          <div className="step-info">
            <strong>Courier on the way</strong>
            <small>Arriving in 11 minutes (1.4 km)</small>
          </div>
        </div>
      </div>
    </div>
  );
}

