import { useRouter } from "next/router";

const CoffeeStoreDetail = () => {
  const router = useRouter();

  console.log("router", router);
  console.log("router-path", router.asPath);
  console.log("router-path-arr", router.asPath.split("/"));
  console.log("router-query", router.query);

  const routearr = router.asPath.split("/");
  const routenum = routearr[routearr.length - 1];

  const queryId = router.query.id;

  return (
    <div>
      <h1>This is a dynamic route for CoffeeStoreDetail {routenum}.</h1>
      <h2>The Query ID is {queryId}.</h2>
    </div>
  );
};

export default CoffeeStoreDetail;
