import Image from "next/image";
import Button from "../Button";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import HeaderSecondary from "./components/HeaderSecondary";

const Header = ({ logoSrc, logoAlt, logoWidth, logoHeight }) => {
  const [showPrimaryHeader, setShowPrimaryHeader] = useState(true);

  const handleButtonClick = () => {
    setShowPrimaryHeader(!showPrimaryHeader);
  };

  const handleReturnButtonClick = () => {
    setShowPrimaryHeader(true);
  };

  return (
    <>
      {showPrimaryHeader ? (
        <header className="Header">
          <figure className="Header-icon">
            <Image
              className="Header-logo"
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
            />
          </figure>
          <div className="Header-title">
            <h1 className="Header-title-text">
              SISTEMI DI FILTRAZIONE GROHE BLUE
            </h1>
          </div>
          <Button
            styleLink="Header-button"
            className="Header-button-text"
            href="/"
            textContent="Scopri l'offerta"
            onClick={handleButtonClick}
          >
            <IoIosArrowDown className="Header-button-icon" />
          </Button>
        </header>
      ) : (
        <HeaderSecondary onReturnButtonClick={handleReturnButtonClick} />
      )}
    </>
  );
};

export default Header;
