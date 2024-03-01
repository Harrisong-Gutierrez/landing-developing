import Button from "../Button";

const Sticky = () => {
  return (
    <div className="Sticky">
      <div className="Sticky-main">
        <div className="Sticky-content">
          <p className="Sticky-text">
            <span className="Sticky-text">Dein Rabattcode:</span>
            <span className="Sticky-text-variant">VEEPEEXMAS</span>
          </p>
          <Button
            styleLink="Sticky-button"
            href="/"
            textContent="JETZT SHOPPEN"
          />
        </div>
      </div>
    </div>
  );
};

export default Sticky;
