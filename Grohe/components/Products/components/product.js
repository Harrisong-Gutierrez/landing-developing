import Button from "@/components/Button";
import Image from "next/image";
import PropTypes from "prop-types";
import AOS from "aos";
import { useEffect } from "react";

const Product = ({
  btnText,
  title,
  titleVariant,
  subtitle,
  subtitleClass,
  imageSrc,
  animationSrc,
  logoImg,
  titleClass,
  titleClassVariant,
}) => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="Product">
      <figure className="Product-image">
        <Image
          className="Product-img"
          src={imageSrc}
          alt="product-image"
          width={328}
          height={168}
        />
      </figure>
      <div className="Animation-overlay" data-aos="fade-right">
        <figure>
          <Image
            className=""
            src={animationSrc}
            alt="product-image-animation"
            width={27}
            height={27}
          />
        </figure>
      </div>
      <div className="Product-content">
        <h2 className={titleClass}>
          {title}
          <span className={titleClassVariant}>{titleVariant}</span>
        </h2>
        <p className={subtitleClass}>{subtitle}</p>

        <Button href="/" styleLink="Product-button" textContent={btnText}>
          <figure>
            <Image src={logoImg} alt="product-logo" width={18} height={18} />
          </figure>
        </Button>
      </div>
    </div>
  );
};

Product.propTypes = {
  titleClass: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleVariant: PropTypes.string.isRequired,
  titleClassVariant: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  subtitleClass: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  logoImg: PropTypes.string.isRequired,
  animationSrc: PropTypes.string.isRequired,
};

export default Product;
