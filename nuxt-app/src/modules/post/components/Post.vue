<template>
  <article>
    <h2 class="title">{{ post.title }}</h2>
    <p class="text">{{ post.body.repeat(10) }}</p>
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
.title {
  text-align: center;
  margin: 2rem auto 3rem auto;
}

.text {
  text-align: justify;
}
</style>
