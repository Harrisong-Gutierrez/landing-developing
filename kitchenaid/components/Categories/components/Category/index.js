import Image from "next/image";
import PropTypes from "prop-types";
import { RiArrowRightSLine } from "react-icons/ri";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Category = ({ text, height, width, alt, src, textClass, iconClass }) => {
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
        <h3 className={textClass}>{text}</h3>
        <div>
          <TfiArrowCircleRight className={iconClass} />
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
  textClass: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default Category;
