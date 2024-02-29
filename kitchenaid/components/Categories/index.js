import React from "react";
import PropTypes from "prop-types";
import Category from "./components/Category";

import { v4 as uuidv4 } from "uuid";

export const Categories = ({ title, text, categoryArr, catClass }) => {
  const renderCategory = () => {
    return categoryArr.map((category) => (
      <div key={uuidv4()}>
        <Category
          text={category.text}
          alt={category.alt}
          width={category.width}
          height={category.height}
          src={category.src}
        />
      </div>
    ));
  };
  return (
    <section className={catClass}>
      <div className="Categories-head">
        <h2 className="Categories-title">{title}</h2>

        <p className="Categories-text">
          Entdecke den Sale mit 5Categories-text-variant0% Rabatt +
          <span className="Categories-text-variant">20% Rabatt zusätzlich</span>
          <span className="Categories-text"> für Veepee Mitglieder</span>
        </p>
      </div>
      <div className="Categories-content">{renderCategory()}</div>
    </section>
  );
};

Categories.propTypes = {
  catClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Categories;
