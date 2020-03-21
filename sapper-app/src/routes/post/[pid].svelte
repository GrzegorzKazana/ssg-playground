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
    import Post from '../../modules/post/components/Post.svelte';

    export let post;
</script>

<Layout>
    <Post {post} />
    <!-- <ClientOnly>
        <CommentContainer postId={post.id}></CommentContainer>
      </ClientOnly> -->
</Layout>
