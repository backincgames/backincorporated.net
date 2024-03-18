import type { NextPage } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>backincorporated.net</title>
        <meta name="description" content="Backincorporated.net is under development." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Development Info</h1>

        <p className={styles.description}>
          We are building backincorporated.net and it will be done soon!
        </p>

        <p>lol</p>
        <SpeedInsights />
        <Analytics/>
      </main>
    </div>
  );
};

export default Home;
