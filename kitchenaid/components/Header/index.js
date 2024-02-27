import PropTypes from "prop-types";
import Arrow from "./components/Arrow";
import Image from "next/image";

const Header = ({ imgCover = "", title, paragraph }) => {
  return (
    <header className="Header">
      <div className={imgCover}>
        <div className="Header-container ">
          <div className="Header-content">
            <figure className="Header-logo">
              <Image
                className="Header-image"
                height={52}
                width={104}
                alt="Header-Image"
                priority
                src="/BRAND-LOGO.png"
              />
            </figure>
            <h1 className="Header-title">{title}</h1>
            <p className="Header-paragraph">{paragraph}</p>
            <Arrow img="/Arrows.png" height={40} width={33} />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  imgCover: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default Header;
