import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import defaultImage from "../public/static/hero-image.svg";
import coffeeStores from "../data/coffee-stores.json";

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
            <Image
              src={defaultImage}
              priority={true}
              width={1000}
              height={600}
              // placeholder="blur"
              // blurDataURL={defaultImage}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>
        <div className={styles.cardLayout}>
          <Card
            name="Hero Coffee"
            imgUrl="/static/hero-image.svg"
            href="/coffee-store/hero-coffee"
            className={styles.card}
          />
          {coffeeStores.map((coffeeStore) => {
            return (
              <Card
                key={coffeeStore.id}
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
                className={styles.card}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

//
