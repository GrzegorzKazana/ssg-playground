<script>
    const links = [{ label: 'Home', url: '/' }, { label: 'About', url: '/about' }];

    export let title = 'An awesome blog.';
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="Welcome to a totally fake blog made for ssg practice." />
</svelte:head>
<nav class="navbar">
    <h1 class="title">Awesome placeholder blog.</h1>
    <ul class="link__container">

        {#each links as { label, url } (url)}
            <li class="link__wrapper">
                <a rel="prefetch" href={url} class="link">{label}</a>
            </li>
        {/each}
    </ul>
</nav>
<main class="main">
    <slot />
</main>

<style lang="scss">
    @import '../style/mixins.scss';

    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: baseline;

        max-width: 800px;
        margin: 0 auto;

        padding: 1rem 3rem;
    }

    .title {
        margin: 0;
    }

    .link__container {
        @include ul-reset;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: stretch;

        flex-grow: 1;
    }

    .link__wrapper {
        @include flex-center;
    }

    .link {
        padding: 1rem;
        font-size: 1.5rem;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 80%;
        margin: 0 auto;
    }
</style>
