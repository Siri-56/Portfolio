import React from 'react';
import { X, Sliders, Eye, Glasses, UserCheck, RefreshCw } from 'lucide-react';

export default function SettingsModal({
  isOpen,
  onClose,
  name,
  setName,
  showGlasses,
  setShowGlasses,
  sensitivity,
  setSensitivity
}) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(10, 4, 8, 0.75)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '500px',
          borderRadius: '24px',
          padding: '32px',
          background: '#1F0F18',
          border: '1px solid rgba(233, 160, 168, 0.3)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7), 0 0 40px rgba(233, 160, 168, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sliders size={20} color="var(--cherry-rose)" />
            <h3
              className="font-display"
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#FFF5E9',
                margin: 0,
              }}
            >
              Portfolio Customizer
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 245, 233, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              color: '#FFF5E9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Name Selector */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--cherry-rose)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '8px',
            }}
          >
            Display Name
          </label>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
            <button
              onClick={() => setName('Anita Madadi')}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: name === 'Anita Madadi' ? '1px solid var(--cherry-rose)' : '1px solid rgba(255, 245, 233, 0.15)',
                background: name === 'Anita Madadi' ? 'rgba(233, 160, 168, 0.2)' : 'rgba(255, 245, 233, 0.05)',
                color: '#FFF5E9',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Anita Madadi
            </button>
            <button
              onClick={() => setName('Siri')}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: name === 'Siri' ? '1px solid var(--cherry-rose)' : '1px solid rgba(255, 245, 233, 0.15)',
                background: name === 'Siri' ? 'rgba(233, 160, 168, 0.2)' : 'rgba(255, 245, 233, 0.05)',
                color: '#FFF5E9',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Siri
            </button>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Or type custom name..."
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '10px',
              background: 'rgba(255, 245, 233, 0.05)',
              border: '1px solid rgba(255, 245, 233, 0.15)',
              color: '#FFF5E9',
              fontSize: '0.92rem',
              outline: 'none',
            }}
          />
        </div>

        {/* Glasses Toggle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(255, 245, 233, 0.04)',
            border: '1px solid rgba(255, 245, 233, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Glasses size={18} color="var(--blue-soft)" />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFF5E9' }}>
                Stylish Glasses
              </div>
              <div style={{ fontSize: '0.74rem', color: 'rgba(255, 245, 233, 0.55)' }}>
                Render clear frames seen in reference photo
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowGlasses(!showGlasses)}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              border: 'none',
              background: showGlasses ? '#E9A0A8' : 'rgba(255, 245, 233, 0.1)',
              color: showGlasses ? '#1A0C13' : 'rgba(255, 245, 233, 0.7)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {showGlasses ? 'Enabled' : 'Disabled'}
          </button>
        </div>

        {/* Eye Tracking Sensitivity */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--cherry-rose)', textTransform: 'uppercase' }}>
              Eyeball Movement Range
            </span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--gold-warm)' }}>
              {sensitivity.toFixed(1)}x
            </span>
          </div>
          <input
            type="range"
            min="0.5"
            max="1.6"
            step="0.1"
            value={sensitivity}
            onChange={(e) => setSensitivity(parseFloat(e.target.value))}
            style={{
              width: '100%',
              accentColor: 'var(--cherry-rose)',
              cursor: 'pointer',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'rgba(255, 245, 233, 0.45)', marginTop: '4px' }}>
            <span>Subtle</span>
            <span>Balanced (1.0x)</span>
            <span>Dramatic</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="btn-primary"
          onClick={onClose}
          style={{ width: '100%', marginTop: '8px' }}
        >
          <span>Save & Apply</span>
        </button>
      </div>
    </div>
  );
}
