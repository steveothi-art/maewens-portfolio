import { useState } from "react";
import Reveal from "./Reveal";

export default function Hero() {
  const [photo, setPhoto] = useState("/mon_image-removebg-preview.png");

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setPhoto(URL.createObjectURL(file)); // aperçu immédiat de la photo choisie
  };

  return (
    <section className="hero" id="accueil">
      <Reveal className="hero-copy">
        <div className="eyebrow"><span className="pulse-dot"></span>Informatique • Développement web • Réseau</div>

        <h1>
          Je transforme des idées en{" "}
          <span className="gradient-text">expériences web</span> et en{" "}
          <span className="gradient-text alt">infrastructures fiables.</span>
        </h1>

        <p className="hero-intro">
          Je suis <strong>Steve Christ Othniel Dedocoton</strong>, informaticien avec l'ambition de me
          spécialiser en <strong>développement web</strong> et en <strong>réseau informatique</strong>.
          Maewens est ma structure de base : elle présente mon portfolio, mon univers, mes compétences et mes réalisations.
        </p>

        <div className="hero-actions">
          <a href="#projets" className="btn btn-primary">Explorer mes projets <span>↗</span></a>
          <a href="#contact" className="btn btn-secondary">Me contacter sur WhatsApp</a>
        </div>

        <div className="hero-stats">
          {[["02", "Univers principaux"], ["WEB", "Interfaces & applications"], ["LAN", "Réseau & infrastructure"]].map(([big, small]) => (
            <div className="stat glass-card" key={big}><strong>{big}</strong><span>{small}</span></div>
          ))}
        </div>
      </Reveal>

      <Reveal className="hero-visual">
        <div className="profile-card glass">
          <div className="profile-topline"><span>MAEWENS / PROFILE</span><span className="status-dot"></span></div>

          <div className="photo-frame">
            <img src={photo} alt="Photo de Steve Christ Othniel Dedocoton" />
            <label htmlFor="profileUpload" className="photo-upload"><span>ma photo</span></label>
            <input id="profileUpload" type="file" accept="image/*" onChange={handleUpload} />
          </div>

          <div className="profile-meta">
            <div><span className="profile-label">Nom</span><strong>Steve Christ Othniel Dedocoton</strong></div>
            <div className="profile-tags"><span>Web Dev</span><span>Network</span><span>IT</span></div>
          </div>

          <div className="mini-console">
            <div className="console-dots"><i></i><i></i><i></i></div>
            <code><span>&gt;</span> building_future.exe <b className="typing"></b></code>
            
          </div>
        </div>

        <div className="floating-chip chip-code glass">
          <span className="chip-icon">{"</>"}</span>
          <div><strong>Développement</strong><small>Frontend • Backend</small></div>
        </div>
        <div className="floating-chip chip-network glass">
          <span className="chip-icon">⌁</span>
          <div><strong>Réseau</strong><small>LAN • Services • Sécurité</small></div>
        </div>
      </Reveal>
    </section>
  );
}