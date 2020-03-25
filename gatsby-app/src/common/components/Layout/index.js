import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import css from "./style.module.scss"

const defaultTitle = "An awesome blog."

const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
]

function Layout({ children, title = defaultTitle }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="Welcome to a totally fake blog made for ssg practice."
        ></meta>
      </Helmet>
      <nav className={css.navbar}>
        <h1 className={css.title}>Awesome placeholder blog.</h1>
        <ul className={css.link__container}>
          {links.map(({ label, url }) => (
            <li key={url} className={css.link__wrapper}>
              <Link to={url} className={css.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className={css.main}>{children}</main>
    </>
  )
}

export default Layout
