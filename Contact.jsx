import Reveal from "./Reveal";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../data";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <section className="section contact-section" id="contact">
      <Reveal className="contact-card glass">
        <div>
          <span className="section-kicker">05 — CONTACT</span>
          <h2>Construisons quelque chose <span className="gradient-text">d'utile.</span></h2>
          <p>Besoin d'un site web, d'une interface moderne ou d'une assistance sur un projet informatique ? Écris-moi directement sur WhatsApp.</p>
          <div className="availability"><span className="pulse-dot"></span>Ouvert aux stages, collaborations et projets</div>
        </div>
        <div className="contact-action">
          <a className="whatsapp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span className="wa-icon"><img src="/whats.jpeg" alt="" /></span>
            <span><small>Discussion directe</small><strong>WhatsApp</strong></span>
            <b>↗</b>
          </a>
        </div>
      </Reveal>
    </section>
  );
}