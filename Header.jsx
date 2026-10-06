import { useState } from "react";
import { navLinks } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false); // menu mobile ouvert ou fermé

  return (
    <>
      <header className="header glass">
        <a href="#accueil" className="brand" aria-label="Accueil Maewens Portfolio">
          <span className="brand-mark"><img src="/maewen'S.png" alt="Maewens" /></span>
          <span><strong>Maewens</strong><small>portfolio</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navLinks.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </nav>

        <a className="header-cta" href="#contact">Disponible pour un projet</a>

        <button className={`menu-toggle ${open ? "active" : ""}`} aria-expanded={open}
                onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </header>

      <nav className={`mobile-menu glass ${open ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </nav>
    </>
  );
}