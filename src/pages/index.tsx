//region Global Imports
import { DefaultSeo } from "next-seo";
//endregion

//region Local Imports
import { SEO } from "~config";
import { PrimaryLayout } from "~components";
import { NextPageWithLayout } from "./page";
//endregion

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="container">
      <DefaultSeo {...SEO} />
      <h1>Запуск...</h1>
    </div>
  );
};

HomePage.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export default HomePage;
