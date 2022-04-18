import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/works.css"

export default function Home({ data }) {
  const { title1, title2 } = data.site.siteMetadata
  const works = data.allContentfulWork.edges
  const posts = data.allContentfulPosts.nodes

  return (
    <Layout>
      <section className="presentation">
        <div>
          <h1>
            {title1}
            <br />
            {title2}
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
            <br />
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam <br />
            consequat sunt nostrud amet.
          </p>
          <Link to="#" className="btn">
            {" "}
            Download Resume
          </Link>
        </div>
        <img className="profileimg" src="LINKEDIN.jpg" alt="tof" />
      </section>

      <section className="PostCard">
        <div className="">
        <h1 className="title1">Recent posts</h1>
        <br />
        <div className="Postrow">
          {posts.map(post => (
            <div className="">
              <div
                className="Card"
                key={
                  post.childContentfulPostsPostTextNode.childMarkdownRemark.id
                }
                dangerouslySetInnerHTML={{
                  __html:
                    post.childContentfulPostsPostTextNode.childMarkdownRemark
                      .html,
                }}
              />
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="blog">
        <span className="WorkTitle">Featured work</span>
        <br />
        <div>
          {works.slice(0, 3).map(work => (
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
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title1
        title2
      }
    }

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
