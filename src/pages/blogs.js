import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/blogs.css"

export default function Blogs({ data }) {
  const blog = data.allContentfulBlogs.edges

  return (
    <Layout>
      <section className="blog">
        <h1 className="title">Blog</h1>
        <br />
        <div>
          {blog.map(blo => (
            <div
              className="post"
              key={blo.node.blog1.childMarkdownRemark.id}
              dangerouslySetInnerHTML={{
                __html: blo.node.blog1.childMarkdownRemark.html,
              }}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query BlogInfo {
    allContentfulBlogs {
      edges {
        node {
          blog1 {
            childMarkdownRemark {
              html
              id
            }
          }
        }
      }
    }
  }
`
