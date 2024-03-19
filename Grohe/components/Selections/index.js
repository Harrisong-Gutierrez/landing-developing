import React from "react";
import Mentions from "../mentions";

const Selections = () => {
  return (
    <>
      <section className="Selections">
        <div className="Selections-content">
          <h2 className="Selections-title">
            GROHE Blue è una scelta sostenibile
          </h2>
          <p className="Selections-firstText">
            Salviamo il pianeta un bicchiere alla volta e diciamo addio alle
            bottiglie di plastica!
          </p>
        </div>
        <p className="Selections-secondText">
          Solo su Veepee per un tempo limitato con sconto fino ,
          <span className="Selections-secondText-variant">
            a 50% e altri imperdibili vantaggi!
          </span>
        </p>
      </section>
      <Mentions
        logoImg="/VEEPEE-footer.png"
        firstText="Approfitta del bonus acqua potabile e risparmia fino a € 500*! È previsto un credito d'imposta del 50% delle spese sostenute per l'acquisto e l'installazione di sistemi di filtrazione dell’acqua.
"
        secondText="
Tutti i nostri sistemi GROHE Blue rientrano nei requisiti previsti dalla normativa. Per leggere la normativa clicca qui."
      />
    </>
  );
};

export default Selections;
