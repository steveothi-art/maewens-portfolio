import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Reveal from "./Reveal";

const CV_URL = encodeURI("/IDA OTHICV.pdf");

export default function CvSection() {
  const [open, setOpen] = useState(false);

  // Fermer avec la touche Échap
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="section" id="cv">
      <Reveal className="cv-card glass">
        <div className="cv-decoration">CV</div>
        <div className="cv-content">
          <span className="section-kicker">04 — CURRICULUM VITAE</span>
          <h2>Mon parcours en un document.</h2>
          <div className="cv-actions">
            <button className="btn btn-primary" onClick={() => setOpen(true)}>
              Voir mon CV
            </button>

            {/* Le PDF doit être dans le dossier public/ */}
            <a className="btn btn-secondary" href={CV_URL} download>
              Télécharger mon CV ↓
            </a>
          </div>
        </div>
      </Reveal>

      {open &&
        createPortal(
          <div className="cv-overlay" onClick={() => setOpen(false)}>
            <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="cv-close"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
              >
                ✕
              </button>
              <iframe
                src={`${CV_URL}#toolbar=0&navpanes=0`}
                title="Mon CV"
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}