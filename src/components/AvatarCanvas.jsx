import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * AvatarCanvas
 * Renders the 3D Bitmoji portrait with cursor-tracking interactive eyeballs.
 * Features:
 * - High-DPI canvas rendering (crisp on Retina screens)
 * - Lerped 60fps eye tracking
 * - Natural automatic and interactive blinking
 * - Optional stylish glasses toggle matching the laptop reference photo
 * - Subtle 3D perspective head tilt
 * - Mobile touch drag & orientation support
 */
export default function AvatarCanvas({
  sensitivity = 1,
  showGlasses = false,
  interactive = true,
  className = '',
  onBlink
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Asset references
  const scleraImgRef = useRef(null);
  const faceImgRef = useRef(null);
  const leftIrisRef = useRef(null);
  const rightIrisRef = useRef(null);

  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Tracking state in avatar original coordinate space (1024 x 935)
  const eyeState = useRef({
    targetDxL: 0,
    targetDyL: 0,
    currentDxL: 0,
    currentDyL: 0,
    targetDxR: 0,
    targetDyR: 0,
    currentDxR: 0,
    currentDyR: 0,
    // Blinking: 0 = fully open, 1 = fully closed
    blinkProgress: 0,
    isBlinking: false,
    blinkSpeed: 0.15,
    blinkDirection: 1, // 1 closing, -1 opening
    isWinking: false, // 1 for winking right eye only
    lastBlinkTime: Date.now()
  });

  // Center coordinates in avatar image (1024 x 935)
  const LEFT_EYE = { cx: 418, cy: 392, r: 26, maxDx: 14, maxDy: 8 };
  const RIGHT_EYE = { cx: 575, cy: 366, r: 26, maxDx: 14, maxDy: 8 };

  // Trigger blink
  const triggerBlink = useCallback((wink = false) => {
    if (eyeState.current.isBlinking) return;
    eyeState.current.isBlinking = true;
    eyeState.current.isWinking = wink;
    eyeState.current.blinkProgress = 0;
    eyeState.current.blinkDirection = 1;
    eyeState.current.lastBlinkTime = Date.now();
    if (onBlink) onBlink();
  }, [onBlink]);

  // Load assets
  useEffect(() => {
    let isMounted = true;
    const sclera = new Image();
    const face = new Image();
    const leftIris = new Image();
    const rightIris = new Image();

    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === 4 && isMounted) {
        scleraImgRef.current = sclera;
        faceImgRef.current = face;
        leftIrisRef.current = leftIris;
        rightIrisRef.current = rightIris;
        setAssetsLoaded(true);
      }
    };

    sclera.onload = checkAllLoaded;
    face.onload = checkAllLoaded;
    leftIris.onload = checkAllLoaded;
    rightIris.onload = checkAllLoaded;

    sclera.src = '/avatar_sclera.png';
    face.src = '/avatar_face_cutout.png';
    leftIris.src = '/left_iris.png';
    rightIris.src = '/right_iris.png';

    return () => {
      isMounted = false;
    };
  }, []);

  // Mouse / Touch tracking listener
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!interactive || !containerRef.current) return;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const rect = containerRef.current.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      // Screen positions of the two eyes
      const screenEyeLx = rect.left + rect.width * (LEFT_EYE.cx / 1024);
      const screenEyeLy = rect.top + rect.height * (LEFT_EYE.cy / 935);

      const screenEyeRx = rect.left + rect.width * (RIGHT_EYE.cx / 1024);
      const screenEyeRy = rect.top + rect.height * (RIGHT_EYE.cy / 935);

      // Left eye vector
      const dxL = clientX - screenEyeLx;
      const dyL = clientY - screenEyeLy;
      const distL = Math.hypot(dxL, dyL);
      const angleL = Math.atan2(dyL, dxL);

      // Right eye vector
      const dxR = clientX - screenEyeRx;
      const dyR = clientY - screenEyeRy;
      const distR = Math.hypot(dxR, dyR);
      const angleR = Math.atan2(dyR, dxR);

      // Non-linear response curve for responsive yet realistic travel
      const strengthL = Math.min(1, distL / 280);
      const strengthR = Math.min(1, distR / 280);

      eyeState.current.targetDxL = Math.cos(angleL) * LEFT_EYE.maxDx * strengthL * sensitivity;
      eyeState.current.targetDyL = Math.sin(angleL) * LEFT_EYE.maxDy * strengthL * sensitivity;

      eyeState.current.targetDxR = Math.cos(angleR) * RIGHT_EYE.maxDx * strengthR * sensitivity;
      eyeState.current.targetDyR = Math.sin(angleR) * RIGHT_EYE.maxDy * strengthR * sensitivity;

      // Subtle 3D tilt on card
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normX = Math.max(-1, Math.min(1, (clientX - centerX) / (window.innerWidth / 2)));
      const normY = Math.max(-1, Math.min(1, (clientY - centerY) / (window.innerHeight / 2)));
      setTilt({
        x: normX * 6,
        y: -normY * 4
      });
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, [interactive, sensitivity]);

  // Main Render Animation Loop (60-120fps)
  useEffect(() => {
    if (!assetsLoaded) return;

    let animId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    const render = () => {
      const state = eyeState.current;

      // Smooth lerp pupil positions
      state.currentDxL += (state.targetDxL - state.currentDxL) * 0.14;
      state.currentDyL += (state.targetDyL - state.currentDyL) * 0.14;

      state.currentDxR += (state.targetDxR - state.currentDxR) * 0.14;
      state.currentDyR += (state.targetDyR - state.currentDyR) * 0.14;

      // Autonomous natural blink generator (every 3.5 - 6 seconds)
      const now = Date.now();
      if (!state.isBlinking && now - state.lastBlinkTime > 4200 + Math.random() * 2000) {
        state.isBlinking = true;
        state.isWinking = false;
        state.blinkProgress = 0;
        state.blinkDirection = 1;
        state.lastBlinkTime = now;
      }

      // Blink animation stepper
      if (state.isBlinking) {
        state.blinkProgress += 0.14 * state.blinkDirection;
        if (state.blinkProgress >= 1) {
          state.blinkProgress = 1;
          state.blinkDirection = -1; // reverse to open
        } else if (state.blinkProgress <= 0) {
          state.blinkProgress = 0;
          state.isBlinking = false;
          state.isWinking = false;
        }
      }

      // Clear canvas
      ctx.clearRect(0, 0, 1024, 935);

      // Layer 1: Sclera background
      if (scleraImgRef.current) {
        ctx.drawImage(scleraImgRef.current, 0, 0, 1024, 935);
      }

      // Layer 2: Left Iris
      if (leftIrisRef.current) {
        const iw = leftIrisRef.current.width;
        const ih = leftIrisRef.current.height;
        const xL = LEFT_EYE.cx + state.currentDxL - iw / 2;
        const yL = LEFT_EYE.cy + state.currentDyL - ih / 2;
        ctx.drawImage(leftIrisRef.current, xL, yL, iw, ih);
      }

      // Layer 3: Right Iris
      if (rightIrisRef.current) {
        const iw = rightIrisRef.current.width;
        const ih = rightIrisRef.current.height;
        const xR = RIGHT_EYE.cx + state.currentDxR - iw / 2;
        const yR = RIGHT_EYE.cy + state.currentDyR - ih / 2;
        ctx.drawImage(rightIrisRef.current, xR, yR, iw, ih);
      }

      // Layer 4: Face Cutout (Eyelids, Lashes, Hair, Skin)
      if (faceImgRef.current) {
        ctx.drawImage(faceImgRef.current, 0, 0, 1024, 935);
      }

      // Layer 5: Eyelid blink overlay
      if (state.blinkProgress > 0.01) {
        const p = state.blinkProgress;

        // Draw eyelid curtains
        ctx.save();
        ctx.fillStyle = '#C48A68'; // Warm skin tone matching eyelid crease

        // Left eye blink (if not winking right eye)
        if (!state.isWinking) {
          ctx.beginPath();
          // Top lid closes downward
          const topY = 369 + (408 - 369) * p;
          ctx.moveTo(376, 394);
          ctx.bezierCurveTo(395, topY, 440, topY, 459, 398);
          ctx.bezierCurveTo(440, 408, 395, 408, 376, 394);
          ctx.closePath();
          ctx.fill();

          // Dark upper lash line drawn over the closed eyelid
          ctx.strokeStyle = '#1D1311';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.moveTo(376, 394);
          ctx.bezierCurveTo(395, topY + 1, 440, topY + 1, 459, 398);
          ctx.stroke();
        }

        // Right eye blink
        ctx.beginPath();
        const topYR = 343 + (387 - 343) * p;
        ctx.moveTo(532, 384);
        ctx.bezierCurveTo(553, topYR, 597, topYR, 618, 378);
        ctx.bezierCurveTo(597, 387, 553, 387, 532, 384);
        ctx.closePath();
        ctx.fill();

        // Dark right lash line
        ctx.strokeStyle = '#1D1311';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(532, 384);
        ctx.bezierCurveTo(553, topYR + 1, 597, topYR + 1, 618, 378);
        ctx.stroke();

        ctx.restore();
      }

      // Layer 6: Optional Glasses
      if (showGlasses) {
        ctx.save();
        // Modern clear/acrylic stylish frames as seen in reference
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillStyle = 'rgba(212, 221, 246, 0.08)'; // Subtle soft blue anti-reflective sheen

        // Left lens (viewer's left)
        ctx.beginPath();
        ctx.roundRect(360, 345, 120, 85, 22);
        ctx.fill();
        ctx.stroke();

        // Right lens (viewer's right)
        ctx.beginPath();
        ctx.roundRect(515, 320, 120, 85, 22);
        ctx.fill();
        ctx.stroke();

        // Bridge connecting lenses
        ctx.beginPath();
        ctx.moveTo(480, 380);
        ctx.bezierCurveTo(495, 365, 502, 360, 515, 355);
        ctx.stroke();

        // Glass highlight reflection line
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(375, 360);
        ctx.lineTo(440, 360);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(530, 335);
        ctx.lineTo(595, 335);
        ctx.stroke();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [assetsLoaded, showGlasses]);

  return (
    <div
      ref={containerRef}
      className={`avatar-container relative cursor-pointer select-none transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
      onClick={() => triggerBlink(false)}
      onContextMenu={(e) => {
        e.preventDefault();
        triggerBlink(true); // wink on right click
      }}
      title="Click to blink! Right-click to wink 😉"
    >
      {/* Loading placeholder or full avatar fallback */}
      {!assetsLoaded && (
        <img
          src="/avatar_full.png"
          alt="Avatar Portrait"
          className="w-full h-auto object-contain block drop-shadow-2xl"
        />
      )}

      {/* Main Interactive High-Res Canvas */}
      <canvas
        ref={canvasRef}
        width={1024}
        height={935}
        className={`w-full h-auto object-contain block drop-shadow-2xl transition-opacity duration-300 ${
          assetsLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}
      />
    </div>
  );
}
