# ssg-playground

Testing ground for server-side-generation (SSG) feature in modern server-side frameworks.

### What is this repo?

This repo was made for practice and comparison of tools that may be used for building modern,
dynamic webpages that utilize server server side rendering at build time. Tested frameworks include:
`Next.js`, `GatsbyJS`, `Sapper` and `Nuxt.js`.

### What can I find in here?

`./next-app`, `./gatsby-app`, `./sapper-app`, `./nuxt-app` directories contain code written using
`Next.js`, `GatsbyJS`, `Sapper` and `Nuxt.js` respectively.

`./mocks` - json databse hosted by [json-server](https://github.com/typicode/json-server) with data used for generating pages.

### What's the app then?

A simple blog post. Nothing fancy. However the following milestones/key fetures were taken into account:

-   index page with list of posts injected at build time
-   fully static pages - `about` and `404`
-   dynamic blog post pages - paths generated at build time
-   common layout, but applied only to selected pages
-   client-side only content - blog post comments

### How to run

To build all static versions of pages, run `npm run build`.
To serve staticly generated pages, run `npm run serve`.
To serve mock data, run `npm run serve-mocks`.

Apps are served at ports `4000-4003` respectively.

### Conclusions and remarks

-   Although only `gatsby` is completly dedicated for SSG, all frameworks allowed for acomplishing the task and meeting the requirements.
-   Using data hosted by REST api (mock server in this case) turned to be a bit tricker when using `gatsby`. Failed to utilize data-source plugins adapting rest apis (however, could be my mistake). Using `createPage` turned out to be the way - generating pages was then as easy as in other frameworks.
-   Only pages generated using `next` and `gatsby` may be deployed without serving the content separately. `Sapper` and `Nuxt` does include the data into the exported public files, but on client-side navigation it fetches the original data source (same as at build time).
-   `Sapper` provides an internal isomorphic fetch function, which may be considered also a benefit (no need to install it separately).

### [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit comparison (mobile)

_Note: websites were not optimized for audit, tests were run on pages as they are. Results could be propably easily improved._

|                                     | Next.js | Gatsby.js | Sapper | Nuxt.js |
| ----------------------------------- | ------- | --------- | ------ | ------- |
| performance                         | 96      | 96        | 100    | 97      |
| accessibility                       | 91      | 95        | 100    | 91      |
| best practices                      | 93      | 93        | 93     | 93      |
| SEO                                 | 100     | 100       | 100    | 100     |
| first contentful paint              | 2.0s    | 2.3s      | 1.4s   | 1.2s    |
| first meaningful paint              | 2.0s    | 2.3s      | 1.4s   | 1.2s    |
| time to interactive                 | 3.0s    | 2.3s      | 1.4s   | 3.3s    |
| first cpu idle                      | 2.0s    | 3.1s      | 1.4s   | 3.3s    |
| ---                                 | ---     | ---       | ---    |
| additional: data transfered on load | 221kB   | 326kB     | 43kB   | 259kB   |
