import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Offer from "@/components/Offer";

import Sticky from "@/components/Sticky";
import { categories, secondcategories } from "@/constants/dataList";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GROHE</title>
        <meta name="description" content="Generated by SMBS Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header
          logoHeight={52}
          logoWidth={104}
          title="Grohe"
          imgCover="Header-cover"
          imgArrow="Arrow-img"
          paragraph="Entdecke dein exklusives Angebot"
        />
      </main>
    </>
  );
}
