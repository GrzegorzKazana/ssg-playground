import fetch from "isomorphic-fetch";

import { postsUrl } from "../../config/variables";
import Layout from "../../common/components/Layout/Layout";
import ClientOnly from "../../common/components/ClientOnly";
import Post from "../post/components/Post";
import CommentContainer from "../post/containers/CommentContainer";

function PostPage({ pid, post }) {
  return (
    <Layout>
      <Post post={post}></Post>
      <ClientOnly>
        <CommentContainer postId={pid}></CommentContainer>
      </ClientOnly>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(postsUrl);
  const posts = await res.json();

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
  const res = await fetch(`${postsUrl}/${pid}`);
  const post = await res.json();

  return {
    props: { pid, post }
  };
};

export default PostPage;
