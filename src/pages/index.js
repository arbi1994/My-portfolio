import * as React from "react"
// global styles
import "../sass/index.scss"
// Components
import Layout from "../components/home/Layout/index"
import Hero from '../components/home/Hero/index'
// import Seo from "../components/seo"
import Section from "../components/home/Section/index"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Section />
  </Layout>
)

export default IndexPage
