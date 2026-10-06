export default function Footer() {
  return (
    <footer>
      <a href="#accueil" className="brand footer-brand">
        <span className="brand-mark"><img src="/maewen'S.png" alt="Maewens" /></span>
        <span><strong>Maewens</strong><small>portfolio</small></span>
      </a>
      <p>© {new Date().getFullYear()} Maewens. Conçu pour évoluer avec mon parcours.</p>
      <div className="footer-links">
        <a href="#projets">Projets</a><a href="#cv">CV</a><a href="#contact">WhatsApp</a>
      </div>
    </footer>
  );
}