import { postsUrl } from "../../config/variables";
import { httpService } from "../../config/rootService";
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
  httpService
    .get(postsUrl)
    .then(posts => ({ props: { posts: posts.slice(0, 10) } }));

export default HomePage;
