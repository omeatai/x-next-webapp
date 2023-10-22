import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStoreDetail = () => {
  const router = useRouter();

  console.log("router", router);
  console.log("router-query", router.query);

  const queryId = router.query.id;

  return (
    <div>
      <Link href={"/coffee-store"} as={"Home"} passHref={true} scroll={true}>
        <a>Back to Home</a>
      </Link>
      <h1>This is a dynamic route for CoffeeStoreDetail {queryId}.</h1>
      <h2>The Query ID is {queryId}.</h2>
    </div>
  );
};

export default CoffeeStoreDetail;
