import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const HeaderSecondary = ({ onReturnButtonClick }) => {
  return (
    <section className="HeaderSecondary">
      <figure className="HeaderSecondary-logo">
        <Image
          className="Header-logo"
          src="/header-logo.png"
          alt="header-logo"
          width={78}
          height={52}
        />
      </figure>
      <div className="HeaderSecondary-content">
        <h2 className="HeaderSecondary-title">
          SISTEMI DI FILTRAZIONE GROHE BLUE
        </h2>
        <Button
          styleLink="HeaderSecondary-button"
          className="Header-button-text"
          textContent="Scopri l'offerta"
          onClick={onReturnButtonClick}
          href="/"
        >
          <IoIosArrowDown className="Header-button-icon" />
        </Button>
      </div>
    </section>
  );
};

export default HeaderSecondary;
