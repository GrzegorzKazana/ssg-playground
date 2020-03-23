<template>
  <section class="comment">
    <h4>{{ comment.email }}</h4>
    <p>{{ comment.body.repeat(2) }}</p>
  </section>
</template>
<script>
export default {
  props: {
    comment: { type: Object, required: true }
  }
};
</script>
<style lang="scss" scoped>
.comment {
  padding: 0 2rem;
}
</style>
