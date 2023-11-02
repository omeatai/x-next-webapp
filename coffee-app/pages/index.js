import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import defaultImage from "../public/static/hero-image.svg";
import { fetchCoffeeStores } from "../lib/coffee-stores";

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores();

  return { props: { coffeeStores } }; // will be passed to the page component as props
}

export default function Home(props) {
  // console.log("props", props);

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
              priority={false}
              width={1000}
              height={600}
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
                    imgUrl={
                      coffeeStore.imgUrl ||
                      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    }
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

//
