<script>
    export let post;
</script>

<article class="post">
    <section>
        <a rel="prefetch" href={`/post/${post.id}`}>
            <h2>{post.title}</h2>
        </a>
        <h4>{post.body}</h4>
    </section>
</article>

<style lang="scss">
    .post {
        padding: 1rem;
    }
</style>
