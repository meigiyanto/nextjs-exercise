import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section
        className={`${utilStyles.headingMd} 
        ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Home Page</h2>
      </section>
    </Layout>
  );
}
