import Image from "next/image";
import PropTypes from "prop-types";
import { RiArrowRightSLine } from "react-icons/ri";

const Category = ({ text, height, width, alt, src }) => {
  return (
    <div className="Category">
      <Image
        className="Category-image"
        height={height}
        alt={alt}
        width={width}
        priority
        src={src}
      />
      <div className="Category-content">
        <h3 className="Category-text">{text}</h3>
        <div>
          <RiArrowRightSLine className="Category-icon" />
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  text: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Category;
