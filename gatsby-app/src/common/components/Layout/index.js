import React from "react"
import { Link } from "gatsby"

import css from "./style.module.scss"

const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
]

function Layout({ children }) {
  return (
    <>
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
