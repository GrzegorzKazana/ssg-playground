import Link from "next/link";
import Head from "next/head";

import css from "./style.scss";

const defaultTitle = "An awesome blog.";

const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" }
];

function Layout({ children, title = defaultTitle }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Welcome to a totally fake blog made for ssg practice."
        ></meta>
      </Head>
      <nav className={css.navbar}>
        <h1 className={css.title}>Awesome placeholder blog.</h1>
        <ul className={css.link__container}>
          {links.map(({ label, url }) => (
            <li key={url} className={css.link__wrapper}>
              <Link href={url}>
                <a className={css.link}>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className={css.main}>{children}</main>
    </>
  );
}

export default Layout;
