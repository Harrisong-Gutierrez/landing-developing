import Image from "next/image";
import PropTypes from "prop-types";

const Card = ({ src }) => {
  return (
    <>
      <Image
        className="swiper-image"
        src={src}
        width={254}
        height={243}
        alt="caoruselimg"
      />
    </>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Card;
