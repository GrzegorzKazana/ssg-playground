import React from "react"

import Layout from "../../common/components/Layout"
import ClientOnly from "../../common/components/ClientOnly"
import Post from "../post/components/Post"
import CommentContainer from "../post/containers/CommentContainer"

function PostPage({ pageContext: { post } }) {
  return (
    <Layout>
      <Post post={post}></Post>
      <ClientOnly>
        <CommentContainer postId={post.id}></CommentContainer>
      </ClientOnly>
    </Layout>
  )
}

export default PostPage
