import React from "react"

import css from "./style.module.scss"
import Comment from "../Comment"

function CommentList({ comments }) {
  return (
    <ul className={css.comments}>
      {comments.map(c => (
        <li key={c.id}>
          <Comment comment={c}></Comment>
        </li>
      ))}
    </ul>
  )
}

export default CommentList
