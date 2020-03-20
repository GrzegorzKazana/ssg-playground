import Link from "next/link";

import css from "./styles.scss";

function NotFound() {
  return (
    <article className={css.missing}>
      <h1>Page not found...</h1>
      <Link href="/">
        <h3>
          Take me <a>home.</a>
        </h3>
      </Link>
    </article>
  );
}

export default NotFound;
