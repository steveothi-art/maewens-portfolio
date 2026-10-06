import Reveal from "./Reveal";

const cards = [
  { icon: "⌨", extra: "", title: "Développement Web",
    text: "Création de sites vitrines, interfaces responsives, e-commerce et applications web modernes avec une attention particulière portée à l'expérience utilisateur.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Python", "SQL"] },
  { icon: "⌘", extra: "network-icon", title: "Réseau Informatique",
    text: "Apprentissage et mise en pratique de la configuration réseau, du dépannage, des services, du routage, de l'adressage IP et des bonnes pratiques d'administration.",
    tech: ["TCP/IP", "LAN", "DHCP", "DNS", "Routing", "Support"] },
];

// Effet 3D léger : on modifie le style directement à partir de l'événement souris.
const tilt = (e) => {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  e.currentTarget.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-4px)`;
};
const untilt = (e) => { e.currentTarget.style.transform = ""; };

export default function About() {
  return (
    <section className="section" id="apropos">
      <Reveal className="section-heading">
        <span className="section-kicker">01 — À PROPOS</span>
        <h2>Un profil entre <span className="gradient-text">code</span> et <span className="gradient-text alt">connectivité.</span></h2>
        <p>Je développe progressivement une double expertise pour concevoir des solutions numériques complètes : de l'interface que voit l'utilisateur jusqu'à l'infrastructure qui permet aux systèmes de communiquer.</p>
      </Reveal>

      <div className="about-grid">
        {cards.map((c) => (
          <Reveal as="article" key={c.title} className="about-card glass-card tilt-card"
                  onMouseMove={tilt} onMouseLeave={untilt}>
            <div className={`icon-box ${c.extra}`}>{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <div className="tech-list">{c.tech.map((t) => <span key={t}>{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}