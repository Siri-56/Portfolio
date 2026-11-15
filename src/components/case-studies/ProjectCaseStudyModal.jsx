import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight } from "lucide-react";
import {
  ResearchBoardElement,
  ApproachMockup,
  ProcessMockup,
  FinalScreenMockup,
} from "./CaseStudyUIElements";

import "./ProjectCaseStudyModal.css";

function ImageFrame({ src, alt, className = "", element = null }) {
  const [failed, setFailed] = useState(false);

  // If a crisp native UI element is provided, render it directly so quality never deteriorates
  if (element) {
    return (
      <div className={`case-image-frame case-element-frame ${className}`}>
        {element}
      </div>
    );
  }

  return (
    <div className={`case-image-frame ${className}`}>
      {src && !failed ? (
        <img
          src={src}
          alt={alt || ""}
          onError={() => setFailed(true)}
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
      ) : (
        <div className="case-image-placeholder">
          <span>✦</span>
          <small>{alt || "Add your project image here"}</small>
        </div>
      )}
    </div>
  );
}

function SectionHeading({ number, label, title, description }) {
  return (
    <div className="case-section-heading">
      <div className="case-eyebrow">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function ProjectCaseStudyModal({
  project,
  onClose,
}) {
  useEffect(() => {
    if (!project) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const content = (
    <div
      className="case-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onWheel={(event) => {
        if (event.target === event.currentTarget) {
          event.preventDefault();
        }
      }}
      onTouchMove={(event) => {
        if (event.target === event.currentTarget) {
          event.preventDefault();
        }
      }}
    >
      <article
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
      >
        <button
          className="case-close"
          onClick={onClose}
          aria-label="Close case study"
        >
          <X size={21} />
        </button>

        <div className="case-scroll-area">

          {/* HERO */}
          <section className="case-hero">
            <div className="case-hero-copy">
              {project.exhibition && (
                <div className="case-exhibition-label">
                  ✧ {project.exhibition.replace(/exhibition\s*hall\s*[a-z]\s*(•|\s-|\s\/)?\s*/gi, '').trim()}
                </div>
              )}

              <h1>
                {project.title}
              </h1>

              <h3>{project.subtitle}</h3>

              <p className="case-hero-description">
                {project.description}
              </p>

              <div className="case-tags">
                {project.tags?.map((tag) => (
                  <span key={tag}>✧ {tag}</span>
                ))}
              </div>
            </div>

            <div className="case-hero-image-plain">
              {project.heroImage && (
                <img
                  src={project.heroImage}
                  alt={`${project.title} product preview`}
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              )}
            </div>
          </section>

          {/* PROBLEM + GOALS */}
          <section className="case-two-column">
            <div className="case-panel">
              <SectionHeading
                number="01"
                label="THE DESIGN CHALLENGE"
                title={project.problem.heading}
              />

              <div className="case-problem-grid">
                {project.problem.cards.map((card) => (
                  <div className="case-problem-card" key={card.title}>
                    <span className="case-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-panel">
              <SectionHeading
                number="02"
                label="WHAT I SET OUT TO DO"
                title={project.goals.heading}
                description={project.goals.description}
              />

              <div className="case-goal-list">
                {project.goals.items.map((item, index) => (
                  <div key={item} className="case-goal-item">
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RESEARCH */}
          <section className="case-panel case-research">
            <SectionHeading
              number="03"
              label="RESEARCH THAT SHAPED THE DESIGN"
              title={project.research.heading}
              description={project.research.description}
            />

            {project.research.interviewees ? (
              <ResearchBoardElement
                interviewees={project.research.interviewees}
                surveyStats={project.research.surveyStats}
              />
            ) : (
              <ImageFrame
                src={project.research.image}
                alt="Research and competitor analysis board"
                className="case-research-image"
              />
            )}

            <div className="case-persona-grid">
              {project.research.personas.map((persona, index) => (
                <div className="case-persona" key={persona.title}>
                  <span>0{index + 1}</span>
                  <h3>{persona.title}</h3>
                  <p>{persona.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* APPROACH */}
          <section className="case-panel">
            <SectionHeading
              number="04"
              label="FINDING A WAY FORWARD"
              title={project.approach.heading}
            />

            <div className="case-roadmap">
              {project.approach.paths.map((path, index) => (
                <React.Fragment key={path.number}>
                  <div className="case-roadmap-item">
                    <div className="case-roadmap-copy">
                      <span className="case-number">{path.number}</span>
                      <h3>{path.title}</h3>
                      <p>{path.description}</p>
                    </div>

                    <ImageFrame
                      src={path.image}
                      alt={path.title}
                      className="case-roadmap-image"
                      element={<ApproachMockup index={index} path={path} />}
                    />
                  </div>

                  {index !== project.approach.paths.length - 1 && (
                    <div className="case-roadmap-connector">
                      <span>↓</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="case-emergency-feature">
              <div>
                <span className="case-emergency-label">
                  SPECIAL FEATURE
                </span>
                <h3>{project.approach.emergency.title}</h3>
                <p>{project.approach.emergency.description}</p>
              </div>

              <ImageFrame
                src={project.approach.emergency.image}
                alt="Emergency assistance screen"
                element={<ApproachMockup type="emergency" path={project.approach.emergency} />}
              />
            </div>
          </section>

          {/* PROCESS */}
          <section className="case-panel">
            <SectionHeading
              number="05"
              label="BEFORE IT TOOK SHAPE"
              title={project.process.heading}
            />

            <div className="case-process-grid">
              {project.process.steps.map((step, index) => (
                <div className="case-process-step" key={step.number}>
                  <ImageFrame
                    src={step.image}
                    alt={step.title}
                    element={<ProcessMockup index={index} step={step} />}
                  />

                  <div className="case-process-caption">
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                  </div>

                  {index < 2 && (
                    <div className="case-process-arrow">→</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FINAL DESIGN */}
          <section className="case-panel">
            <SectionHeading
              number="06"
              label="HOW IT ALL CAME TOGETHER"
              title={project.finalDesign.heading}
              description={project.finalDesign.description}
            />

            <div className="case-palette">
              <span>THE COLOUR PALETTE</span>
              <div>
                {project.finalDesign.palette.map((colour) => (
                  <div
                    key={colour}
                    className="case-swatch"
                    style={{ backgroundColor: colour }}
                    title={colour}
                  />
                ))}
              </div>
            </div>

            <div className="case-screen-grid">
              {project.finalDesign.screens.map((screen, index) => (
                <div className="case-screen-item" key={screen.title}>
                  <ImageFrame
                    src={screen.image}
                    alt={screen.title}
                    element={<FinalScreenMockup index={index} screen={screen} />}
                  />
                  <h3>{screen.title}</h3>
                  <p>{screen.description}</p>
                </div>
              ))}
            </div>

            <div className="case-final-emergency">
              <div>
                <span className="case-emergency-label">
                  DESIGN DECISION
                </span>
                <h3>{project.finalDesign.emergency.title}</h3>
                <p>{project.finalDesign.emergency.description}</p>
              </div>

              <ImageFrame
                src={project.finalDesign.emergency.image}
                alt="Final emergency screen"
                element={<FinalScreenMockup type="emergency" screen={project.finalDesign.emergency} />}
              />
            </div>
          </section>

          {/* REFLECTION */}
          <section className="case-reflection">
            <div className="case-eyebrow">
              <span>07</span>
              <span>LOOKING BACK</span>
            </div>

            <h2>{project.reflection.heading}</h2>

            <p className="case-reflection-text">
              {project.reflection.quote}
            </p>

            <p className="case-takeaway">
              {project.reflection.takeaway}
            </p>
          </section>

          {/* FOOTER ACTION BAR */}
          <footer className="case-modal-footer">
            <div className="case-modal-footer-tags">
              {project.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="case-modal-footer-actions">
              <a
                href={project.figmaUrl || "https://www.figma.com/design/wouweJgLNqtjMlKgjapMbA/Untitled?node-id=0-1&t=plQG4DIEXL0H5Uko-1"}
                target="_blank"
                rel="noopener noreferrer"
                className="case-modal-figma-btn"
              >
                View Figma <ArrowUpRight size={15} />
              </a>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );

  return createPortal(content, document.body);
}

