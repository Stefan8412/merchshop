import * as React from "react"

import { FaHome } from "@react-icons/all-files/fa/FaHome"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi everyone</h1>
    <p>Welcome to your new Gatsby site.</p>
    <FaHome />
  </Layout>
)

export default IndexPage
