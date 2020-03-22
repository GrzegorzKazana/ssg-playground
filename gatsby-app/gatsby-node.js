const fetch = require("isomorphic-fetch")

const apiUrl = "http://localhost:3999"
const postsUrl = `${apiUrl}/posts`

module.exports.createPages = async ({ actions: { createPage } }) => {
  const res = await fetch(postsUrl)
  const posts = await res.json()

  createPage({
    path: "/",
    component: require.resolve("./src/modules/home"),
    context: { posts },
  })
}
