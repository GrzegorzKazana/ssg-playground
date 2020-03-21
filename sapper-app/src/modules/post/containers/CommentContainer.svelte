<script>
    import { postsUrl } from '../../../config/variables';
    import { httpService } from '../../../config/rootService';
    import CommentList from '../components/CommentList.svelte';

    export let postId;

    $: commentsPromise = httpService.get(`${postsUrl}/${postId}/comments`);
</script>

<section>
    {#await commentsPromise}
        <p class="message">Loading...</p>
    {:then comments}
        <CommentList {comments} />
    {:catch}
        <p class="message">An error occured.</p>
    {/await}
</section>

<style lang="scss">
    .message {
        text-align: center;
        font-size: 2rem;
    }
</style>
