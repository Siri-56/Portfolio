/**
 * Smooth cinematic scroll with cubic-bezier easing.
 * Eliminates abrupt browser jumps and provides a luxurious museum gliding feel.
 *
 * @param {HTMLElement | string | number} target - Element, selector, or Y position in pixels
 * @param {number} duration - Scroll duration in ms (default: 950ms)
 * @param {Function} [onComplete] - Callback executed when scroll finishes
 */
export function smoothScrollTo(target, duration = 950, onComplete) {
  let targetY = 0;
  if (typeof target === 'number') {
    targetY = target;
  } else if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (!el) return;
    targetY = el.getBoundingClientRect().top + window.pageYOffset;
  } else if (target && target.getBoundingClientRect) {
    targetY = target.getBoundingClientRect().top + window.pageYOffset;
  } else {
    return;
  }

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    if (onComplete) onComplete();
    return;
  }

  // Smooth cubic-bezier easeInOut curve
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Temporarily disable CSS scroll-behavior: smooth to avoid conflicting interpolation
  const originalScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';

  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, Math.round(startY + distance * ease));

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
      if (onComplete) onComplete();
    }
  }

  window.requestAnimationFrame(step);
}
