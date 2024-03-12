import Image from "next/image";
import PropTypes from "prop-types";

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
