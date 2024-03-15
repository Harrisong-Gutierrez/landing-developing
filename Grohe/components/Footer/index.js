import Image from "next/image";
import PropTypes from "prop-types";

const Footer = ({ height, width, alt, src, text }) => {
  return (
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
