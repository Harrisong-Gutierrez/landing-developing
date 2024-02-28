import { useState } from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "@/components/Button";
import { PiCopySimple } from "react-icons/pi";
import { PiCopySimpleFill } from "react-icons/pi";

const CopyCodeBox = ({ text, onClick }) => {
  const [isTextCopied, setIsTextCopied] = useState(false);
  const handleCopyText = () => {
    setIsTextCopied(true);
    onClick();
  };
  return (
    <CopyToClipboard text={text}>
      <Button
        onClick={handleCopyText}
        text={text}
        href="/"
        isRedirected={false}
        styleLink="Offer-copyBox"
      >
        <span className="Offer-copyBoxContent">
          {text}
          <div className="Offer-icon">
            {isTextCopied ? <PiCopySimpleFill /> : <PiCopySimple />}
          </div>
        </span>
      </Button>
    </CopyToClipboard>
  );
};

CopyCodeBox.propTypes = {
  text: PropTypes.string,
};

export default CopyCodeBox;
