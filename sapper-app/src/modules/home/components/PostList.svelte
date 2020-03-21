<script>
    import Post from './Post.svelte';

    export let posts;
</script>

<ul class="post__list">
    {#each posts as p (p.id)}
        <li>
            <Post post={p} />
        </li>
    {/each}
</ul>

<style lang="scss">
    @import '../../../common/style/mixins.scss';

    .post__list {
        @include ul-reset;
        padding: 0 3rem;
    }
</style>
