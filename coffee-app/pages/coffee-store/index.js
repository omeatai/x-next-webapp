import Link from "next/link";

const CoffeeStore = () => {
  return (
    <div>
      <h1>The Coffee Store Page</h1>
      <ul>
        <li>
          <Link href={"/coffee-store/1"}>
            <a>Store 1</a>
          </Link>
        </li>
        <li>
          <Link href={"/coffee-store/2"}>
            <a>Store 2</a>
          </Link>
        </li>
        <li>
          <Link href={"/coffee-store/3"}>
            <a>Store 3</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CoffeeStore;
