const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const slideTemplate = path.resolve('./src/templates/slide.js')
    resolve(
      graphql(
        `
          {
            allContentfulSlide(sort: { fields: [index], order: ASC }) {
              edges {
                node {
                  heading
                  slug
                  index
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const slides = result.data.allContentfulSlide.edges
        slides.forEach((slide, index) => {
          createPage({
            path: `/slide/${slide.node.index}/`,
            component: slideTemplate,
            context: {
              slug: slide.node.slug,
              index: slide.node.index
            },
          })
        })
      })
    )
  })
}
