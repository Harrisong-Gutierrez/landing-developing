import React from "react";
import CopyCode from "../CopyCode";
import PropTypes from "prop-types";
import Button from "../Button";

const Offer = ({ title }) => {
  return (
    <section className="Offer">
      <div className="Offer-content">
        <h2 className="Offer-title">{title}</h2>
        <h3 className="Offer-subtitle">
          20
          <span className="Offer-percentage">%</span>
        </h3>
        <p className="d-block Offer-subtitle-supplementary Offer-subtitle-firstVariant">
          auf das gesamte Sortiment*
        </p>
        <h3 className="Offer-subtitle">
          25
          <span className="Offer-percentage">%</span>
        </h3>
        <p className="d-block Offer-subtitle-supplementary Offer-subtitle-secondVariant">
          auf alle Küchenmaschinen-Vorsätze, -Zubehör und -Schüsseln
        </p>
        <CopyCode
          copyLabel="Zum Kopieren des Codes klicken"
          copiedLabel="Le code a été copié"
        />
        <Button href="/" textContent="JETZT SHOPPEN" styleLink="Offer-button" />
      </div>
    </section>
  );
};

Offer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Offer;
