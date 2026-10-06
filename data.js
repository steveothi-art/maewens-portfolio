// Toutes les données à un seul endroit : on modifie ici, la page se met à jour.
export const WHATSAPP_NUMBER = "2250704147883";
export const WHATSAPP_MESSAGE =
  "Bonjour Steve, je viens de visiter Maewens Portfolio et je souhaite échanger avec vous au sujet d'un projet.";

export const navLinks = [
  { id: "apropos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "projets", label: "Projets" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];

export const webSkills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 78 },
  { name: "PHP / SQL", level: 68 },
  { name: "Python", level: 69 },
  { name: "React js", level: 75 },
];

export const networkSkills = [
  { name: "Adressage IP / Subnetting", level: 70 },
  { name: "LAN / Switching", level: 60 },
  { name: "Dépannage", level: 55 },
  { name: "Administration système", level: 59 },
];

export const projects = [
  { id: 1, category: "web", preview: "store", pill: "Site vitrine", url: "www.maewens.com",
    type: "WEB DESIGN • FRONTEND", title: "Maewen's",
    description: "Exemple de projet site vitrine responsive faisant la promotion de mes services dans mon domaine.",
    tags: ["HTML", "CSS", "JS"], link: "/meawens.html" },

  { id: 2, category: "web", preview: "store", pill: "E-commerce", url: "https://steveothi-art.github.io/MA_boutique/",
    type: "WEB DESIGN • FRONTEND", title: "Ma Boutique",
    description: "Exemple de projet e-commerce responsive avec navigation, panier, sections produits et expérience utilisateur moderne.",
    tags: ["HTML", "CSS", "JS"], link: "/e-cormecre1.html" },


];
