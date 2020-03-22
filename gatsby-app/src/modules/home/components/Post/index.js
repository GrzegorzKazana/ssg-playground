import React from "react"
import { Link } from "gatsby"

import css from "./style.module.scss"

function Post({ post: { id, title, body } }) {
  return (
    <article className={css.post}>
      <section>
        <Link to={`/post/${id}`}>
          <h2>{title}</h2>
        </Link>
        <h4>{body}</h4>
      </section>
    </article>
  )
}

export default Post
