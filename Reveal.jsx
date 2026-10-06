import useInView from "../hooks/useInView";

// Enveloppe n'importe quel bloc et lui ajoute l'animation "reveal" au scroll.
export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const [ref, inView] = useInView();
  return (
    <Tag ref={ref} className={`${className} reveal ${inView ? "visible" : ""}`} {...props}>
      {children}
    </Tag>
  );
}