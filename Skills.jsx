import useInView from "../hooks/useInView";
import { webSkills, networkSkills } from "../data";

function SkillColumn({ number, title, skills }) {
  return (
    <div className="skill-column">
      <div className="skill-title"><span>{number}</span><h3>{title}</h3></div>
      {skills.map((s) => (
        <div className="skill-item" key={s.name}>
          <div className="skill-line"><span>{s.name}</span><b>{s.level}%</b></div>
          <div className="bar"><i style={{ "--level": `${s.level}%` }}></i></div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();
  return (
    <section className="section" id="competences">
      <div className="section-heading reveal visible">
        <span className="section-kicker">02 — COMPÉTENCES</span>
        <h2>Mes domaines de <span className="gradient-text">progression.</span></h2>
      </div>

      <div ref={ref} className={`skills-board glass-card reveal ${inView ? "visible animate-bars" : ""}`}>
        <SkillColumn number="01" title="Création Web" skills={webSkills} />
        <div className="skills-divider"></div>
        <SkillColumn number="02" title="Réseau & Système" skills={networkSkills} />
      </div>
    </section>
  );
}