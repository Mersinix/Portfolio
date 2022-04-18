import { graphql } from "gatsby"
import React from "react"
import "../styles/works.css"

export default function Posts({ data }) {
  const posts = data.allContentfulPosts.nodes
  console.log(posts)
  return (
    <section className="blog">
      <h1 className="title">Recent posts</h1>
      <br />
      <div>
        {posts.map(post => (
          <div className="workBlock">
            <div
              className="post"
              key={post.childContentfulPostsPostTextNode.childMarkdownRemark.id}
              dangerouslySetInnerHTML={{
                __html:
                  post.childContentfulPostsPostTextNode.childMarkdownRemark
                    .html,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export const query = graphql`
  query PostInfo {
    allContentfulPosts {
      nodes {
        childContentfulPostsPostTextNode {
          childMarkdownRemark {
            id
            html
          }
        }
      }
    }
  }
`
