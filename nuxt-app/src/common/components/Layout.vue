<template>
  <div>
    <nav class="navbar">
      <h1 class="title">Awesome placeholder blog.</h1>
      <ul class="link__container">
        <li v-for="link in links" :key="link.url" class="link__wrapper">
          <a :href="link.url" class="link">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script>
const links = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' }
]

export default {
  data() {
    return {
      links
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixins.scss';

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;

  max-width: 800px;
  margin: 0 auto;

  padding: 1rem 3rem;
}

.title {
  margin: 0;
}

.link__container {
  @include ul-reset;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;

  flex-grow: 1;
}

.link__wrapper {
  @include flex-center;
}

.link {
  padding: 1rem;
  font-size: 1.5rem;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80%;
  margin: 0 auto;
}
</style>
