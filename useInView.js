import { useEffect, useRef, useState } from "react";

// Hook personnalisé : dit si un élément est apparu à l'écran (remplace ton IntersectionObserver).
export default function useInView(threshold = 0.14) {
  const ref = useRef(null);            // pointe vers l'élément HTML
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold });
    observer.observe(ref.current);
    return () => observer.disconnect(); // nettoyage quand le composant disparaît
  }, [threshold]);

  return [ref, inView];
}