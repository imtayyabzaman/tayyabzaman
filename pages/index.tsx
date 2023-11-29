import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Tayyab Zaman | Mobile App Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Tayyab Zaman | Mobile App Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tayyab Zaman | Mobile App Developer" />
        <meta name="description" content="Hey! I'm Tayyab Zaman, and I'm a Software Engineering graduate." />

        <meta property="og:title" content="Tayyab Zaman | Mobile App Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="Hey! I'm Tayyab Zaman, and I'm a Software Engineering graduate." />
      </Head>
      <Home />
    </>
  );
}
