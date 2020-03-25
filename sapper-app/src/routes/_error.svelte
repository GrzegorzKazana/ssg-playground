<svelte:head>
    <title>Error | An awesome blog.</title>
</svelte:head>
<article class="missing">
    <h1>Page not found...</h1>
    <h3>
        Take me
        <a rel="prefetch" href="/">home.</a>
    </h3>
</article>

<style lang="scss">
    @import '../common/style/mixins.scss';

    .missing {
        @include flex-center;
        flex-direction: column;

        min-height: 100vh;
        max-width: 100vw;

        font-size: 2rem;
    }
</style>
