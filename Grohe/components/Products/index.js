import Product from "./components/product";

const Products = () => {
  return (
    <section className="Products">
      <h2 className="Products-title">
        Passa a GROHE Blue: acqua fresca e deliziosa direttamente dal tuo
        rubinetto
      </h2>
      <p className="Products-subtitle">
        Riduce il calcare, il residuo fisso, e migliora eccezionalmente il gusto
        dell'acqua.
      </p>
      {/* <Product
        btnText="Scopri GROHE Blue Pure"
        logoImg="/VEEPEE.png"
        imageSrc="/product1-mobile.png"
        title="GROHE Blue Pure Rubinetto con filtro"
        subtitle="Acqua filtrata naturale a temperatura ambiente dal gusto delizioso."
      />
      <Product
        btnText="Scopri GROHE Blue Home"
        logoImg="/VEEPEE.png"
        imageSrc="/product2-mobile.png"
        title="GROHE Blue Home Rubinetto con filtro e frigo gasatore"
        subtitle="Acqua naturale fresca, leggermente frizzante e frizzante fredda, tutto da un unico rubinetto."
      /> */}
    </section>
  );
};

export default Products;
