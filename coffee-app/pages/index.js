import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import defaultImage from "../public/static/hero-image.svg";
// import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(process.env.FOURSQUARE_URI, options);
  //FOURSQUARE_URI = "https://api.foursquare.com/v3/places/search?query=coffee&ll=43.653833032607096%2C-79.37896808855945&limit=6"

  const data = await response.json();
  console.log(data.results);

  return { props: { coffeeStores: data.results } }; // will be passed to the page component as props
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
                    key={coffeeStore.fsq_id}
                    name={coffeeStore.name}
                    imgUrl={
                      coffeeStore.imgUrl ||
                      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    }
                    href={`/coffee-store/${coffeeStore.fsq_id}`}
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
