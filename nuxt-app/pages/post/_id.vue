<template>
  <Layout
    ><Post :post="post"/><no-ssr><CommentContainer :post-id="post.id"/></no-ssr
  ></Layout>
</template>

<script>
import { httpService } from '../../src/config/rootService';
import { postsUrl } from '../../src/config/variables';
import Layout from '../../src/common/components/Layout';
import Post from '../../src/modules/post/components/Post';
import CommentContainer from '../../src/modules/post/containers/CommentContainer';

export default {
  components: { Layout, Post, CommentContainer },
  asyncData(ctx) {
    const { id } = ctx.route.params;
    return httpService.get(`${postsUrl}/${id}`).then((post) => ({ post }));
  }
};
</script>
