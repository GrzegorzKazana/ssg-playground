<template>
  <ul class="comments">
    <li v-for="c in comments" :key="c.id">
      <Comment :comment="c" />
    </li>
  </ul>
</template>

<script>
import Comment from './Comment';

export default {
  components: { Comment },
  props: {
    comments: { type: Array, required: true }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../common/style/mixins.scss';

.comments {
  @include ul-reset;
}
</style>
