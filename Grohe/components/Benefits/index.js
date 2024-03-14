import Image from "next/image";

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
    </section>
  );
};

export default Benefits;
