<template>
  <section>
    <ul v-for="p in posts" :key="p.id" class="post__list">
      <li>
        <Post :post="p" />
      </li>
    </ul>
  </section>
</template>

<script>
import Post from './Post.vue';

export default {
  components: { Post },
  props: {
    posts: { type: Array, required: true }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../common/style/mixins.scss';

.post__list {
  @include ul-reset;
  padding: 0 3rem;
}
</style>
