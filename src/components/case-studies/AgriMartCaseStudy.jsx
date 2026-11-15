import React from "react";
import { createPortal } from "react-dom";
import {
  Sprout,
  Users,
  Search,
  Eye,
  ShoppingBasket,
  Store,
  Leaf,
  ArrowUpRight,
  ChartNoAxesColumn,
  Route,
  PencilRuler,
  Smartphone,
  Monitor,
  CheckCircle2,
  Target,
  MapPin,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function AgriMartCaseStudy({
  onClose,
  images = {},
  mobileFigmaUrl = "https://www.figma.com/design/P0TrKH1ysm9mk5LahpdpEx/MAD-Agrimart?node-id=0-1&t=1rYLY3QHEKRDtdGj-1",
  websiteFigmaUrl = "https://www.figma.com/design/a6QbgGpuLpLuc9qxljDSk0/Agrimart?node-id=0-1&t=mny5BvRjHK2RVYUi-1",
}) {
  React.useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const stats = [
    {
      value: "92.5%",
      color: "#48bb78",
      title: "Value source transparency",
      detail:
        "Considered knowing which farm their produce came from their #1 purchasing factor.",
    },
    {
      value: "88.9%",
      color: "#ecc94b",
      title: "Interest in farmer visibility",
      detail:
        "Wanted to see the farmer's profile, harvest date, and regional origin behind their order.",
    },
    {
      value: "76.4%",
      color: "#f56565",
      title: "Direct farmer support",
      detail:
        "Willing to switch entirely from conventional supermarkets to support local farm families.",
    },
  ];

  const personas = [
    {
      name: "Ramesh, 48",
      role: "Organic Vegetable Farmer",
      location: "Mysore, Karnataka",
      avatar: "/personas/persona_ramesh.png",
      tag: "Local Producer",
      tagColor: "#38a169",
      quote: "Middlemen take up to 40% margin. Reaching city buyers directly guarantees fair earnings and lets us harvest on demand.",
      traits: ["Smallholder Farm", "Direct Pricing", "Zero Middlemen"],
    },
    {
      name: "Priya, 34",
      role: "Urban Homemaker & Mother",
      location: "Indiranagar, Bangalore",
      avatar: "/personas/persona_priya.png",
      tag: "Health-Conscious Buyer",
      tagColor: "#e5533d",
      quote: "I want to know the exact farm my spinach and carrots came from, verified organic without chemical residues.",
      traits: ["Source Verification", "Fresh Morning Delivery", "Family Nutrition"],
    },
    {
      name: "Meera, 29",
      role: "Product Lead & Daily Shopper",
      location: "Koramangala, Bangalore",
      avatar: "/personas/persona_meera.png",
      tag: "Digital Convenience",
      tagColor: "#319795",
      quote: "I need quick, transparent reorders of weekly essentials like farm-fresh milk, eggs, and seasonal fruits.",
      traits: ["Instant Basket", "Origin Transparency", "Smart Schedules"],
    },
    {
      name: "Aarav, 24",
      role: "Sustainable Living Advocate",
      location: "HSR Layout, Bangalore",
      avatar: "/personas/persona_aarav.png",
      tag: "Community Supporter",
      tagColor: "#d69e2e",
      quote: "Knowing that 85% of what I pay goes straight to the farmer creates real community impact.",
      traits: ["Fair Trade", "Low Carbon Footprint", "Seasonal Eating"],
    },
  ];

  const researchMethods = [
    {
      number: "01",
      title: "Competitor analysis",
      text: "Compared existing platforms to understand their features, strengths and gaps.",
      icon: Search,
    },
    {
      number: "02",
      title: "In-depth interviews",
      text: "Explored people's experiences, expectations and difficulties when buying produce.",
      icon: Users,
    },
    {
      number: "03",
      title: "User surveys",
      text: "Collected responses to understand shopping preferences and customer priorities.",
      icon: ChartNoAxesColumn,
    },
    {
      number: "04",
      title: "User personas",
      text: "Organised research observations into representative user profiles.",
      icon: Eye,
    },
  ];

  const features = [
    {
      icon: ShoppingBasket,
      accentColor: "#48bb78",
      title: "Browse fresh produce",
      text: "Explore regional fruits, vegetables, and staples through a clean, harvest-first shopping catalog.",
    },
    {
      icon: Sprout,
      accentColor: "#ecc94b",
      title: "Discover local farmers",
      text: "View verified profiles of nearby farmers, their cultivation practices, and harvest calendars.",
    },
    {
      icon: Eye,
      accentColor: "#38b2ac",
      title: "Know the source",
      text: "Scan QR traceability tags to view exact farm geolocation, soil certifications, and packing times.",
    },
    {
      icon: Store,
      accentColor: "#ed8936",
      title: "Direct farmer access",
      text: "Support fair compensation by cutting out exploitative middlemen and multi-tier wholesale markups.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Paper sketches",
      text: "Exploring layouts, farm discovery navigation, and transparent checkout journeys.",
      image: images.sketches,
      fallback: "Early layout explorations",
    },
    {
      number: "02",
      title: "Wireframes",
      text: "Testing structure, thumb reach zones, and accessible content hierarchy across screens.",
      image: images.wireframes,
      fallback: "Wireframe explorations",
    },
    {
      number: "03",
      title: "Design system & tokens",
      text: "Building consistent typography, harvest color foundations, and interactive components.",
      image: images.finalScreens,
      fallback: "Final interface designs",
    },
  ];

  const designScreens = [
    {
      title: "Mobile experience",
      text: "A shopping experience designed around browsing produce and discovering local farmers.",
      image: images.mobile,
      icon: Smartphone,
    },
    {
      title: "Website experience",
      text: "A web experience introducing the platform and connecting customers with local produce.",
      image: images.website,
      icon: Monitor,
    },
  ];

  const SectionLabel = ({ number, children }) => (
    <div className="ag-section-label">
      <span>{number}</span>
      {children}
    </div>
  );

  const ImagePanel = ({ src, alt, className = "" }) => (
    <div className={`ag-image-panel ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="ag-image-fallback">
          <Sprout size={28} />
          <span>{alt}</span>
          <small>Add your image through the images prop</small>
        </div>
      )}
    </div>
  );

  const ProcessMockupCard = ({ step }) => {
    if (step.image) {
      return <ImagePanel src={step.image} alt={step.fallback} />;
    }

    if (step.number === "01") {
      return (
        <div className="ag-process-canvas ag-canvas-sketch">
          <div className="ag-sketch-tag">PAPER SKETCH • V1.0</div>
          <div className="ag-sketch-flow">
            <div className="ag-sketch-node">
              <span>🌾 Farm Hub</span>
            </div>
            <div className="ag-sketch-arrow">→</div>
            <div className="ag-sketch-node">
              <span>Farmer Card</span>
            </div>
            <div className="ag-sketch-arrow">→</div>
            <div className="ag-sketch-node highlight">
              <span>Direct Cart</span>
            </div>
          </div>
          <div className="ag-sketch-wire">
            <div className="ag-sketch-bar" style={{ width: "70%" }} />
            <div className="ag-sketch-bar" style={{ width: "45%" }} />
            <div className="ag-sketch-boxes">
              <div className="ag-sketch-box" />
              <div className="ag-sketch-box" />
              <div className="ag-sketch-box" />
            </div>
          </div>
          <span className="ag-sketch-annotation">✏️ Rapid low-fi validation of farm origin tags & direct checkout</span>
        </div>
      );
    }

    if (step.number === "02") {
      return (
        <div className="ag-process-canvas ag-canvas-wireframe">
          <div className="ag-sketch-tag">MID-FI WIREFRAME • FIGMA</div>
          <div className="ag-wire-card">
            <div className="ag-wire-header">
              <div className="ag-wire-avatar" />
              <div className="ag-wire-lines">
                <div className="ag-wire-line w60" />
                <div className="ag-wire-line w40" />
              </div>
            </div>
            <div className="ag-wire-grid">
              <div className="ag-wire-item" />
              <div className="ag-wire-item" />
            </div>
          </div>
          <span className="ag-sketch-annotation">📐 Tested thumb-reach zones & high-contrast pricing hierarchy</span>
        </div>
      );
    }

    return (
      <div className="ag-process-canvas ag-canvas-tokens">
        <div className="ag-sketch-tag">DESIGN SYSTEM & TOKENS</div>
        <div className="ag-palette-strip">
          <div className="ag-swatch" style={{ background: "#2B101C" }}><span>Plum</span></div>
          <div className="ag-swatch" style={{ background: "#2E7D32" }}><span>Leaf</span></div>
          <div className="ag-swatch" style={{ background: "#E4A834" }}><span>Amber</span></div>
          <div className="ag-swatch" style={{ background: "#E5533D" }}><span>Tomato</span></div>
          <div className="ag-swatch" style={{ background: "#F5E8DC" }}><span style={{ color: "#333" }}>Cream</span></div>
        </div>
        <div className="ag-token-tags">
          <span className="ag-token-badge">✓ 100% Organic</span>
          <span className="ag-token-badge">🌾 Farm Direct</span>
          <span className="ag-token-badge">⚡ Harvested 6h Ago</span>
        </div>
        <span className="ag-sketch-annotation">🎨 Warm natural tones & accessible high-contrast UI tokens</span>
      </div>
    );
  };

  const content = (
    <div
      className="ag-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onWheel={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
      onTouchMove={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
    >
      <article className="ag-case-study">
        <button
          className="ag-close"
          onClick={onClose}
          aria-label="Close case study"
        >
          ×
        </button>

        <div className="ag-scroll-area">
          {/* INTRO / HERO */}
          <header className="ag-intro">
            <div className="ag-intro-copy">
              <span className="ag-pill">
                <Sprout size={13} /> CASE STUDY
              </span>

              <h1>
                AgriMart
              </h1>

              <h3 className="ag-subtitle">Fresh Produce from Local Farmers.</h3>

              <p className="ag-tagline">
                A farm-to-customer digital platform connecting local farmers with everyday customers through transparent sourcing.
              </p>

              <div className="ag-tags">
                <span>✦ UX research + UI design</span>
                <span>✦ Mobile application</span>
                <span>✦ Web platform</span>
              </div>
            </div>

            <div className="ag-hero-frame">
              <ImagePanel
                src={images.hero}
                alt="AgriMart product showcase"
                className="ag-hero-image"
              />
            </div>
          </header>

          {/* 01 & 02 — DESIGN CHALLENGE & RESEARCH STATS */}
          <section className="ag-section">
            <div className="ag-two-column">
              <div className="ag-card ag-challenge">
                <SectionLabel number="01">THE DESIGN CHALLENGE</SectionLabel>
                <h2>
                  Helping customers know where their food comes from.
                </h2>
                <p>
                  How might we help customers understand the source of their
                  produce while giving local farmers a more direct way to reach
                  buyers?
                </p>
              </div>

              <div className="ag-card ag-research-stats">
                <SectionLabel number="02">WHAT THE RESEARCH REVEALED</SectionLabel>
                <div className="ag-stat-grid">
                  {stats.map((stat) => (
                    <div className="ag-stat" key={stat.title}>
                      <strong style={{ color: stat.color || "#ecc94b" }}>{stat.value}</strong>
                      <b>{stat.title}</b>
                      <p>{stat.detail}</p>
                    </div>
                  ))}
                </div>
                <small className="ag-footnote">
                  Survey responses · 27 participants
                </small>
              </div>
            </div>
          </section>

          {/* 03 — PROJECT GOAL */}
          <section className="ag-section ag-goal-section">
            <div className="ag-card ag-goal">
              <div>
                <SectionLabel number="03">WHAT I SET OUT TO DO</SectionLabel>
                <h2>Make local produce easier to discover and buy.</h2>
                <p>
                  Create a platform that helps customers explore fresh produce,
                  understand its source and connect with local farmers.
                </p>
              </div>

              <div className="ag-goal-points">
                <div>
                  <CheckCircle2 size={18} color="#48bb78" />
                  <span>Improve source transparency</span>
                </div>
                <div>
                  <CheckCircle2 size={18} color="#48bb78" />
                  <span>Increase visibility for local farmers</span>
                </div>
                <div>
                  <CheckCircle2 size={18} color="#48bb78" />
                  <span>Simplify the shopping experience</span>
                </div>
              </div>
            </div>
          </section>

          {/* 04 — RESEARCH & PERSONAS */}
          <section className="ag-section">
            <div className="ag-section-heading">
              <SectionLabel number="04">GETTING TO KNOW THE USERS</SectionLabel>
              <h2>Understanding both sides of the marketplace.</h2>
              <p>
                I explored customer expectations and farmer needs through field
                interviews, surveys and competitive market analysis.
              </p>
            </div>

            <div className="ag-method-grid">
              {researchMethods.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="ag-method" key={item.number}>
                    <div className="ag-method-top">
                      <span>{item.number}</span>
                      <Icon size={20} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Rich Personas Board with Avatars & Quotes */}
            <div className="ag-card ag-personas-board">
              <div className="ag-personas-header">
                <div>
                  <span className="ag-mini-label">FIELD RESEARCH & USER PERSONAS</span>
                  <h3>Real voices from the farm-to-table chain.</h3>
                </div>
                <span className="ag-personas-meta">4 Key Demographic Profiles</span>
              </div>

              <div className="ag-personas-grid">
                {personas.map((person) => (
                  <div className="ag-persona-card" key={person.name}>
                    <div className="ag-persona-top">
                      <div className="ag-persona-avatar-wrap">
                        <img
                          src={person.avatar}
                          alt={person.name}
                          className="ag-persona-avatar"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <div className="ag-persona-info">
                        <h4>{person.name}</h4>
                        <span className="ag-persona-role">{person.role}</span>
                        <div className="ag-persona-location">
                          <MapPin size={11} color="#e4c16b" />
                          <span>{person.location}</span>
                        </div>
                      </div>
                      <span
                        className="ag-persona-tag"
                        style={{
                          background: `${person.tagColor}22`,
                          color: person.tagColor,
                          border: `1px solid ${person.tagColor}55`,
                        }}
                      >
                        {person.tag}
                      </span>
                    </div>

                    <p className="ag-persona-quote">“{person.quote}”</p>

                    <div className="ag-persona-traits">
                      {person.traits.map((trait) => (
                        <span key={trait} className="ag-trait-pill">
                          • {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ag-card ag-journey">
              <div>
                <span className="ag-mini-label">CUSTOMER JOURNEY</span>
                <h3>Looking at the experience from the customer's side.</h3>
                <p>
                  Mapping the journey helped organise the steps involved in
                  discovering, evaluating and purchasing produce.
                </p>
              </div>

              <div className="ag-journey-steps">
                <div className="ag-journey-step">
                  <span>01</span>
                  <b>Discover</b>
                </div>
                <Route size={16} />
                <div className="ag-journey-step">
                  <span>02</span>
                  <b>Browse & verify</b>
                </div>
                <Route size={16} />
                <div className="ag-journey-step">
                  <span>03</span>
                  <b>Order produce</b>
                </div>
                <Route size={16} />
                <div className="ag-journey-step">
                  <span>04</span>
                  <b>Receive delivery</b>
                </div>
              </div>
            </div>
          </section>

          {/* 05 — CORE FEATURES & LIVE UI MOCKUPS */}
          <section className="ag-section">
            <div className="ag-section-heading">
              <SectionLabel number="05">WHAT MAKES AGRIMART WORK</SectionLabel>
              <h2>Designing for trust, clarity and direct connection.</h2>
              <p>
                Key features designed to help customers explore produce, verify
                its source and connect with local growers.
              </p>
            </div>

            <div className="ag-feature-grid">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div className="ag-feature" key={feat.title}>
                    <span className="ag-feature-number">0{idx + 1}</span>
                    <div
                      className="ag-feature-icon-wrap"
                      style={{
                        background: `${feat.accentColor}18`,
                        border: `1px solid ${feat.accentColor}44`,
                        color: feat.accentColor,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3>{feat.title}</h3>
                    <p>{feat.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Live Interactive Marketplace Preview */}
            <div className="ag-card ag-ui-preview-card">
              <div className="ag-ui-preview-header">
                <div className="ag-preview-badge">
                  <Sprout size={13} color="#48bb78" />
                  <span>INTERACTIVE PRODUCE DISCOVERY</span>
                </div>
                <span className="ag-preview-sub">Direct Farm-to-Door UI System</span>
              </div>

              <div className="ag-mockup-search-bar">
                <Search size={15} color="#e4c16b" />
                <span>Search organic veggies, orchard fruits, raw honey...</span>
                <span className="ag-mockup-tag">Bangalore Hub</span>
              </div>

              <div className="ag-mockup-chips">
                <span className="ag-chip active">🌱 All Farm Direct</span>
                <span className="ag-chip">🍅 Heritage Veggies</span>
                <span className="ag-chip">🍎 Orchard Fruits</span>
                <span className="ag-chip">🥛 Cold-Pressed Dairy</span>
              </div>

              <div className="ag-mockup-cards-grid">
                <div className="ag-produce-card">
                  <div className="ag-produce-badge-row">
                    <span className="ag-badge-fresh">⚡ Harvested 6h ago</span>
                    <span className="ag-badge-organic">✓ 100% Organic</span>
                  </div>
                  <div className="ag-produce-body">
                    <div className="ag-produce-icon">🍅</div>
                    <div className="ag-produce-info">
                      <h4>Heritage Vine Tomatoes</h4>
                      <p>Sunil Gowda • Green Valley Farm (Mysore, 22km)</p>
                      <div className="ag-produce-price-row">
                        <span className="ag-price">₹46 <small>/ kg</small></span>
                        <span className="ag-market-price">Market: ₹65</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ag-produce-card">
                  <div className="ag-produce-badge-row">
                    <span className="ag-badge-fresh">⚡ Morning Pluck</span>
                    <span className="ag-badge-origin">🌱 Mandya Valley</span>
                  </div>
                  <div className="ag-produce-body">
                    <div className="ag-produce-icon">🥬</div>
                    <div className="ag-produce-info">
                      <h4>Hydroponic Baby Spinach</h4>
                      <p>Revathi Organics • Mandya (18km)</p>
                      <div className="ag-produce-price-row">
                        <span className="ag-price">₹38 <small>/ bunch</small></span>
                        <span className="ag-market-price">Market: ₹55</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ag-card ag-design-direction">
              <div>
                <span className="ag-mini-label">DESIGN DIRECTION</span>
                <h3>Clean, friendly and grounded in nature.</h3>
                <p>
                  The visual direction focuses on warm natural tones, generous
                  spacing and simple components to keep the focus on fresh
                  produce.
                </p>
              </div>

              <div className="ag-direction-tags">
                <span style={{ borderColor: "#48bb78", color: "#48bb78" }}>🌿 Organic palette</span>
                <span>Generous whitespace</span>
                <span>Card-based layouts</span>
                <span>Direct farmer provenance</span>
              </div>
            </div>
          </section>

          {/* 06 — PROCESS */}
          <section className="ag-section">
            <div className="ag-section-heading">
              <SectionLabel number="06">BRINGING THE EXPERIENCE TO LIFE</SectionLabel>
              <h2>From first sketches to polished components.</h2>
              <p>
                How the concept evolved across sketches, wireframes and final
                screens.
              </p>
            </div>

            <div className="ag-process-grid">
              {process.map((step) => (
                <div className="ag-process-card" key={step.number}>
                  <div className="ag-process-label">
                    <span>{step.number}</span>
                    <b>{step.title}</b>
                  </div>
                  <ProcessMockupCard step={step} />
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 07 — FINAL SCREENS */}
          <section className="ag-section">
            <div className="ag-section-heading">
              <SectionLabel number="07">THE FINAL SCREENS</SectionLabel>
              <h2>Designed for mobile convenience and web discovery.</h2>
              <p>
                Connecting the mobile app and website into one consistent
                experience.
              </p>
            </div>

            <div className="ag-design-showcase">
              {designScreens.map((screen) => {
                const Icon = screen.icon;
                return (
                  <div className="ag-design-card" key={screen.title}>
                    <div className="ag-design-card-heading">
                      <Icon size={18} />
                      <h3>{screen.title}</h3>
                    </div>
                    <p>{screen.text}</p>
                    <ImagePanel src={screen.image} alt={screen.title} />
                  </div>
                );
              })}
            </div>

            <div className="ag-card ag-design-note">
              <div>
                <Leaf size={18} />
                <span>DESIGN TAKEAWAY</span>
              </div>
              <h3>Simple components, clear information.</h3>
              <p>
                Keeping the interface clean helped prioritise what matters
                most — seeing what produce is available, knowing where it came
                from and placing an order without friction.
              </p>
            </div>
          </section>

          {/* 08 — REFLECTION */}
          <section className="ag-reflection">
            <SectionLabel number="08">LOOKING BACK</SectionLabel>
            <h2>What this project taught me.</h2>
            <p>
              Designing AgriMart highlighted the importance of balancing
              customer convenience with transparency. When people can see who
              grows their food, buying produce becomes personal again.
            </p>
            <div className="ag-reflection-line">
              Design is most effective when it makes everyday things simpler and
              more meaningful.
            </div>
          </section>

          {/* FOOTER ACTION BAR */}
          <footer className="ag-footer">
            <div className="ag-footer-tags">
              <span>✦ Figma</span>
              <span>✦ UX Research</span>
              <span>✦ Mobile UI</span>
              <span>✦ Website UI</span>
            </div>
            <div className="ag-footer-actions">
              <a
                href={mobileFigmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ag-btn-figma"
              >
                View Mobile Figma <ArrowUpRight size={15} />
              </a>
              <a
                href={websiteFigmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ag-btn-figma"
              >
                View Website Figma <ArrowUpRight size={15} />
              </a>
            </div>
          </footer>
        </div>
      </article>

      <style>{`
        /* =========================================================================
           AGRIMART CASE STUDY POPUP (STYLED EXACTLY LIKE ZYPHA)
           ========================================================================= */
        .ag-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
          background: rgba(14, 5, 8, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          overscroll-behavior: contain;
          touch-action: none;
          animation: ag-fade-in 0.3s ease;
          box-sizing: border-box;
        }

        .ag-case-study {
          --ag-bg: #2b101c;
          --ag-card: #351522;
          --ag-deep: #200a14;
          --ag-cream: #f5e8dc;
          --ag-muted: #c9b2b0;
          --ag-gold: #e4c16b;
          position: relative;
          width: min(1150px, 100%);
          height: min(88vh, 920px);
          max-height: calc(100vh - 48px);
          overflow: hidden;
          background: var(--ag-bg);
          color: var(--ag-cream);
          border: 2px solid #947044;
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
          animation: ag-open 0.45s cubic-bezier(.2, .8, .2, 1);
          box-sizing: border-box;
          font-family: inherit;
        }

        .ag-case-study * {
          box-sizing: border-box;
        }

        .ag-scroll-area {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overscroll-behavior: contain;
          touch-action: pan-y;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #d39a9a transparent;
          padding: 34px 38px 60px;
          box-sizing: border-box;
        }

        .ag-scroll-area::-webkit-scrollbar {
          width: 7px;
        }

        .ag-scroll-area::-webkit-scrollbar-thumb {
          background: #d39a9a;
          border-radius: 20px;
        }

        .ag-scroll-area::-webkit-scrollbar-track {
          background: transparent;
        }

        .ag-close {
          position: absolute;
          top: 13px;
          right: 15px;
          z-index: 20;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          color: #f9e8dc;
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          cursor: pointer;
          transition: 0.2s ease;
          font-size: 22px;
          line-height: 1;
        }

        .ag-close:hover {
          background: #e8c76c;
          color: #351522;
          transform: rotate(90deg);
        }

        /* HERO */
        .ag-intro {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 26px;
          align-items: center;
          margin-bottom: 26px;
        }

        .ag-intro-copy {
          padding: 10px 0;
        }

        .ag-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid rgba(214, 175, 93, 0.35);
          border-radius: 30px;
          background: rgba(195, 153, 82, 0.12);
          color: #e3c36d;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .ag-intro h1 {
          margin: 22px 0 4px;
          color: #fff0e4;
          font-family: Georgia, serif;
          font-size: clamp(3rem, 5vw, 4.5rem);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .ag-star {
          color: #e6c66c;
          font-family: sans-serif;
          font-size: 0.45em;
          margin-left: 8px;
          vertical-align: top;
        }

        .ag-subtitle {
          color: #e5c5ad;
          font-size: 1.1rem;
          margin: 12px 0;
          font-weight: 400;
        }

        .ag-tagline {
          max-width: 510px;
          color: #c9b2b0;
          font-size: 1.05rem;
          line-height: 1.65;
          margin: 18px 0;
        }

        .ag-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 20px;
        }

        .ag-tags span {
          padding: 8px 13px;
          border: 1px solid rgba(222, 174, 174, 0.18);
          background: rgba(255, 255, 255, 0.035);
          border-radius: 11px;
          color: #e7d3c8;
          font-size: 0.76rem;
        }

        .ag-hero-frame {
          height: 365px;
          border-radius: 17px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: radial-gradient(circle at 50% 50%, #461b2b 0%, #200a14 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ag-hero-image {
          width: 100%;
          height: 100%;
          border: none;
          background: transparent;
        }

        .ag-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 10px;
          transition: transform 0.5s ease;
        }

        .ag-hero-image:hover img {
          transform: scale(1.035);
        }

        /* IMAGE PANELS */
        .ag-image-panel {
          position: relative;
          width: 100%;
          min-height: 180px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 17px;
          background: #381b28;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ag-image-panel img {
          width: 100%;
          height: 100%;
          min-height: inherit;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .ag-image-panel:hover img {
          transform: scale(1.035);
        }

        .ag-image-fallback {
          min-height: inherit;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #d8bd9a;
          background: radial-gradient(circle at 50% 30%, #573044, #2b101c 70%);
          text-align: center;
          padding: 20px;
        }

        .ag-image-fallback span {
          color: #e4c16b;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .ag-image-fallback small {
          color: #c9b2b0;
          font-size: 0.8rem;
        }

        /* SECTIONS & CARDS */
        .ag-section {
          margin-top: 25px;
        }

        .ag-two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .ag-card {
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          background: var(--ag-card);
        }

        .ag-section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          color: #e4c16b;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .ag-section-label span {
          opacity: 0.8;
        }

        .ag-card h2,
        .ag-section-heading h2 {
          margin: 0 0 14px;
          font-family: Georgia, serif;
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 600;
          line-height: 1.2;
          color: #f4e4d8;
        }

        .ag-card p,
        .ag-section-heading p {
          margin: 0;
          color: #c9b2b0;
          font-size: 0.95rem;
          line-height: 1.65;
        }

        /* STATS (SECTION 02) */
        .ag-research-stats {
          background: #2f121e;
        }

        .ag-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 14px;
        }

        .ag-stat {
          padding: 18px;
          border-radius: 14px;
          background: #200a14;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ag-stat strong {
          display: block;
          margin-bottom: 6px;
          color: #f0d9a4;
          font-family: Georgia, serif;
          font-size: 2.3rem;
          line-height: 1;
        }

        .ag-stat b {
          display: block;
          font-size: 0.92rem;
          font-weight: 600;
          color: #f4e4d8;
          line-height: 1.4;
        }

        .ag-stat p {
          margin-top: 6px;
          font-size: 0.82rem;
          color: #c9b2b0;
          line-height: 1.5;
        }

        .ag-footnote {
          display: block;
          margin-top: 14px;
          color: #c9b2b0;
          font-size: 0.78rem;
          opacity: 0.85;
        }

        /* GOAL (SECTION 03) */
        .ag-goal-section {
          margin-top: 16px;
        }

        .ag-goal {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 24px;
          align-items: center;
          background: linear-gradient(115deg, #441a2a, #2f121e);
        }

        .ag-goal-points {
          display: grid;
          gap: 10px;
        }

        .ag-goal-points div {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 18px;
          border-radius: 12px;
          background: rgba(32, 10, 20, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.92rem;
          color: #f4e4d8;
        }

        .ag-goal-points svg {
          width: 18px;
          height: 18px;
          color: #e4c16b;
          flex-shrink: 0;
        }

        /* METHOD SECTION */
        .ag-section-heading {
          margin: 36px 0 18px;
        }

        .ag-section-heading h2 {
          max-width: 700px;
        }

        .ag-section-heading p {
          max-width: 680px;
        }

        .ag-method-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .ag-method {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          background: #351522;
        }

        .ag-method-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #e4c16b;
        }

        .ag-method-top span {
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .ag-method h3 {
          margin: 18px 0 8px;
          font-size: 1.05rem;
          font-weight: 600;
          color: #f4e4d8;
        }

        .ag-method p {
          margin: 0;
          color: #c9b2b0;
          font-size: 0.88rem;
          line-height: 1.6;
        }

        /* PERSONAS BOARD (SECTION 04) */
        .ag-mini-label {
          color: #e4c16b;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .ag-personas-board {
          margin-top: 16px;
          background: #2f121e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px;
          border-radius: 20px;
        }

        .ag-personas-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 18px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .ag-personas-header h3 {
          margin: 6px 0 0;
          font-family: Georgia, serif;
          font-size: 1.35rem;
          color: #f4e4d8;
        }

        .ag-personas-meta {
          font-size: 0.78rem;
          font-weight: 700;
          color: #e4c16b;
          background: rgba(228, 193, 107, 0.12);
          padding: 5px 12px;
          border-radius: 999px;
          border: 1px solid rgba(228, 193, 107, 0.25);
        }

        .ag-personas-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .ag-persona-card {
          padding: 18px;
          border-radius: 14px;
          background: #200a14;
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }

        .ag-persona-top {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ag-persona-avatar-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          border: 1.5px solid #e4c16b;
          background: #351522;
          flex-shrink: 0;
        }

        .ag-persona-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ag-persona-info {
          flex: 1;
          min-width: 0;
        }

        .ag-persona-info h4 {
          margin: 0;
          font-size: 0.98rem;
          font-weight: 700;
          color: #f4e4d8;
        }

        .ag-persona-role {
          display: block;
          font-size: 0.78rem;
          color: #c9b2b0;
          margin-top: 1px;
        }

        .ag-persona-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          color: #e4c16b;
          margin-top: 2px;
        }

        .ag-persona-tag {
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          white-space: nowrap;
          align-self: flex-start;
        }

        .ag-persona-quote {
          font-style: italic;
          font-size: 0.86rem;
          color: #e3d1c8;
          line-height: 1.5;
          margin: 0;
        }

        .ag-persona-traits {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .ag-trait-pill {
          font-size: 0.72rem;
          color: #c9b2b0;
          background: rgba(255, 255, 255, 0.04);
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ag-journey {
          margin-top: 16px;
          background: #391726;
        }

        .ag-journey h3,
        .ag-design-direction h3 {
          margin: 10px 0;
          font-family: Georgia, serif;
          font-size: 1.35rem;
          color: #f4e4d8;
        }

        .ag-journey p,
        .ag-design-direction p {
          color: #c9b2b0;
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .ag-journey-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 22px;
        }

        .ag-journey-steps > svg {
          color: #e4c16b;
          flex-shrink: 0;
        }

        .ag-journey-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 14px;
          border-radius: 12px;
          background: #200a14;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ag-journey-step span {
          color: #e4c16b;
          font-size: 0.74rem;
          font-weight: 800;
        }

        .ag-journey-step b {
          font-size: 0.92rem;
          color: #f4e4d8;
        }

        /* FEATURES (SECTION 05) */
        .ag-feature-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .ag-feature {
          position: relative;
          min-height: 190px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          background: #351522;
        }

        .ag-feature-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 14px 0 12px;
        }

        .ag-feature-number {
          color: #e4c16b;
          font-size: 0.74rem;
          font-weight: 800;
        }

        .ag-feature h3 {
          margin: 0 0 8px;
          font-size: 1.05rem;
          font-weight: 600;
          color: #f4e4d8;
        }

        .ag-feature p {
          margin: 0;
          color: #c9b2b0;
          font-size: 0.88rem;
          line-height: 1.6;
        }

        /* LIVE UI PREVIEW CARD (SECTION 05) */
        .ag-ui-preview-card {
          margin-top: 16px;
          background: linear-gradient(135deg, #381525 0%, #200a14 100%);
          border: 1px solid rgba(228, 193, 107, 0.22);
          padding: 24px;
        }

        .ag-ui-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .ag-preview-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #48bb78;
          text-transform: uppercase;
        }

        .ag-preview-sub {
          font-size: 0.78rem;
          color: #c9b2b0;
        }

        .ag-mockup-search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: #200a14;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          font-size: 0.84rem;
          color: #a89495;
          margin-bottom: 12px;
        }

        .ag-mockup-tag {
          margin-left: auto;
          font-size: 0.72rem;
          background: rgba(228, 193, 107, 0.15);
          color: #e4c16b;
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(228, 193, 107, 0.3);
        }

        .ag-mockup-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .ag-chip {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.76rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #d8c4bc;
        }

        .ag-chip.active {
          background: rgba(72, 187, 120, 0.15);
          border-color: rgba(72, 187, 120, 0.5);
          color: #48bb78;
          font-weight: 700;
        }

        .ag-mockup-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .ag-produce-card {
          padding: 16px;
          border-radius: 14px;
          background: rgba(32, 10, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ag-produce-badge-row {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .ag-badge-fresh {
          font-size: 0.68rem;
          font-weight: 700;
          color: #ecc94b;
          background: rgba(236, 201, 75, 0.14);
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(236, 201, 75, 0.3);
        }

        .ag-badge-organic {
          font-size: 0.68rem;
          font-weight: 700;
          color: #48bb78;
          background: rgba(72, 187, 120, 0.14);
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(72, 187, 120, 0.3);
        }

        .ag-badge-origin {
          font-size: 0.68rem;
          font-weight: 700;
          color: #63b3ed;
          background: rgba(99, 179, 237, 0.14);
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(99, 179, 237, 0.3);
        }

        .ag-produce-body {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .ag-produce-icon {
          font-size: 2.2rem;
          line-height: 1;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px;
          border-radius: 12px;
        }

        .ag-produce-info {
          flex: 1;
          min-width: 0;
        }

        .ag-produce-info h4 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 700;
          color: #f4e4d8;
        }

        .ag-produce-info p {
          margin: 3px 0 6px;
          font-size: 0.76rem;
          color: #b59f9e;
        }

        .ag-produce-price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .ag-price {
          color: #ecc94b;
          font-weight: 800;
          font-size: 1.05rem;
        }

        .ag-price small {
          font-size: 0.72rem;
          color: #c9b2b0;
          font-weight: normal;
        }

        .ag-market-price {
          font-size: 0.74rem;
          color: #8c7375;
          text-decoration: line-through;
        }

        .ag-design-direction {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 22px;
          align-items: center;
          margin-top: 16px;
          background: linear-gradient(110deg, #441a2a, #2b101c);
        }

        .ag-direction-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ag-direction-tags span {
          padding: 8px 14px;
          border: 1px solid rgba(214, 175, 93, 0.35);
          border-radius: 30px;
          background: rgba(195, 153, 82, 0.08);
          color: #f5e8dc;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* PROCESS (SECTION 06) */
        .ag-process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .ag-process-card {
          padding: 16px;
          border-radius: 16px;
          background: #351522;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ag-process-label {
          display: flex;
          gap: 9px;
          align-items: center;
          margin-bottom: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #f4e4d8;
        }

        .ag-process-label span {
          color: #e4c16b;
          font-size: 0.74rem;
          font-weight: 800;
        }

        .ag-process-card .ag-image-panel {
          min-height: 180px;
          height: 180px;
        }

        .ag-process-card p {
          margin: 12px 2px 2px;
          color: #c9b2b0;
          font-size: 0.88rem;
          line-height: 1.6;
        }

        /* VECTOR PROCESS CANVAS */
        .ag-process-canvas {
          min-height: 180px;
          height: 180px;
          border-radius: 14px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .ag-canvas-sketch {
          background: linear-gradient(135deg, #2b1320 0%, #1f0c16 100%);
          border: 1px dashed rgba(228, 193, 107, 0.35);
        }

        .ag-canvas-wireframe {
          background: linear-gradient(135deg, #1f1124 0%, #180918 100%);
          border: 1px solid rgba(138, 115, 179, 0.3);
        }

        .ag-canvas-tokens {
          background: linear-gradient(135deg, #261621 0%, #1a0b14 100%);
          border: 1px solid rgba(72, 187, 120, 0.3);
        }

        .ag-sketch-tag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #e4c16b;
          opacity: 0.9;
        }

        .ag-sketch-flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          margin: 4px 0;
        }

        .ag-sketch-node {
          padding: 5px 8px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.7rem;
          color: #f4e4d8;
          text-align: center;
        }

        .ag-sketch-node.highlight {
          background: rgba(228, 193, 107, 0.15);
          border-color: rgba(228, 193, 107, 0.5);
          color: #ecc94b;
          font-weight: 700;
        }

        .ag-sketch-arrow {
          color: #e4c16b;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .ag-sketch-wire {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ag-sketch-bar {
          height: 6px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.08);
        }

        .ag-sketch-boxes {
          display: flex;
          gap: 6px;
          margin-top: 2px;
        }

        .ag-sketch-box {
          flex: 1;
          height: 18px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px dashed rgba(255, 255, 255, 0.12);
        }

        .ag-wire-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ag-wire-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ag-wire-avatar {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          flex-shrink: 0;
        }

        .ag-wire-lines {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ag-wire-line {
          height: 5px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.1);
        }

        .ag-wire-line.w60 {
          width: 60%;
        }

        .ag-wire-line.w40 {
          width: 40%;
        }

        .ag-wire-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }

        .ag-wire-item {
          height: 28px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ag-palette-strip {
          display: flex;
          gap: 6px;
          border-radius: 8px;
          overflow: hidden;
          padding: 4px;
          background: rgba(0, 0, 0, 0.2);
        }

        .ag-swatch {
          flex: 1;
          height: 32px;
          border-radius: 5px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 2px;
          font-size: 0.6rem;
          font-weight: 700;
          color: #fff;
        }

        .ag-token-tags {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
          margin-top: 2px;
        }

        .ag-token-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 4px;
          background: rgba(72, 187, 120, 0.15);
          color: #48bb78;
          border: 1px solid rgba(72, 187, 120, 0.3);
        }

        .ag-sketch-annotation {
          font-size: 0.72rem;
          color: #d8c4bc;
          opacity: 0.88;
          font-style: italic;
          line-height: 1.35;
        }

        /* FINAL SCREENS (SECTION 07) */
        .ag-design-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .ag-design-card {
          padding: 18px;
          border-radius: 18px;
          background: #351522;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ag-design-card-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 8px;
        }

        .ag-design-card-heading svg {
          color: #e4c16b;
        }

        .ag-design-card h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #f4e4d8;
        }

        .ag-design-card p {
          min-height: 42px;
          margin: 0 0 14px;
          color: #c9b2b0;
          font-size: 0.88rem;
          line-height: 1.6;
        }

        .ag-design-card .ag-image-panel {
          min-height: 250px;
          height: 250px;
        }

        .ag-design-note {
          margin-top: 16px;
          background: linear-gradient(110deg, #441a2a, #2b101c);
        }

        .ag-design-note > div {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e4c16b;
          margin-bottom: 8px;
        }

        .ag-design-note h3 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: 1.25rem;
          color: #f4e4d8;
        }

        .ag-design-note p {
          margin: 0;
          color: #c9b2b0;
          font-size: 0.92rem;
          line-height: 1.65;
        }

        /* REFLECTION (SECTION 08) */
        .ag-reflection {
          position: relative;
          overflow: hidden;
          margin-top: 25px;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid rgba(223, 186, 105, 0.24);
          background:
            radial-gradient(circle at 90% 0%, #582b3b, transparent 50%),
            #351522;
        }

        .ag-reflection h2 {
          max-width: 700px;
          color: #f0d9a4;
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 16px;
        }

        .ag-reflection p {
          max-width: 800px;
          margin: 22px 0 24px;
          color: #e5cfca;
          font-size: 1.05rem;
          line-height: 1.8;
          font-weight: 400;
        }

        .ag-reflection-line {
          color: #e4bd70;
          font-family: Georgia, serif;
          font-size: 1.35rem;
          font-style: italic;
          margin-top: 20px;
        }

        .ag-reflection-star {
          display: block;
          margin-top: 32px;
          color: #e8c76c;
          text-align: center;
          font-size: 2rem;
        }

        /* FOOTER ACTION BAR */
        .ag-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 24px;
          margin-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ag-footer-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ag-footer-tags span {
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          background: rgba(255, 255, 255, 0.035);
          color: #e7d3c8;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .ag-footer-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ag-btn-figma {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 30px;
          background: #e4c16b;
          color: #351522;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .ag-btn-figma:hover {
          transform: translateY(-2px);
          opacity: 0.92;
        }

        /* ANIMATIONS */
        @keyframes ag-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes ag-open {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.975);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 850px) {
          .ag-overlay {
            inset: 0;
            padding: 12px;
          }

          .ag-case-study {
            height: calc(100vh - 24px);
            max-height: calc(100vh - 24px);
            border-radius: 22px;
          }

          .ag-scroll-area {
            padding: 24px 20px 40px;
          }

          .ag-intro,
          .ag-two-column,
          .ag-goal,
          .ag-personas,
          .ag-personas-grid,
          .ag-mockup-cards-grid,
          .ag-design-direction,
          .ag-design-showcase {
            grid-template-columns: 1fr;
          }

          .ag-stat-grid {
            grid-template-columns: 1fr;
          }

          .ag-method-grid,
          .ag-feature-grid,
          .ag-process-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 520px) {
          .ag-stat-grid,
          .ag-personas-grid,
          .ag-mockup-cards-grid,
          .ag-persona-visual,
          .ag-method-grid,
          .ag-feature-grid,
          .ag-process-grid {
            grid-template-columns: 1fr;
          }

          .ag-personas-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );

  return createPortal(content, document.body);
}
