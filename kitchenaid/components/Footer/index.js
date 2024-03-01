import Image from "next/image";
import PropTypes from "prop-types";

const Footer = ({ height, width, alt, src, text }) => {
  return (
    <footer className="Footer">
      <p className="Footer-paragraph">
        *Exklusives Angebot für Veepee Mitglieder. Der Rabatt gilt für das
        gesamte Sortiment mit Ausnahme von Produktsets, Neueinführungen
        (Wasserkocher 5KEK1701 und Toaster 5KMT2109), exklusiven Web-Produkten
        (Küchenmaschine 5KSM193AD), Design Editionen sowie Produkten in der
        Farbe des Jahres. Das Angebot ist nicht mit anderen Rabatten
        kombinierbar.
      </p>
      <Image
        className="Footer-image"
        height={height}
        width={width}
        alt={alt}
        priority
        src={src}
      />
      <span className="Footer-text">{text}</span>
    </footer>
  );
};

Footer.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Footer;
