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
          titleClassVariant="Product-title-secondVariant"
          titleClass="Product-title Product-title-firstVariant Product-title-firstVariantOne"
          btnText="Scopri GROHE Blue Pure"
          logoImg="/VEEPEE.png"
          imageSrc="/product1-mobile.png"
          title="GROHE Blue Pure"
          titleVariant="Rubinetto con filtro"
          subtitleClass="Product-subtitle"
          subtitle="Acqua filtrata naturale a temperatura ambiente dal gusto delizioso."
        />
        {/* <Product
          btnText="Scopri GROHE Blue Home"
          logoImg="/VEEPEE.png"
          imageSrc="/product2-mobile.png"
          title="GROHE Blue Home Rubinetto con filtro e frigo gasatore"
          subtitle="Acqua naturale fresca, leggermente frizzante e frizzante fredda, tutto da un unico rubinetto."
        /> */}
      </div>
    </section>
  );
};

export default Products;
