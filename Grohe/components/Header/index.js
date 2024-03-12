import Image from "next/image";
import PropTypes from "prop-types";
import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";

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
      <>
        <Button
          styleLink="Header-button"
          className="Header-button-text"
          href="/"
          textContent="Scopri l'offerta"
        >
          <IoIosArrowDown className="Header-button-icon" />
        </Button>
      </>
    </header>
  );
};

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  logoWidth: PropTypes.number.isRequired,
  logoHeight: PropTypes.number.isRequired,
};

export default Header;
