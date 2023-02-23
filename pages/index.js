import Head from "next/head";
import { Header, TopCards, BarChart, RecentOrders } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard - Charts.Js - Next.Js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-slate-100">
        <Header />
        <TopCards />
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
