<template>
  <section>
    <p v-if="pending" class="message">Loading...</p>
    <CommentList v-else-if="comments" :comments="comments" />
    <p v-else class="message">An error occured.</p>
  </section>
</template>

<script>
import { httpService } from '../../../config/rootService';
import { postsUrl } from '../../../config/variables';
import CommentList from '../components/CommentList';

export default {
  components: { CommentList },
  props: {
    postId: { type: Number, required: true }
  },
  data() {
    return {
      pending: true,
      error: null,
      comments: null
    };
  },
  mounted() {
    httpService
      .get(`${postsUrl}/${this.postId}/comments`)
      .then((comments) => {
        this.pending = false;
        this.error = null;
        this.comments = comments;
      })
      .catch((err) => {
        this.pending = false;
        this.error = err;
      });
  }
};
</script>
<style lang="scss" scoped>
.message {
  text-align: center;
  font-size: 2rem;
}
</style>
