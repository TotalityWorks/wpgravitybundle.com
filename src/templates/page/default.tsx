import React from "react"
import { graphql, HeadFC } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

// import types
import type { TemplatePageProps, PageDataType } from "../../interfaces"

// import components
import Layout from "../../components/Layout/Layout"
import FlexibleContent from "../../components/FlexibleContent"
import Seo from "../../components/Seo"

const DefaultPageTemplate: React.FC<TemplatePageProps> = props => {
  const {
    data: {
      page: { title, uri, slug, template },
    },
  } = props

  return (
    <>
      <Layout>
        {!!template && (
          <FlexibleContent
            components={template.flexibleContentModules.contentModule}
            data={{
              title,
              uri,
              slug,
            }}
          />
        )}
      </Layout>
    </>
  )
}

export default DefaultPageTemplate

export const Head: HeadFC<PageDataType> = props => {
  const {
    data: {
      page: { title, seo, featuredImage },
      allWp: { nodes },
    },
  } = props

  const websiteUrl = nodes[0].acfOptionsGlobalOptions.websiteSeoInfo.websiteUrl
  const siteTitle = nodes[0].generalSettings.title
  const googleVerify = nodes[0].seo.webmaster.googleVerify
  const siteTwitter = nodes[0].seo.social.twitter.username
  const description = seo?.metaDesc
  const twitterTitle = seo?.twitterTitle
  const twitterDescription = seo?.twitterDescription
  const twitterImage =
    seo?.twitterImage?.localFile && getSrc(seo.twitterImage.localFile)
  const twitterImageAlt = seo?.twitterImage?.altText
  const image =
    featuredImage?.node?.localFile && getSrc(featuredImage.node.localFile)
  const imageAlt = featuredImage?.node.altText

  return (
    <Seo
      pageTitle={title}
      siteTitle={siteTitle}
      description={description}
      image={image}
      imageAlt={imageAlt}
      siteUrl={websiteUrl}
      siteTwitter={siteTwitter}
      twitterTitle={twitterTitle}
      twitterDescription={twitterDescription}
      twitterImage={twitterImage}
      twitterImageAlt={twitterImageAlt}
      pathname={title}
      googleVerification={googleVerify}
    />
  )
}

export const FlexibleContentQuery = graphql`
  query DefaultPage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      slug
      uri
      template {
        ... on WpDefaultTemplate {
          ...DefaultTemplateFragment
        }
      }
      seo {
        metaDesc
        twitterTitle
        twitterDescription
        twitterImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                layout: CONSTRAINED
                width: 280
                height: 200
              )
            }
          }
          altText
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                layout: CONSTRAINED
                width: 280
                height: 200
              )
            }
          }
          altText
        }
      }
    }
    allWp {
      nodes {
        generalSettings {
          title
        }
        acfOptionsGlobalOptions {
          websiteSeoInfo {
            websiteUrl
          }
        }
        seo {
          webmaster {
            googleVerify
          }
          social {
            twitter {
              username
            }
          }
        }
      }
    }
  }
`
