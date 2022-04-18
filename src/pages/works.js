import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/works.css"

export default function Works({ data }) {
  const works = data.allContentfulWork.edges
  
  return (
    <Layout>
      <section className="blog">
        <h1 className="title">work</h1>
        <br />
        <Link to="/workdetail">
          {works.map(work => (
            <div className="workBlock">
              {/* <Img key={work.node.picture.id} fluid={work.node.picture.url} /> */}

              <img
                className="workimg"
                key={work.node.picture.id}
                src={work.node.picture.url}
              />

              <div
                className="post"
                key={
                  work.node.childContentfulWorkDescriptionTextNode
                    .childMarkdownRemark.id
                }
                dangerouslySetInnerHTML={{
                  __html:
                    work.node.childContentfulWorkDescriptionTextNode
                      .childMarkdownRemark.html,
                }}
              />
            </div>
          ))}
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query workInfo {
    allContentfulWork {
      edges {
        node {
          childContentfulWorkDescriptionTextNode {
            childMarkdownRemark {
              html
              id
            }
          }
          picture {
            id
            url
          }
        }
      }
    }
  }
`
