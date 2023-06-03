import React from "react"
import { graphql, Link, HeadFC } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Parser from "html-react-parser"

// import types
import { TemplatePostProps, PostDataType } from "../../interfaces"

// import components
import Edges from "../../components/Layout/Edges"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo"

const DefaultPostTemplate: React.FC<TemplatePostProps> = props => {
  const {
    data: {
      wpPost: { title, content, featuredImage, categories },
    },
    pageContext: { archivePath },
  } = props
  const image =
    featuredImage?.node?.localFile && getImage(featuredImage.node.localFile)
  return (
    <Layout archivePath={archivePath}>
      <Edges size="lg">
        <h1 children={title} />
        {image && (
          <GatsbyImage image={image} alt={featuredImage?.node?.altText || ""} />
        )}
        {categories && (
          <p>
            {categories &&
              categories.nodes.map(
                (cat: { name: string; uri: string }, i: number) => {
                  return (
                    <Link
                      to={cat.uri}
                      className={`${i === 0 ? "" : "ml-[5px]"}`}
                      children={cat.name}
                    />
                  )
                }
              )}
          </p>
        )}
        <div children={Parser(`${content}`)} />
      </Edges>
    </Layout>
  )
}

export default DefaultPostTemplate

export const Head: HeadFC<PostDataType> = props => {
  const {
    data: {
      wpPost: { title, featuredImage, author },
      allWp: { nodes },
    },
  } = props
  const siteTitle = nodes[0].generalSettings.title
  // the Parser here converts characters like '&#039;'
  const description = Parser(nodes[0].generalSettings.description).toString()
  const websiteUrl = nodes[0].acfOptionsGlobalOptions.websiteSeoInfo.websiteUrl
  const twitterHandle =
    nodes[0].acfOptionsGlobalOptions.websiteSeoInfo.twitterHandle
  const image =
    featuredImage?.node.localFile.childImageSharp.gatsbyImageData.images
      .fallback.src

  return (
    <Seo
      title={title}
      description={description}
      siteTitle={siteTitle}
      image={image}
      author={author?.node?.userInfo?.twitterHandle}
      siteUrl={websiteUrl}
      siteTwitter={twitterHandle}
    />
  )
}

export const PostSingleQuery = graphql`
  query Post($id: String!) {
    wpPost(id: { eq: $id }) {
      ...PostFragment
    }

    posts: allWpPost {
      nodes {
        ...PostFragment
      }
    }

    allWp {
      nodes {
        generalSettings {
          title
          description
        }
        acfOptionsGlobalOptions {
          websiteSeoInfo {
            websiteUrl
            twitterHandle
          }
        }
      }
    }
  }
`
