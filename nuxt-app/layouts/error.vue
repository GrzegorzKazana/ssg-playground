<template>
  <article class="missing">
    <h1>Page not found...</h1>
    <h3>
      Take me
      <nuxt-link to="/">home.</nuxt-link>
    </h3>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../src/common/style/mixins.scss';

.missing {
  @include flex-center;
  flex-direction: column;

  min-height: 100vh;
  max-width: 100vw;

  font-size: 2rem;
}
</style>
