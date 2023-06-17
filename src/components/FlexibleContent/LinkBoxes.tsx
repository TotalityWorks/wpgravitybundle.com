import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import types
import type { FlexibleContentProps } from "../../interfaces"

// import components
import Edges from "../Layout/Edges"

type LinkBox = {
  title?: string
  text?: string
  image?: {
    altText?: string
    localFile?: any
  }
  button?: {
    target?: string
    title?: string
    url?: string
  }
}

export interface LinkBoxesProps extends FlexibleContentProps {
  linkBoxesTitle?: string
  linkBoxesText?: string
  linkBoxesBackgroundColor?: string
  linkBoxesButton?: {
    target?: string
    title?: string
    url?: string
  }
  linkBoxes?: Array<LinkBox>
}

const LinkBoxes: React.FC<LinkBoxesProps> = props => {
  const { linkBoxesTitle } = props

  return (
    <>
      <Edges size="lg">
        <div
          className={
            "mx-auto my-12 px-4 sm:px-6 lg:px-8 w-full break-normal mt-4 bg-red-100	border border-solid border-red-200 rounded-md	p-5"
          }
        >
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex w-full">
              <div className="ml-3 max-w-full	w-full">
                <h3 className="not-prose text-sm font-medium text-red-800">
                  Link Boxes: {linkBoxesTitle}
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <pre>{JSON.stringify(props, null, 2)}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Edges>
    </>
  )
}

export default LinkBoxes

export const LinkBoxesFallback: React.FC = () => {
  return (
    <Edges size="lg">
      <div
        className={
          "mx-auto my-12 px-4 sm:px-6 lg:px-8 w-full break-normal mt-4 bg-red-100	border border-solid border-red-200 rounded-md	p-5"
        }
      >
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex w-full">
            <div className="ml-3 max-w-full	w-full">
              <h3 className="not-prose text-sm font-medium text-red-800">
                Link Boxes: Link Boxes Title
              </h3>
              <div className="mt-2 text-sm text-red-700">Content.</div>
            </div>
          </div>
        </div>
      </div>
    </Edges>
  )
}

export const fragment = graphql`
  fragment LinkBoxes on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_LinkBoxes {
      fieldGroupName
      linkBoxesTitle
      linkBoxesText
      linkBoxesBackgroundColor
      linkBoxesButton {
        target
        title
        url
      }
      linkBoxes {
        title
        text
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: SOUTH }
                placeholder: BLURRED
              )
            }
          }
        }
        button {
          target
          title
          url
        }
      }
    }
  }

  #   fragment contactLinkBoxes on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_LinkBoxes {
  #       fieldGroupName
  #       linkBoxesTitle
  #       linkBoxesText
  #       linkBoxesBackgroundColor
  #       linkBoxesButton {
  #         target
  #         title
  #         url
  #       }
  #       linkBoxes {
  #         title
  #         text
  #         image {
  #           altText
  #           localFile {
  #             childImageSharp {
  #               gatsbyImageData(
  #                 transformOptions: { cropFocus: SOUTH }
  #                 placeholder: BLURRED
  #               )
  #             }
  #           }
  #         }
  #         button {
  #           target
  #           title
  #           url
  #         }
  #       }
  #     }
  #   }
`
