import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../components/layout.module.css";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData, post }) {
  return (
    <Layout Post>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingLg}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          Created At : <Date dateString={postData.date} /> Author :{" "}
          {postData.author}
        </div>
        {/* <Image alt="" /> */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      {!post && (
        <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Go back back</a>
          </Link>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
