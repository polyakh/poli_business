//region Global Imports
import type { NextPage } from "next";
import { DefaultSeo } from "next-seo";
//endregion
import { SEO } from "~config";

const Home: NextPage = () => {
  return (
    <div className="container">
      <DefaultSeo {...SEO} />
      <h1>Запуск...</h1>
    </div>
  );
};

export default Home;
