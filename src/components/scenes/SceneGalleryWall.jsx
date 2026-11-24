import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Clock,
} from 'lucide-react';
import AgriMartCaseStudy from '../case-studies/AgriMartCaseStudy';
import ProjectCaseStudyModal from '../case-studies/ProjectCaseStudyModal';
import { caseStudies } from '../../data/caseStudies';
import { smoothScrollTo } from '../../utils/smoothScroll';

/**
 * ============================================================================
 * GALLERY PROJECTS & EXHIBITIONS LIST
 * ============================================================================
 * Order specified by the user:
 * 1. Zypha (AI-Powered Medicine Delivery)
 * 2. AgriMart (Fresh Produce from Local Farmers)
 * 3. The Long Portrait (Bust with Bougainvillea, Books & Armillary Sphere)
 * 4. Sunset Mountain Solitude
 * 5. The Curator's Studio (Bust, Vintage Camera, Books & Film)
 *
 * All frames are cropped tightly to the gold frame (no red wall box, no lamps above).
 * All elements are horizontally scrollable on the crimson wall.
 */
const GALLERY_PROJECTS = [
  {
    id: 'zypha',
    type: 'project',
    projectKey: 'zypha',
    title: 'Zypha',
    subtitle: 'AI-Powered Medicine Delivery',
    category: 'UX/UI Case Study • Featured',
    image: '/frames/frame_zypha.png',
    aspect: 'long',
    year: '2026',
    medium: 'Healthcare System Design • Smart Companion',
    dimensions: 'Interactive UX Case Study',
    curatorNote:
      'A safer, simpler way to manage prescriptions and daily medications. Designed with high-legibility visual hierarchies for caregivers and patients.',
  },
  {
    id: 'agrimart',
    type: 'project',
    projectKey: 'agrimart',
    title: 'AgriMart',
    subtitle: 'Fresh Produce from Local Farmers',
    category: 'UX/UI Case Study • Featured',
    image: '/frames/frame_agrimart.png',
    aspect: 'square',
    year: '2026',
    medium: 'Digital Product Design • Web & Mobile Platform',
    dimensions: 'Interactive UX Case Study',
    curatorNote:
      'A farm-to-customer digital platform connecting local farmers with everyday customers. Features intuitive ordering flows, transparent pricing, and regional accessibility.',
  },
  {
    id: 'long_portrait',
    type: 'art',
    title: 'The Classical Vista',
    subtitle: 'Bust with Bougainvillea, Books & Armillary Sphere',
    category: 'Masterwork Exhibition',
    image: '/frames/frame_classical_vista.png',
    aspect: 'long',
    year: '2026',
    medium: 'Oil & Tempera on Canvas',
    dimensions: '75 × 100 cm',
    curatorNote:
      'A classical bust crowned with vibrant bougainvillea beside vintage books, an armillary sphere, and a Tuscan arched vista at sunset. Artifacts of wisdom, geography, and architecture.',
  },
  {
    id: 'sunset',
    type: 'art',
    title: 'Sunset Mountain Solitude',
    subtitle: 'Golden sun over lavender ridges and cypress lake',
    category: 'Fine Art Collection',
    image: '/frames/frame_sunset.png',
    aspect: 'square',
    year: '2026',
    medium: 'Gouache & Oil on Canvas',
    dimensions: '75 × 75 cm',
    curatorNote:
      'Warm golden light touching mountain contours and serene waters. A reflection on visual cadence, light balance, and tranquil breathing room.',
  },
  {
    id: 'curator_camera',
    type: 'art',
    title: 'The Curator’s Studio',
    subtitle: 'Classical bust, vintage camera, film & arched vista',
    category: 'Fine Art Collection',
    image: '/frames/frame_curator_studio.png',
    aspect: 'square',
    year: '2026',
    medium: 'Oil & Tempera on Archival Linen',
    dimensions: '75 × 75 cm',
    curatorNote:
      'A harmonious intersection of timeless art, analog photography, and architectural storytelling. Capturing the artifacts that inspire human-centered design.',
  },
];

/**
 * Individual Framed Artwork on the Scrollable Wall
 * Cropped perfectly to the gold frame. No labels underneath.
 * Features subtle idle floating tilt and 3D hover perspective tilt.
 */
function ScrollableGalleryFrame({
  project,
  index,
  onSelect,
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Only AgriMart and Zypha are interactive case studies; the rest three are quiet fine art frames
  const isInteractive = project.type === 'project';
  const isLong = project.aspect === 'long';
  const widthStyle = isLong ? 'clamp(112px, 16.5vh, 138px)' : 'clamp(128px, 18.5vh, 156px)';
  const heightStyle = isLong ? 'clamp(146px, 21.5vh, 180px)' : 'clamp(128px, 18.5vh, 156px)';

  // Stagger idle floating animation duration and delay
  const idleDurations = ['5.4s', '6.2s', '5.8s', '6.6s', '5.6s'];
  const idleDelays = ['0s', '0.4s', '0.8s', '1.2s', '0.2s'];
  const idleDuration = idleDurations[index % idleDurations.length];
  const idleDelay = idleDelays[index % idleDelays.length];

  const handleMouseMove = (e) => {
    if (!isInteractive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -y * 10,
      y: x * 10,
      glareX: ((e.clientX - rect.left) / rect.width) * 100,
      glareY: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isInteractive) {
      setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`gallery-portrait-node ${isInteractive && isHovered ? 'is-hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={isInteractive ? () => onSelect(project) : undefined}
      style={{
        flexShrink: 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 clamp(16px, 2vw, 24px)',
        cursor: isInteractive ? 'pointer' : 'default',
        userSelect: 'none',
        perspective: '1000px',
      }}
    >
      {/* Framed Artwork Container (Tightly cropped gold frame) */}
      <div
        className={isInteractive && isHovered ? 'portrait-interactive' : 'portrait-idle-float'}
        style={{
          position: 'relative',
          width: widthStyle,
          height: heightStyle,
          borderRadius: '4px',
          boxShadow: isInteractive && isHovered
            ? '0 24px 48px rgba(18, 4, 8, 0.75), 0 6px 18px rgba(0, 0, 0, 0.55)'
            : '0 14px 32px rgba(22, 5, 10, 0.48), 0 4px 10px rgba(0, 0, 0, 0.38)',
          transform: isInteractive && isHovered
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(18px) scale(1.045)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transition: isInteractive && isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s ease, box-shadow 0.3s ease',
          animationDuration: idleDuration,
          animationDelay: idleDelay,
          willChange: 'transform',
        }}
      >
        {/* The Exact Gold-Framed Artwork Image */}
        <img
          src={project.image}
          alt={project.title}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '4px',
            filter: isInteractive && isHovered ? 'brightness(1.06) contrast(1.02)' : isHovered ? 'brightness(1.03)' : 'brightness(0.98)',
            transition: 'filter 0.25s ease',
          }}
        />

        {/* Dynamic Glass Glare Sheen on Hover (For interactive frames only) */}
        {isInteractive && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: isHovered
                ? `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 70%)`
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 65%)',
              pointerEvents: 'none',
              borderRadius: '4px',
              transition: isHovered ? 'none' : 'background 0.3s ease',
            }}
          />
        )}

        {/* Hover Pill Badge: "Open Case Study" for interactive, "Coming Soon" for empty portraits */}
        <div
          style={{
            position: 'absolute',
            bottom: '-14px',
            left: '50%',
            transform: isHovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(5px)',
            opacity: isHovered ? 1 : 0,
            background: isInteractive ? '#FFE899' : 'rgba(38, 14, 24, 0.95)',
            color: isInteractive ? '#3B1520' : '#E4C16B',
            border: isInteractive ? 'none' : '1px solid rgba(228, 193, 107, 0.45)',
            padding: '4px 13px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.55)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            zIndex: 15,
            backdropFilter: isInteractive ? 'none' : 'blur(6px)',
          }}
        >
          {isInteractive ? (
            <>
              <Sparkles size={11} />
              <span>Open Case Study</span>
            </>
          ) : (
            <>
              <Clock size={11} />
              <span>Coming Soon</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Master SceneConversation Component
 * 
 * - Pristine clean room base in 100% original quality (no torn hands or clipped sleeves).
 * - "Ideas in Frames" scroll info on the left.
 * - Entire row of frames is horizontally scrollable:
 *   1. AgriMart -> 2. Zypha -> 3. The Long Portrait -> 4. Sunset -> 5. Curator's Studio.
 * - Lowered to natural eye level on the crimson wall (top ~ 11.5%).
 */
export default function SceneGalleryWall() {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [isSteppingToWall, setIsSteppingToWall] = useState(false);

  // Lock background scrolling whenever any project modal is open
  useEffect(() => {
    if (activeProject) {
      const origBody = document.body.style.overflow;
      const origHtml = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = origBody;
        document.documentElement.style.overflow = origHtml;
      };
    }
  }, [activeProject]);

  // Responsive 16:9 Image Aspect-Ratio Overlay Bounds
  const [aspectBounds, setAspectBounds] = useState({
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  });

  const wallScrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Keep responsive bounds locked 1:1 to the 1024x576 image
  useEffect(() => {
    const updateBounds = () => {
      if (!containerRef.current) return;
      const { clientWidth: W, clientHeight: H } = containerRef.current;
      if (!W || !H) return;

      const imgAspect = 1024 / 576;
      const containerAspect = W / H;

      let renderedW, renderedH, left, top;
      if (containerAspect > imgAspect) {
        renderedW = W;
        renderedH = W / imgAspect;
        left = 0;
        // Bias top upward (12%) to preserve full crimson wall headroom below navbar
        top = Math.max(H - renderedH, (H - renderedH) * 0.12);
      } else {
        renderedH = H;
        renderedW = H * imgAspect;
        top = 0;
        left = (W - renderedW) / 2;
      }

      setAspectBounds({
        left: `${left}px`,
        top: `${top}px`,
        width: `${renderedW}px`,
        height: `${renderedH}px`,
      });
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  const checkScrollBounds = useCallback(() => {
    if (!wallScrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = wallScrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = wallScrollRef.current;
    if (!el) return;
    checkScrollBounds();
    el.addEventListener('scroll', checkScrollBounds, { passive: true });
    return () => el.removeEventListener('scroll', checkScrollBounds);
  }, [checkScrollBounds]);

  const handleWallWheel = (e) => {
    if (!wallScrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      wallScrollRef.current.scrollLeft += e.deltaY * 1.35;
    }
  };

  const handleMouseDown = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - wallScrollRef.current.offsetLeft;
    scrollLeftRef.current = wallScrollRef.current.scrollLeft;
    wallScrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !wallScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - wallScrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.35;
    if (Math.abs(walk) > 6) {
      hasDraggedRef.current = true;
    }
    wallScrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    if (wallScrollRef.current) {
      wallScrollRef.current.style.cursor = 'grab';
    }
    // Briefly delay resetting hasDraggedRef so onClick ignores the mouseup
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 80);
  };

  const scrollWallBy = (amount) => {
    if (!wallScrollRef.current) return;
    wallScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleSelectProject = (item) => {
    if (hasDraggedRef.current) return;
    if (item.projectKey === 'agrimart') {
      setActiveProject('agrimart');
    } else if (item.projectKey === 'zypha') {
      setActiveProject(caseStudies.zypha);
    }
  };

  const handleScrollToNext = () => {
    if (isSteppingToWall) return;
    setIsSteppingToWall(true);
    const el = document.getElementById('about') || document.getElementById('gallery-wall');
    if (el) {
      smoothScrollTo(el, 950, () => {
        setTimeout(() => setIsSteppingToWall(false), 300);
      });
    } else {
      setIsSteppingToWall(false);
    }
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#6A121E', // Foundation burgundy
      }}
    >
      {/* =======================================================================
          CRISP ORIGINAL BASE IMAGE (100% Original Quality, No Torn Hands)
          Contains the people, flooring, trees, statue, archway, and clean wall.
          ======================================================================= */}
      <img
        src="/scenes/gallery_wall_room.jpg"
        alt="Museum Gallery Exhibition"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 12%',
          zIndex: 1,
          pointerEvents: 'none',
          imageRendering: '-webkit-optimize-contrast',
        }}
      />

      {/* =======================================================================
          ASPECT-RATIO LOCKED WALL OVERLAY
          Positioned comfortably above character eye-level on crimson wall
          Extends across the full wall from left corner to right archway
          ======================================================================= */}
      <div
        style={{
          position: 'absolute',
          left: aspectBounds.left,
          top: aspectBounds.top,
          width: aspectBounds.width,
          height: aspectBounds.height,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        {/* Wall Scrollable Track (y: 7.8% to 36.6% - completely clear of man's head) */}
        <div
          style={{
            position: 'absolute',
            top: '7.8%',
            left: '2.85%', // Exact corner seam of the hanging crimson wall (does not spill onto side wall)
            right: '6.8%', // Extends right to the Roman archway pillar
            height: '28.8%',
            pointerEvents: 'auto',
            overflow: 'hidden',
          }}
        >
          <div
            ref={wallScrollRef}
            onWheel={handleWallWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: 'grab',
              paddingLeft: 'clamp(28px, 3.5vw, 48px)',
              paddingRight: 'clamp(36px, 4.5vw, 60px)',
              scrollBehavior: 'smooth',
            }}
            className="wall-scroll-track"
          >
            {/* Introductory Exhibition Wall Text Inscription (Scroll Info on the Left) */}
            <div
              style={{
                flexShrink: 0,
                width: 'clamp(210px, 22vw, 255px)',
                marginRight: 'clamp(20px, 2.8vw, 36px)',
                padding: '8px 18px',
                borderLeft: '2.5px solid #D8AE58',
                userSelect: 'none',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  color: '#FFE194',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                <span>The Gallery</span>
              </div>
              <h2
                className="font-serif"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.3rem, 1.8vw, 1.6rem)',
                  fontWeight: 800,
                  color: '#FFF5E9',
                  lineHeight: 1.15,
                  margin: '0 0 6px 0',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.65)',
                  letterSpacing: '-0.01em',
                }}
              >
                Ideas in Frames
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.74rem, 1vw, 0.82rem)',
                  color: 'rgba(255, 245, 233, 0.92)',
                  lineHeight: 1.45,
                  margin: 0,
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)',
                  fontWeight: 400,
                }}
              >
                Scroll along the crimson wall. Every piece tilts in space — click any work to step inside.
              </p>
            </div>

            {/* Render All Project Portraits in the Exact Order Requested */}
            {GALLERY_PROJECTS.map((item, idx) => (
              <ScrollableGalleryFrame
                key={item.id}
                project={item}
                index={idx}
                onSelect={handleSelectProject}
              />
            ))}
          </div>

          {/* Floating Wall Scroll Arrow Left */}
          {canScrollLeft && (
            <button
              onClick={() => scrollWallBy(-360)}
              aria-label="Scroll projects left"
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 245, 233, 0.92)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                color: '#542C39',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
                zIndex: 35,
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(-50%) scale(1)')}
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Floating Wall Scroll Arrow Right */}
          {canScrollRight && (
            <button
              onClick={() => scrollWallBy(360)}
              aria-label="Scroll projects right"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 245, 233, 0.92)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                color: '#542C39',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
                zIndex: 35,
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(-50%) scale(1)')}
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      </div>

      {/* =======================================================================
          BOTTOM FLOATING SCROLL INVITATION BUTTON
          ======================================================================= */}
      <div
        style={{
          position: 'absolute',
          bottom: '22px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <button
          onClick={handleScrollToNext}
          className={`scroll-invitation-crimson ${isSteppingToWall ? 'is-stepping' : ''}`}
        >
          <span>{isSteppingToWall ? 'Walking to Quiet Wall...' : 'Quiet Gallery Wall'}</span>
          <ChevronDown size={15} className={`chevron-icon ${isSteppingToWall ? 'chevron-stepping' : ''}`} />
        </button>
      </div>

      {/* Atmospheric Transition Wash when walking to Quiet Gallery Wall */}
      <div className={`gallery-transition-wash ${isSteppingToWall ? 'active' : ''}`} aria-hidden="true" />

      {/* =======================================================================
          CASE STUDY MODALS (AgriMart & Zypha)
          ======================================================================= */}
      {activeProject === 'agrimart' && (
        <AgriMartCaseStudy
          onClose={() => setActiveProject(null)}
          images={{
            hero: "/case-studies/agrimart/hero_devices.png",
            mobile: "/case-studies/agrimart/mobile_screens.png",
            website: "/case-studies/agrimart/web_laptop.png",
          }}
        />
      )}
      <ProjectCaseStudyModal
        project={typeof activeProject === 'object' ? activeProject : null}
        onClose={() => setActiveProject(null)}
      />

      {/* Embedded CSS for Transitions, Idle Float & Scrollbar Hiding */}
      <style>{`
        /* Smooth Invitation Button on Crimson Wall */
        .scroll-invitation-crimson {
          background: rgba(255, 245, 233, 0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          border-radius: 9999px;
          padding: 9px 24px;
          color: #542C39;
          font-weight: 700;
          font-size: 0.84rem;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(52, 25, 30, 0.22);
          outline: none;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, background 0.3s ease;
        }

        .scroll-invitation-crimson:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(52, 25, 30, 0.3), 0 0 20px rgba(228, 193, 107, 0.35);
        }

        .scroll-invitation-crimson:active,
        .scroll-invitation-crimson.is-stepping {
          transform: translateY(2px) scale(0.97);
          background: rgba(255, 245, 233, 0.95);
          box-shadow: 0 4px 16px rgba(52, 25, 30, 0.3), 0 0 30px rgba(228, 193, 107, 0.7);
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }

        .chevron-stepping {
          animation: chevron-pulse 0.65s infinite alternate ease-in-out;
        }

        @keyframes chevron-pulse {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(4px);
          }
        }

        /* Atmospheric Transition Wash between rooms */
        .gallery-transition-wash {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(64, 75, 64, 0) 30%, rgba(20, 10, 15, 0.38) 100%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.85s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 28;
        }

        .gallery-transition-wash.active {
          opacity: 1;
        }

        /* Continuous Subtle Idle Float & Tilt for Paintings */
        @keyframes frame-idle-tilt {
          0%, 100% {
            transform: perspective(1000px) rotateY(-1.6deg) rotateX(1.2deg) translateY(0px);
          }
          50% {
            transform: perspective(1000px) rotateY(1.6deg) rotateX(-1.2deg) translateY(-4px);
          }
        }

        .portrait-idle-float {
          animation-name: frame-idle-tilt;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        /* Hide horizontal scrollbar */
        .wall-scroll-track::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .portrait-idle-float {
            animation: none !important;
          }
          .scroll-invitation-crimson {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
