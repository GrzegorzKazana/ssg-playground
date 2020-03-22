import React from "react"
import { Link } from "gatsby"

import css from "./style.module.scss"

function Post({ post: { id, title, body } }) {
  return (
    <article className={css.post}>
      <Link href={`/post/${id}`}>
        <section>
          <h2>{title}</h2>
          <h4>{body}</h4>
        </section>
      </Link>
    </article>
  )
}

export default Post
