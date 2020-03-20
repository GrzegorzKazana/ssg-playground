import fetch from "isomorphic-fetch";

import { postsUrl } from "../../config/variables";
import Layout from "../../common/components/Layout/Layout";

function PostPage() {
  return <>a post</>;
}

export const getStaticPaths = () =>
  fetch(postsUrl)
    .then(res => res.json())
    .then(posts => {
      const displayedPosts = posts.slice(0, 10);
      const postIds = displayedPosts.map(({ id }) => id);
      const paths = postIds.map(pid => ({ params: { pid: `${pid}` } }));

      return {
        paths,
        fallback: false
      };
    });

export const getStaticProps = ctx => {
  console.log({ ctx });
  return {
    props: { pid: ctx.params.pid }
  };
};

export default PostPage;
