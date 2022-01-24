import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

const name = "Mei Giyanto";

const About = () => (
  <Layout about>
    <Head>
      <title>{siteTitle}</title>
    </Head>

    <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>About page</h2>
      <div className={styles.about}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h2 className={utilStyles.headingLg}>{name}</h2>

        <p>Hello Folks, this is my first web build with NextJS</p>
      </div>
    </section>
  </Layout>
);

export default About;
