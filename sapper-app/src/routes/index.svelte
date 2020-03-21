<script context="module">
    import { postsUrl } from '../config/variables';

    export function preload(page, session) {
        return this.fetch(postsUrl)
            .then(res => res.json())
            .then(posts => ({ posts: posts.slice(0, 10) }));
    }
</script>

<script>
    import Layout from '../common/components/Layout.svelte';
    import PostList from '../modules/home/components/PostList.svelte';

    export let posts;
</script>

<Layout>
    <PostList {posts} />
</Layout>
