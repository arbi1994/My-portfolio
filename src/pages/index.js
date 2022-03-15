import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// global styles
import "../sass/index.scss";
// Components
import Layout from "../components/Layout";
import Hero from '../components/Hero/index'
// import Seo from "../components/seo"
import Section from "../components/Section"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <Section />
  </Layout>
)

export default IndexPage

// export const pageQuery = graphql`
//   {
//     hero: allMdx {
//       edges {
//         node {
//           frontmatter {
//             subtitle
//             title
//           }
//         }
//       }
//     }
//   }
// `
