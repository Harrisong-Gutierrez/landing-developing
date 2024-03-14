import Image from "next/image";
import PropTypes from "prop-types";

const Benefit = ({
  logoClass,
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  title,
  text,
}) => {
  return (
    <div className="Benefit">
      <figure className={logoClass}>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
        />
      </figure>

      <div className="Benefit-textBox">
        <h3 className="Benefit-title">{title}</h3>
        <p className="Benefit-text">{text}</p>
      </div>
    </div>
  );
};

Benefit.propTypes = {
  logoClass: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  logoWidth: PropTypes.number.isRequired,
  logoHeight: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Benefit;
