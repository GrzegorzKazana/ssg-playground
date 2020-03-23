<template>
  <article class="post">
    <section>
      <nuxt-link :to="`/post/${post.id}`">
        <h2>{{ post.title }}</h2>
      </nuxt-link>
      <h4>{{ post.body }}</h4>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true }
  }
};
</script>

<style lang="scss" scoped>
.post {
  padding: 1rem;
}
</style>
