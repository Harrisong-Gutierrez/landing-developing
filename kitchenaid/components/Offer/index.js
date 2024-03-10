import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import CopyCode from "../CopyCode";

const Offer = ({
  title,
  showCopyCodeAndButton,
  offerClass,
  titleClass,
  mainClass = "",
  subtitleClass,
  supplementaryClass,
  contentClass,
}) => {
  return (
    <section className={offerClass}>
      <div className={contentClass}>
        <div className="Offer-container">
          <h2 className={titleClass}>{title}</h2>

          <div className={mainClass}>
            <h3 className={subtitleClass}>
              20
              <span className="Offer-percentage">%</span>
            </h3>
            <p className={supplementaryClass}>auf das gesamte Sortiment</p>
          </div>

          <div className={mainClass}>
            <h3 className={subtitleClass}>
              25
              <span className="Offer-percentage">%</span>
            </h3>
            <p className={supplementaryClass}>
              auf alle Küchenmaschinen-Vorsätze, -Zubehör und -Schüsseln
            </p>
          </div>

          {showCopyCodeAndButton && (
            <>
              <CopyCode
                copyLabel="Zum Kopieren des Codes klicken"
                copiedLabel="Le code a été copié"
              />
              <Button
                href="/"
                textContent="JETZT SHOPPEN"
                styleLink="Offer-button"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

Offer.propTypes = {
  title: PropTypes.string.isRequired,
  showCopyCodeAndButton: PropTypes.bool.isRequired,
  offerClass: PropTypes.string.isRequired,
  titleClass: PropTypes.string.isRequired,
  mainClass: PropTypes.string,
  subtitleClass: PropTypes.string.isRequired,
  contentClass: PropTypes.string.isRequired,
};

export default Offer;
