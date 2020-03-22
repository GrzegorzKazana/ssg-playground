import React from "react"

import css from "./style.module.scss"

function Comment({ comment: { email, body } }) {
  return (
    <section className={css.comment}>
      <h4>{email}</h4>
      <p>{body.repeat(2)}</p>
    </section>
  )
}

export default Comment
