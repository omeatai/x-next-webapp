import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import defaultImage from "../public/static/hero-image.svg";
import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  // const repo = await res.json();
  return { props: { coffeeStores: coffeeStoresData } }; // will be passed to the page component as props
}

export default function Home(props) {
  console.log("props", props);

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
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => {
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
          </>
        )}
      </main>
    </div>
  );
}
