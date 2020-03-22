import React from "react"

import css from "./style.module.scss"
import Post from "../Post"

function PostList({ posts }) {
  return (
    <ul className={css.post__list}>
      {posts.map(p => (
        <li key={p.id}>
          <Post post={p}></Post>
        </li>
      ))}
    </ul>
  )
}

export default PostList
