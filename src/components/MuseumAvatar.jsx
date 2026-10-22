import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * MuseumAvatar
 * The curator cartoon avatar standing in the museum entrance.
 * Features:
 * - Eyes follow the visitor's cursor across the screen
 * - Natural autonomous blinking + click to blink
 * - Rendered crisp with high-DPI canvas
 */
export default function MuseumAvatar({ className = '', onAvatarClick }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const scleraImgRef = useRef(null);
  const faceImgRef = useRef(null);
  const leftIrisRef = useRef(null);
  const rightIrisRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  // Eye tracking state in (682 x 1024) coordinate space
  const eyeState = useRef({
    targetDx: 0,
    targetDy: 0,
    currentDx: 0,
    currentDy: 0,
    blinkProgress: 0,
    isBlinking: false,
    blinkDirection: 1,
    lastBlinkTime: Date.now(),
  });

  const LEFT_EYE = { cx: 320, cy: 218, r: 9, maxDx: 4.5, maxDy: 3 };
  const RIGHT_EYE = { cx: 358, cy: 225, r: 8.5, maxDx: 4.5, maxDy: 3 };

  // Manual trigger blink
  const triggerBlink = useCallback(() => {
    if (eyeState.current.isBlinking) return;
    eyeState.current.isBlinking = true;
    eyeState.current.blinkProgress = 0;
    eyeState.current.blinkDirection = 1;
    eyeState.current.lastBlinkTime = Date.now();
    if (onAvatarClick) onAvatarClick();
  }, [onAvatarClick]);

  // Load all 4 layers
  useEffect(() => {
    let isMounted = true;
    const sclera = new Image();
    const face = new Image();
    const leftIris = new Image();
    const rightIris = new Image();

    let count = 0;
    const checkAll = () => {
      count++;
      if (count === 4 && isMounted) {
        scleraImgRef.current = sclera;
        faceImgRef.current = face;
        leftIrisRef.current = leftIris;
        rightIrisRef.current = rightIris;
        setLoaded(true);
      }
    };

    sclera.onload = checkAll;
    face.onload = checkAll;
    leftIris.onload = checkAll;
    rightIris.onload = checkAll;

    sclera.src = '/standing_sclera.png';
    face.src = '/standing_face_cutout.png';
    leftIris.src = '/standing_left_iris.png';
    rightIris.src = '/standing_right_iris.png';

    return () => {
      isMounted = false;
    };
  }, []);

  // Cursor tracking
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!containerRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const rect = containerRef.current.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      // Screen position of avatar's eyes
      const eyeScreenX = rect.left + rect.width * (339 / 682);
      const eyeScreenY = rect.top + rect.height * (221 / 1024);

      const dx = clientX - eyeScreenX;
      const dy = clientY - eyeScreenY;
      const dist = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);

      // Smooth non-linear curve
      const factor = Math.min(1, dist / 320);
      eyeState.current.targetDx = Math.cos(angle) * 3.8 * factor;
      eyeState.current.targetDy = Math.sin(angle) * 2.6 * factor;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  // Main 60fps render loop
  useEffect(() => {
    if (!loaded) return;
    let animId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    const render = () => {
      const state = eyeState.current;

      // Lerp pupil position
      state.currentDx += (state.targetDx - state.currentDx) * 0.14;
      state.currentDy += (state.targetDy - state.currentDy) * 0.14;

      // Autonomous natural blink (every 4 to 6.5s)
      const now = Date.now();
      if (!state.isBlinking && now - state.lastBlinkTime > 4200 + Math.random() * 2500) {
        state.isBlinking = true;
        state.blinkProgress = 0;
        state.blinkDirection = 1;
        state.lastBlinkTime = now;
      }

      // Blink animation stepper
      if (state.isBlinking) {
        state.blinkProgress += 0.16 * state.blinkDirection;
        if (state.blinkProgress >= 1) {
          state.blinkProgress = 1;
          state.blinkDirection = -1;
        } else if (state.blinkProgress <= 0) {
          state.blinkProgress = 0;
          state.isBlinking = false;
        }
      }

      // Clear
      ctx.clearRect(0, 0, 682, 1024);

      // Layer 1: Sclera
      if (scleraImgRef.current) {
        ctx.drawImage(scleraImgRef.current, 0, 0, 682, 1024);
      }

      // Layer 2: Left Iris
      if (leftIrisRef.current) {
        const iw = leftIrisRef.current.width;
        const ih = leftIrisRef.current.height;
        const xL = LEFT_EYE.cx + state.currentDx - iw / 2;
        const yL = LEFT_EYE.cy + state.currentDy - ih / 2;
        ctx.drawImage(leftIrisRef.current, xL, yL, iw, ih);
      }

      // Layer 3: Right Iris
      if (rightIrisRef.current) {
        const iw = rightIrisRef.current.width;
        const ih = rightIrisRef.current.height;
        const xR = RIGHT_EYE.cx + state.currentDx - iw / 2;
        const yR = RIGHT_EYE.cy + state.currentDy - ih / 2;
        ctx.drawImage(rightIrisRef.current, xR, yR, iw, ih);
      }

      // Layer 4: Face Cutout
      if (faceImgRef.current) {
        ctx.drawImage(faceImgRef.current, 0, 0, 682, 1024);
      }

      // Layer 5: Eyelid blink overlay
      if (state.blinkProgress > 0.05) {
        const p = state.blinkProgress;
        ctx.save();
        ctx.fillStyle = '#C68A65';

        // Left eye blink lid
        const topYL = 212 + (225 - 212) * p;
        ctx.beginPath();
        ctx.moveTo(308, 220);
        ctx.quadraticCurveTo(320, topYL, 333, 220);
        ctx.quadraticCurveTo(320, 225, 308, 220);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#221511';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(308, 220);
        ctx.quadraticCurveTo(320, topYL + 0.5, 333, 220);
        ctx.stroke();

        // Right eye blink lid
        const topYR = 219 + (231 - 219) * p;
        ctx.beginPath();
        ctx.moveTo(349, 226);
        ctx.quadraticCurveTo(360, topYR, 370, 226);
        ctx.quadraticCurveTo(360, 231, 349, 226);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#221511';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(349, 226);
        ctx.quadraticCurveTo(360, topYR + 0.5, 370, 226);
        ctx.stroke();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none cursor-pointer ${className}`}
      onClick={triggerBlink}
      title="Click me to blink!"
    >
      {/* Fallback image */}
      {!loaded && (
        <img
          src="/curator_avatar_standing.png"
          alt="Curator Avatar"
          className="w-full h-auto object-contain block drop-shadow-xl"
        />
      )}

      {/* Main Canvas */}
      <canvas
        ref={canvasRef}
        width={682}
        height={1024}
        className={`w-full h-auto object-contain block drop-shadow-2xl transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}
      />
    </div>
  );
}
