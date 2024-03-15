import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Image from "next/image";

const Mentions = ({ firstText, secondText, logoImg }) => {
  return (
    <section className="Mentions">
      <Button
        href="/"
        textContent="Accedi alla vendita"
        styleLink="Mentions-button"
      >
        <figure>
          <Image src={logoImg} alt="product-logo" width={18} height={18} />
        </figure>
      </Button>
      <div className="Mentions-content">
        <p className="Mentions-text">{firstText}</p>
        <p className="Mentions-text">{secondText}</p>
      </div>
    </section>
  );
};

Mentions.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  logoImg: PropTypes.string.isRequired,
};

export default Mentions;
