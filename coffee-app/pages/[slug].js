import { useRouter } from "next/router";
import Head from "next/head";
import _ from "lodash";

const Slug = () => {
  const router = useRouter();
  const slugTitle = _.capitalize(router.query.slug);

  return (
    <div>
      <Head>
        <title>{slugTitle}</title>
      </Head>
      <h1>Page {slugTitle}</h1>
      <p>Hi there I am a dynamic route {router.query.slug}</p>
    </div>
  );
};

export default Slug;
