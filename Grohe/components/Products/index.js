import Product from "./components/product";

const Products = () => {
  return (
    <section className="Products">
      <h2 className="Products-title">
        <span className="Products-title-firstVariant">Passa a GROHE Blue:</span>
        <span className="Products-title-secondVariant">
          acqua fresca e deliziosa direttamente dal tuo rubinetto
        </span>
      </h2>
      <p className="Products-subtitle">
        Riduce il calcare, il residuo fisso, e migliora eccezionalmente il gusto
        dell'acqua.
      </p>
      <div className="Products-cards">
        <Product
          wavesClass=""
          glassesClass="Product-hideElement"
          animationClass="Product-overlay  Product-animate"
          animationWidth={27}
          animationHeight={27}
          animationSrc="/glass.png"
          titleClassVariant="Product-title-secondVariantTwo"
          titleClass="Product-title Product-title-firstVariant Product-title-firstVariantOne"
          btnText="Scopri GROHE Blue Pure"
          logoImg="/VEEPEE.png"
          imageSrc="/product1-mobile.png"
          title="GROHE Blue Pure"
          titleVariant="Rubinetto con filtro"
          subtitleClass="Product-subtitle"
          subtitle="Acqua filtrata naturale a temperatura ambiente dal gusto delizioso."
        />
        <Product
          wavesClass="Product-waves"
          glassesClass="Product-glasses"
          animationClass="Product-overlay  Product-secondAnimate"
          animationWidth={326}
          animationHeight={73}
          animationSrc="/grohe_waves.png"
          titleClassVariant="Product-title-secondVariantTwo"
          titleClass="Product-title Product-title-secondVariant  Product-title-firstVariantOne"
          btnText="Scopri GROHE Blue Home"
          logoImg="/VEEPEE.png"
          imageSrc="/product2-mobile.png"
          title="GROHE Blue Home"
          titleVariant="Rubinetto con filtro e frigo gasatore"
          subtitleClass="Product-subtitle"
          subtitle="Acqua naturale fresca, leggermente frizzante e frizzante fredda, tutto da un unico rubinetto."
        />
      </div>
    </section>
  );
};

export default Products;
