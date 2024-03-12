import { LuClock9 } from "react-icons/lu";

const Offer = () => {
  return (
    <section className="Offer">
      <div className="Offer-content">
        <figure className="Offer-icon">
          <LuClock9 />
        </figure>
        <p className="Offer-title">
          <span className="Offer-title-firstVariant">GROHE</span>
          <span className="Offer-title-secondVariant"> Blue su </span>
          <span className="Offer-title-thirdVariant">VEEPEE</span>
        </p>

        <div className="Offer-firstBox">
          <p className="Offer-firstBox-textOne">-50%</p>
          <p className="Offer-firstBox-textTwo">sui sistemi di filtrazione</p>
        </div>

        <div className="Offer-secondBox">
          <p className="Offer-secondBox-textOne">Spedizione gratuita</p>
          <p className="Offer-secondBox-plus">+</p>
          <p className="Offer-secondBox-textTwo">
            Bonus
            <span className="Offer-secondBox-firstSpan"> fino a </span>
            <span className="Offer-secondBox-secondSpan">500€*</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
