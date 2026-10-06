import { useState } from "react";
import Reveal from "./Reveal";
import { projects } from "../data";

const filters = [["all", "Tous"], ["web", "Développement Web"], ["network", "Réseau"]];

function Preview({ p }) {
  if (p.preview === "store") return (
    <div className="project-preview preview-store">
      <div className="browser-bar"><i></i><i></i><i></i><span>{p.url}</span></div>
      <div className="mock-content">
        <span className="mock-pill">{p.pill}</span>
        <h4>{p.title}</h4>
        <div className="mock-products"><i></i><i></i><i></i></div>
      </div>
    </div>
  );
  if (p.preview === "dashboard") return (
    <div className="project-preview preview-dashboard">
      <div className="dashboard-side"></div>
      <div className="dashboard-main"><span></span><span></span><div className="chart"></div></div>
    </div>
  );
  return (
    <div className="project-preview preview-network">
      <div className="node server">SRV</div>
      <div className="node router">R</div>
      <div className="node pc p1">PC</div><div className="node pc p2">PC</div><div className="node pc p3">PC</div>
      <svg viewBox="0 0 500 250" preserveAspectRatio="none">
        <line x1="250" y1="120" x2="100" y2="55" /><line x1="250" y1="120" x2="75" y2="200" />
        <line x1="250" y1="120" x2="250" y2="210" /><line x1="250" y1="120" x2="420" y2="190" />
      </svg>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  // On ne garde que les projets qui correspondent au filtre actif.
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section className="section projects-section" id="projets">
      <Reveal className="section-heading">
        <span className="section-kicker">03 — PROJETS</span>
        <h2>Mes <span className="gradient-text">réalisations</span> et laboratoires.</h2>
        <p>Voyez mes réalisations pendant mes années de formation</p>
      </Reveal>

      <Reveal className="project-filters">
        {filters.map(([key, label]) => (
          <button key={key} className={`filter-btn ${filter === key ? "active" : ""}`}
                  onClick={() => setFilter(key)}>{label}</button>
        ))}
      </Reveal>

      <div className="projects-grid">
        {visible.map((p) => (
          <Reveal as="article" key={p.id} className="project-card glass-card">
            <Preview p={p} />
            <div className="project-body">
              <div className="project-type">{p.type}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-footer">
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <a href={p.link} className="project-link" aria-label={`Lien du projet ${p.title}`}>↗</a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}