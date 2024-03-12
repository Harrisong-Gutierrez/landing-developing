import Image from "next/image";
import PropTypes from "prop-types";
import Button from "../Button";

const Header = ({ logoSrc, logoAlt, logoWidth, logoHeight }) => {
  return (
    <header className="Header">
      <figure className="Header-icon">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
        />
      </figure>
      <div className="Header-title">
        <h1 className="Header-title-text">SISTEMI DI FILTRAZIONE GROHE BLUE</h1>
      </div>
      <div className="Header-button">
        <Button
          className="Header-button-text"
          href="/"
          textContent="Scopri l'offerta"
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  logoWidth: PropTypes.string.isRequired,
  logoHeight: PropTypes.string.isRequired,
};

export default Header;
