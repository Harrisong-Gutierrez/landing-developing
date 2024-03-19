import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Image from "next/image";

const Mentions = ({ firstText, secondText, logoImg, mentionsClass }) => {
  return (
    <section className={mentionsClass}>
      <Button
        href="/"
        textContent="Accedi alla vendita"
        styleLink="Mentions-button"
      >
        <figure className="Mentions-img">
          <Image src={logoImg} alt="product-logo" width={18} height={18} />
        </figure>
      </Button>
      <div className="Mentions-content">
        <p className="Mentions-textOne">{firstText}</p>
        <p className="Mentions-textTwo">{secondText}</p>
      </div>
    </section>
  );
};

Mentions.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  logoImg: PropTypes.string.isRequired,
  mentionsClass: PropTypes.string.isRequired,
};

export default Mentions;
