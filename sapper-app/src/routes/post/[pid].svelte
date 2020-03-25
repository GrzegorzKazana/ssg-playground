<script context="module">
    import { postsUrl } from '../../config/variables';

    export function preload(page, session) {
        const { pid } = page.params;

        return this.fetch(`${postsUrl}/${pid}`)
            .then(res => res.json())
            .then(post => ({
                post,
            }));
    }
</script>

<script>
    import Layout from '../../common/components/Layout.svelte';
    import ClientOnly from '../../common/components/ClientOnly.svelte';
    import Post from '../../modules/post/components/Post.svelte';
    import CommentContainer from '../../modules/post/containers/CommentContainer.svelte';

    export let post;
</script>

<Layout title={`Post ${post.id}`}>
    <Post {post} />
    <ClientOnly>
        <CommentContainer postId={post.id} />
    </ClientOnly>
</Layout>
