import { postsUrl } from "../../config/variables";
import { httpService } from "../../config/rootService";
import Layout from "../../common/components/Layout/Layout";
import ClientOnly from "../../common/components/ClientOnly";
import Post from "../post/components/Post";
import CommentContainer from "../post/containers/CommentContainer";

function PostPage({ pid, post }) {
  return (
    <Layout title={`Post #${pid}`}>
      <Post post={post}></Post>
      <ClientOnly>
        <CommentContainer postId={pid}></CommentContainer>
      </ClientOnly>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const posts = await httpService.get(postsUrl);

  const displayedPosts = posts.slice(0, 10);
  const postIds = displayedPosts.map(({ id }) => id);
  const paths = postIds.map(pid => ({ params: { pid: `${pid}` } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ctx => {
  const { pid } = ctx.params;
  const post = await httpService.get(`${postsUrl}/${pid}`);

  return {
    props: { pid, post }
  };
};

export default PostPage;
