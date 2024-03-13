import Button from "@/components/Button";
import Image from "next/image";
import PropTypes from "prop-types";

const Product = ({ btnText, title, subtitle, imageSrc, logoImg }) => {
  return (
    <div className="Product">
      <figure>
        <Image src={imageSrc} alt="product-image" width={328} height={168} />
      </figure>

      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>

        <Button href="/" styleLink="" textContent={btnText}>
          <figure>
            <Image src={logoImg} alt="product-logo" width={18} height={18} />
          </figure>
        </Button>
      </div>
    </div>
  );
};

Product.propTypes = {
  btnText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  logoImg: PropTypes.string.isRequired,
};

export default Product;
