import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cls from "classnames";

// import coffeeStoresData from "../../data/coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";
import { fetchCoffeeStores } from "../../lib/coffee-stores";

export async function getStaticProps({ params }) {
  // console.log("params", params);
  const coffeeStores = await fetchCoffeeStores();
  const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
    return coffeeStore.id.toString() === params.id; //dynamic id
  });

  return {
    props: {
      coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

const CoffeeStoreDetail = (props) => {
  const router = useRouter();
  // const queryId = router.query.id;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { name, address, neighbourhood, imgUrl } = props.coffeeStore;

  const handleUpvoteButton = () => {};

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass", styles.col2)}>
          {address && (
            <div className={styles.iconWrapper}>
              <Image src="/static/icons/places.svg" width="24" height="24" />
              <p className={styles.text}>{address}</p>
            </div>
          )}

          {neighbourhood && (
            <div className={styles.iconWrapper}>
              <Image src="/static/icons/nearMe.svg" width="24" height="24" />
              <p className={styles.text}>{neighbourhood}</p>
            </div>
          )}

          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" width="24" height="24" />
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStoreDetail;

// {
//   fsq_id: '59f784dd28122f14f9d5d63d',
//   categories: [Array],
//   chains: [],
//   closed_bucket: 'VeryLikelyOpen',
//   distance: 870,
//   geocodes: [Object],
//   link: '/v3/places/59f784dd28122f14f9d5d63d',
//   location: [Object],
//   name: 'HotBlack Coffee',
//   related_places: {},
//   timezone: 'America/Toronto'
// }

// ###############
// [
//   {
//     id: '514627d1e4b0dba1b85e9ba8',
//     address: '140 Yonge St',
//     name: 'Dineen Coffee Co',
//     neighbourhood: 'Toronto',
//     imgUrl: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjMwMjh8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDB8fHx8MTY5ODk0OTI4NHww&ixlib=rb-4.0.3&q=80&w=400'
//   },
//   {
//     id: '4fff1f96e4b042ae8acddca5',
//     address: '120 Lombard St',
//     name: 'Fahrenheit Coffee',
//     neighbourhood: 'Toronto',
//     imgUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjMwMjh8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBzaG9wfGVufDB8fHx8MTY5ODk0OTI4NHww&ixlib=rb-4.0.3&q=80&w=400'
//   },
// ]
