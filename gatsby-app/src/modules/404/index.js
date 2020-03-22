import React from "react"
import { Link } from "gatsby"

import css from "./style.module.scss"

function NotFound() {
  return (
    <article className={css.missing}>
      <h1>Page not found...</h1>

      <h3>
        Take me <Link to="/">home.</Link>
      </h3>
    </article>
  )
}

export default NotFound
