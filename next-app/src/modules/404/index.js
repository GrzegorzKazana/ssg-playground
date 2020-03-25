import Link from "next/link";
import Head from "next/head";

import css from "./styles.scss";

function NotFound() {
  return (
    <>
      <Head>
        <title>Error | An awesome blog.</title>
      </Head>
      <article className={css.missing}>
        <h1>Page not found...</h1>
        <Link href="/">
          <h3>
            Take me <a>home.</a>
          </h3>
        </Link>
      </article>
    </>
  );
}

export default NotFound;
