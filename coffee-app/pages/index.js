import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner";

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
        {/* <h1 className={styles.title}>Welcome to Coffee App</h1> */}
        <Banner
          buttonText="View stores nearby..."
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
