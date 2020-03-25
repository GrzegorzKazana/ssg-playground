import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import css from "./style.module.scss"

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Error | An awesome blog.</title>
      </Helmet>
      <article className={css.missing}>
        <h1>Page not found...</h1>

        <h3>
          Take me <Link to="/">home.</Link>
        </h3>
      </article>
    </>
  )
}

export default NotFound
