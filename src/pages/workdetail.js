import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"

export default function workdetail({ data }) {
  const WDetails =
    data.allContentfulWorkdetail.nodes

  return (
    <Layout>
      <section className="blog">
        <div>
          {WDetails.map(WDetail => (
            <div
              className="post"
              key={WDetail.childContentfulWorkdetailWorkdetailTextNode.childMarkdownRemark.id}
              dangerouslySetInnerHTML={{
                __html:
                  WDetail.childContentfulWorkdetailWorkdetailTextNode.childMarkdownRemark.html,
              }}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query WorkDetails {
    allContentfulWorkdetail {
        nodes {
          childContentfulWorkdetailWorkdetailTextNode {
            childMarkdownRemark {
              id
              html
            }
          }
        }
      }
  }
`
