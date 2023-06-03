import React from "react"
import { graphql, HeadFC } from "gatsby"

// import types
import { TemplatePageProps, PageDataType } from "../../interfaces"

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
      page: { title },
      allWp: { nodes },
    },
  } = props
  const siteTitle = nodes[0].generalSettings.title
  const googleVerify = nodes[0].seo.webmaster.googleVerify

  return (
    <Seo
      title={title}
      siteTitle={siteTitle}
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
    }
    allWp {
      nodes {
        generalSettings {
          title
          # description
        }
        seo {
          webmaster {
            googleVerify
          }
        }
      }
    }
  }
`
