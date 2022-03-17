import * as React from "react"
import { graphql } from "gatsby"
// global styles
import "../sass/index.scss";
// Components
import Layout from "../components/home/Layout";
import Hero from '../components/home/Hero/index'
// import Seo from "../components/seo"
import Section from "../components/home/Section"

const IndexPage = () => (
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
