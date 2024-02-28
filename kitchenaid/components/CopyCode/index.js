import React, { useState } from "react";
import PropTypes from "prop-types";
import CopyCodeBox from "./components/CopycodeBox";

const CopyCode = ({ copyLabel, copiedLabel }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = () => {
    setIsCopied(true);
  };
  return (
    <div className="CopyCode">
      <CopyCodeBox onClick={handleCopyText} text="VEEPEEXMAS" />
      <p className="CopyCode-label">{isCopied ? copiedLabel : copyLabel}</p>
    </div>
  );
};

CopyCode.propTypes = {
  copyLabel: PropTypes.string.isRequired,
  copiedLabel: PropTypes.string,
};

export default CopyCode;
