import Button from "@/components/Button";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const HeaderSecondary = ({ onReturnButtonClick }) => {
  return (
    <div>
      <Button
        styleLink="Header-secondary-button"
        textContent="Volver al header principal"
        onClick={onReturnButtonClick}
        href="/"
      />
      <IoIosArrowDown className="Header-button-icon" />
    </div>
  );
};

export default HeaderSecondary;
