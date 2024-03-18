import Image from "next/image";
import Benefit from "./components/Benefit";
import { benefits } from "@/constants/benefitsData";
import { v4 as uuidv4 } from "uuid";

const Benefits = () => {
  const renderBenefitsList = () => {
    return benefits.map((benefit) => (
      <Benefit
        key={uuidv4()}
        logoClass={benefit.logoClass}
        logoSrc={benefit.logoSrc}
        logoAlt={benefit.logoAlt}
        logoWidth={benefit.logoWidth}
        logoHeight={benefit.logoHeight}
        title={benefit.title}
        text={benefit.text}
      />
    ));
  };

  return (
    <section className="Benefits">
      <figure className="Benefits-cover">
        <Image
          className="Benefits-cover-img"
          src="/benefits-cover.png"
          alt="benefits-cover"
          width={360}
          height={263}
        />
      </figure>
      <div className="Benefits-main">
        <div className="Benefits-textContent">
          <h2 className="Benefits-title">Scopri i vantaggi di GROHE Blue:</h2>
          <p className="Benefits-text">perfetto per qualsiasi cucina</p>
        </div>
        <div className="Benefits-list">{renderBenefitsList()}</div>
      </div>
    </section>
  );
};

export default Benefits;
