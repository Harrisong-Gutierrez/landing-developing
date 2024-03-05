import React from "react";
import PropTypes from "prop-types";
import Category from "./components/Category";
import { v4 as uuidv4 } from "uuid";

export const Categories = ({
  title,
  text,
  categoryArr,
  catClass,
  titleClass,
  paragraphClass,
  textVariant,
}) => {
  const renderCategory = () => {
    return categoryArr.map((category) => (
      <div key={uuidv4()}>
        <Category
          iconClass={category.iconClass}
          textClass={category.textClass}
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
        <h2 className={titleClass}>{title}</h2>
        <p className={paragraphClass}>
          <span className="Categories-TextVariant">{textVariant}</span>
          {text}
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
  titleClass: PropTypes.string.isRequired,
  textClass: PropTypes.string.isRequired,
  paragraphClass: PropTypes.string.isRequired,
  textVariant: PropTypes.string.isRequired,
};

export default Categories;
