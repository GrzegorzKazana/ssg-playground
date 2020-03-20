import Link from "next/link";

import css from "./style.scss";

const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" }
];

function Layout({ children }) {
  return (
    <>
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
