import Image from "next/image";
import PropTypes from "prop-types";
import Mentions from "../mentions";

const Footer = ({ height, width, alt, src, text }) => {
  return (
    <>
      <Mentions
        mentionsClass="Mentions  Footer-mentions"
        logoImg="/VEEPEE-footer.png"
        firstText="Approfitta del bonus acqua potabile e risparmia fino a € 500*! È previsto un credito d'imposta del 50% delle spese sostenute per l'acquisto e l'installazione di sistemi di filtrazione dell’acqua.
"
        secondText="
Tutti i nostri sistemi GROHE Blue rientrano nei requisiti previsti dalla normativa. Per leggere la normativa clicca qui."
      />
      <footer className="Footer">
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
    </>
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
