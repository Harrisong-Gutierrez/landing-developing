import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Offer from "@/components/Offer";
import { categories, secondcategories } from "@/constants/dataList";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sergent Major</title>
        <meta name="description" content="Generated by SMBS Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header
          logoHeight={52}
          logoWidth={104}
          title="Weihnachten mit KitchenAid"
          imgCover="Header-cover"
          imgArrow="Arrow-img"
          paragraph="Entdecke dein exklusives Angebot"
        />
        <Offer
          contentClass="Offer-content Offer-content-firstVariant"
          supplementaryClass="Offer-subtitle-supplementary Offer-subtitle-firstVariant"
          offerClass="Offer Offer-firstImgVariant"
          title="EXKLUSIV FÜR VEEPEE-MITGLIEDER"
          showCopyCodeAndButton
          titleClass="Offer-title"
          subtitleClass="Offer-subtitle"
        />

        <Categories
          textClass="Category-text"
          titleClass="Categories-title Categories-title-firstVariant"
          catClass="Categories Categories-secondVariant"
          categoryArr={secondcategories}
          title="Das perfekte Geschenk zu Weihnachten"
          Categories
        />
        <Categories
          textClass="Category-text"
          titleClass="Categories-title Categories-title-secondVariant"
          catClass="Categories "
          categoryArr={categories}
          title="Mache Deine KitchenAid Küchenmaschine zum Allrounder"
          text="Mit den optionalen 15 Zubehörvorsätzen lässt sich deine Küchenmaschine vielfältig im Funktionsumfang erweitern."
        />

        <Offer
          contentClass="Offer-content Offer-content-secondVariant"
          supplementaryClass="Offer-subtitle-supplementaryVarient"
          offerClass="Offer Offer-secondImgVariant"
          title="Nur für kurze Zeit!"
          showCopyCodeAndButton={false}
          titleClass="Offer-secondTitle"
          mainClass="Offer-main"
          subtitleClass="Offer-subtitle-percentage Offer-secondTitle-separation"
        />
        <Footer
          text="©2023 KitchenAid. Alle Rechte vorbehalten"
          src="/footer-logo.png"
          alt="footer-image"
          height={55}
          width={252.39}
        />
      </main>
    </>
  );
}
