import fetch from "isomorphic-fetch";

import { postsUrl } from "../../config/variables";
import Layout from "../../common/components/Layout/Layout";
import PostList from "./components/PostList";

function HomePage({ posts }) {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
}

export const getStaticProps = () =>
  fetch(postsUrl)
    .then(res => res.json())
    .then(posts => ({ props: { posts: posts.slice(0, 10) } }));

export default HomePage;
