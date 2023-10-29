import { useRouter } from "next/router";
import Link from "next/link";

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
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: true, // fallback: false, fallback: "blocking",
    // fallback: true is useful when the app has a large number of static pages that depend on data
  };
}

const CoffeeStoreDetail = (props) => {
  const router = useRouter();
  console.log("props", props);
  const queryId = router.query.id;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href={"/coffee-store"} as={"Home"} passHref={true} scroll={true}>
        <a>Back to Home</a>
      </Link>
      <h1>This is a dynamic route for CoffeeStoreDetail {queryId}.</h1>
      <h2>Id: {props.coffeeStore.id}</h2>
      <h3>Name: {props.coffeeStore.name}</h3>
    </div>
  );
};

export default CoffeeStoreDetail;
