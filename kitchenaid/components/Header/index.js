import PropTypes from "prop-types";
import Arrow from "./components/Arrow";

const Header = ({ imgCover = "", title, paragraph }) => {
  return (
    <header className="Header">
      <div className={imgCover}>
        <div className="Header-container ">
          <div className="Header-content">
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
  logoHeight: PropTypes.number.isRequired,
  logoWidth: PropTypes.number.isRequired,
};

export default Header;
