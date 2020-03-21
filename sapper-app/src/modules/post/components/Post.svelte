<script>
    export let post;
</script>

<article>
    <h2 class="title">{post.title}</h2>
    <p class="text">{post.body.repeat(10)}</p>
</article>

<style lang="scss">
    .title {
        text-align: center;
        margin: 2rem auto 3rem auto;
    }

    .text {
        text-align: justify;
    }
</style>
