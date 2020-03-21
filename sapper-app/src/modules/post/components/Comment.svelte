<script>
    export let comment;
</script>

<section class="comment">
    <h4>{comment.email}</h4>
    <p>{comment.body.repeat(2)}</p>
</section>

<style lang="scss">
    .comment {
        padding: 0 2rem;
    }
</style>
