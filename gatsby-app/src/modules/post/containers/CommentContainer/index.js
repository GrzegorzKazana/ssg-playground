import React from "react"

import css from "./style.module.scss"
import { httpService } from "../../../../config/rootService"
import { postsUrl } from "../../../../config/variables"
import { usePromise } from "../../../../common/hooks"
import CommentList from "../../components/CommentList"

function CommentContainer({ postId }) {
  const { isPending, data, error } = usePromise(
    () => httpService.get(`${postsUrl}/${postId}/comments`),
    []
  )

  return (
    <section>
      {isPending ? (
        <p className={css.message}>Loading...</p>
      ) : error ? (
        <p className={css.message}>An error occured.</p>
      ) : (
        <CommentList comments={data} />
      )}
    </section>
  )
}

export default CommentContainer
