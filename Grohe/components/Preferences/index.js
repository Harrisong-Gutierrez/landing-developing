import Image from "next/image";

const Preferences = () => {
  return (
    <section className="Preferences">
      <h2 className="Preferences-title">
        Come preferisci la tua acqua? A TE LA SCELTA.
      </h2>
      <div className="Preferences-content">
        <div className="Preferences-imgText">
          <figure className="Preferences-image">
            <Image src="/Rectangle1.png" alt="" width={328} height={103} />
          </figure>
          <p className="Preferences-text">NATURALE</p>
        </div>
        <div className="Preferences-imgText">
          <figure className="Preferences-image">
            <Image src="/Rectangle2.png" alt="" width={328} height={103} />
          </figure>
          <p className="Preferences-text">LEGGERMENTE FRIZZANTE</p>
        </div>
        <div className="Preferences-imgText">
          <figure className="Preferences-image">
            <Image src="/Rectangle3.png" alt="" width={328} height={103} />
          </figure>
          <p className="Preferences-text">FRIZZANTE</p>
        </div>
      </div>
      <p className="Preferences-paragraph">È solo una questione di GUSTI!</p>
    </section>
  );
};

export default Preferences;
