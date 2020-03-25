import React from "react"

import Layout from "../../common/components/Layout"

function About() {
  return (
    <Layout title="About | An awesome blog.">
      <article>
        <h3>
          This is a test blog application for fiddling with
          server-side-generation (SSG).
        </h3>
        <section>
          Webpage includes:
          <ul>
            <li>index with content injected at build time</li>
            <li>dynamic pages (again, at build time)</li>
            <li>fully static page - about/404</li>
            <li>client side dynamic content</li>
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default About
