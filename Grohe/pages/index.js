import Header from "@/components/Header";

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
        <Header />
      </main>
    </>
  );
}
