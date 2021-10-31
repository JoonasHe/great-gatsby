import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>A Gatsby rundown</h1>
    <p>Need to learn it</p>
    <p>Quickly</p>
    {/*<StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />*/}
    <p>
      {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
    </p>
  </Layout>
)

export default IndexPage
