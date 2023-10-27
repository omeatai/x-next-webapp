import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("onBannerBtnClick");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Coffee Connoisseur web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.banner}>
          <Banner
            buttonText="View stores nearby..."
            handleOnClick={handleOnBannerBtnClick}
          />
          <div className={styles.heroImage}>
            <Image src="/static/hero-image.svg" width={1000} height={600} />
          </div>
        </section>
        <div className={styles.cardLayout}>
          <Card
            name="Hero Coffee"
            imgUrl="/static/hero-image.svg"
            href="/coffee-store/hero-coffee"
            className={styles.card}
          />
          <Card
            name="Hero Coffee"
            imgUrl="/static/hero-image.svg"
            href="/coffee-store/hero-coffee"
            className={styles.card}
          />
          <Card
            name="Hero Coffee"
            imgUrl="/static/hero-image.svg"
            href="/coffee-store/hero-coffee"
            className={styles.card}
          />
          <Card
            name="Hero Coffee"
            imgUrl="/static/hero-image.svg"
            href="/coffee-store/hero-coffee"
            className={styles.card}
          />
        </div>
      </main>
    </div>
  );
}

//
