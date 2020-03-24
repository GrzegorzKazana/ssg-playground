<template>
  <Layout><PostList :posts="posts"/></Layout>
</template>

<script>
import { httpService } from '../src/config/rootService';
import { postsUrl } from '../src/config/variables';
import Layout from '../src/common/components/Layout';
import PostList from '../src/modules/home/components/PostList';

export default {
  components: { Layout, PostList },
  asyncData(ctx) {
    return httpService.get(postsUrl).then((posts) => ({ posts }));
  }
};
</script>

<style></style>
