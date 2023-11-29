import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Tayyab Zaman | Mobile App Developer</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
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
