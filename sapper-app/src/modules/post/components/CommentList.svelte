<script>
    import Comment from './Comment.svelte';

    export let comments;
</script>

<ul class="comments">
    {#each comments as c (c.id)}
        <li>
            <Comment comment={c} />
        </li>
    {/each}
</ul>

<style lang="scss">
    @import '../../../common/style/mixins.scss';

    .comments {
        @include ul-reset;
    }
</style>
