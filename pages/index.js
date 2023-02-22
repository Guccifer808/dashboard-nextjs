import Head from "next/head";
import { Header, TopCards } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard - Charts.Js - Next.Js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-red-200">
        <Header />
        <TopCards />
      </main>
    </>
  );
}
