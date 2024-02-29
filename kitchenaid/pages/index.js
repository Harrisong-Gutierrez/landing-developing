import Categories from "@/components/Categories";
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
        <Offer title="EXKLUSIV FÜR VEEPEE-MITGLIEDER" />
        <Categories
          catClass="Categories Categories-firstVariant"
          categoryArr={categories}
          title="Damenkollektion"
        />
        <Categories
          titleClass="Offer-titleVarianrt"
          catClass="Categories Categories-secondVariant"
          categoryArr={secondcategories}
          title="Mädchenkollektion"
          Categories
        />
      </main>
    </>
  );
}
