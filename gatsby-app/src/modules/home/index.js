import React from "react"

import Layout from "../../common/components/Layout"
import PostList from "./components/PostList"

const IndexPage = ({ pageContext: { posts } }) => (
  <Layout>
    <PostList posts={posts}></PostList>
  </Layout>
)

export default IndexPage
