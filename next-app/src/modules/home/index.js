import fetch from "isomorphic-fetch";

import { postsUrl } from "../../config/variables";
import Layout from "../../common/components/Layout/Layout";

function HomePage({ posts }) {
  return (
    <Layout>
      <pre>{JSON.stringify(posts, null, 4)}</pre>
    </Layout>
  );
}

export const getStaticProps = () =>
  fetch(postsUrl)
    .then(res => res.json())
    .then(posts => ({ props: { posts: posts.slice(0, 10) } }));

export default HomePage;
