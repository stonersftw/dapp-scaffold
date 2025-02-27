import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Stoners Pre Roll</title>
        <meta
          name="description"
          content="Stoners Pre Roll"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
