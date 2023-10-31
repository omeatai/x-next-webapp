import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import coffeeStoresData from "../../data/coffee-stores.json";

export async function getStaticProps({ params }) {
  console.log("params", params);

  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        console.log("coffeeStoreId", coffeeStore.id);
        return coffeeStore.id === parseInt(params.id); //dynamic id
        //OR return coffeeStore.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
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
  // return {
  //   paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
  //   fallback: true, // fallback: false, fallback: "blocking",
  //   // fallback: true is useful when the app has a large number of static pages that depend on data
  // };
}

const CoffeeStoreDetail = (props) => {
  const router = useRouter();
  console.log("props", props);
  const queryId = router.query.id;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { id, address, name, neighbourhood } = props.coffeeStore;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href={"/"} as={""} passHref={true} scroll={true}>
        <a>Back to Home</a>
      </Link>
      {/* <h1>This is a dynamic route for CoffeeStoreDetail {queryId}.</h1> */}
      <p>Id: {id}</p>
      <p>Address: {address}</p>
      <p>Name: {name}</p>
      <p>Neighbourhood: {neighbourhood}</p>
    </div>
  );
};

export default CoffeeStoreDetail;
