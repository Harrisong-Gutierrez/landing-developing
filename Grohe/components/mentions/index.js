import React from "react";
import PropTypes from "prop-types";

const Mentions = ({ firstText, secondText }) => {
  return (
    <section className="Mentions">
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
};

export default Mentions;
