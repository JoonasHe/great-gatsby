const path = require("path")



/*exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}*/

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
    `
  )

console.log(`Result in gatsby-node.js: ${result}`)

  if(result.errors){
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

    // Create pages for each markdown file.
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = node.frontmatter.path
      createPage({
        path,
        component: blogPostTemplate,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          pagePath: path,
        },
      })
    })
}
