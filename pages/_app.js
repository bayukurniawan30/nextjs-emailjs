import "../css/style.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next.js and Emailjs Example</title>
        <meta
          name="Description"
          content="A Next.js and Emailjs Example."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
