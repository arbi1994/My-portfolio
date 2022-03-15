import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

const Project = ({ data }) => {
  const projectTitle = data.mdx.frontmatter.title

  return (
    <>
      <h1>{projectTitle}</h1>
    </>
  )
}

export default Project

export const query = graphql`
  query SingleProjectQuery($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }
`