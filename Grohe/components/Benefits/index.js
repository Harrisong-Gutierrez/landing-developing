import Image from "next/image";
import Benefit from "./components/Benefit";

const Benefits = () => {
  return (
    <section>
      <figure>
        <Image
          src="/benefits-cover.png"
          alt="benefits-cover"
          width={360}
          height={263}
        />
      </figure>
      <h2>Scopri i vantaggi di GROHE Blue:</h2>
      <p>perfetto per qualsiasi cucina</p>
      <div>
        <Benefit
          logoSrc="/benefits-image1.png"
          logoAlt="benefits-image1"
          logoWidth={54}
          logoHeight={54.77}
          title="+GUSTO"
          text="Sistema 2in1 che trasforma la semplice acqua corrente in acqua dal
          gusto puro e dissetante."
        />
      </div>
    </section>
  );
};

export default Benefits;
