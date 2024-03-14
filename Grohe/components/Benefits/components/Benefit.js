import Image from "next/image";
import PropTypes from "prop-types";

const Benefit = ({ logoSrc, logoAlt, logoWidth, logoHeight, title, text }) => {
  return (
    <div>
      <figure>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
        />
      </figure>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

Benefit.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  logoWidth: PropTypes.number.isRequired,
  logoHeight: PropTypes.number.isRequired,
  title: PropTypes.number.isRequired,
  text: PropTypes.number.isRequired,
};

export default Benefit;
