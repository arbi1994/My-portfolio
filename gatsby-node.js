exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id

    actions.createPage({
      path: slug === null ? "/" : slug,
      component: require.resolve(`./src/templates/project.js`),
      context: { id },
    })
  })
}