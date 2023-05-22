import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import Parser from "html-react-parser"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface TextImageProps extends FlexibleContentProps {
  textImageTitle?: string
  textImageSubtitle?: string
  textImageText?: string
  textImagePosition?: string
  textImageBackgroundColor?: string
  textImageButton?: {
    target?: string
    title?: string
    url?: string
  }
  textImage?: {
    localFile?: IGatsbyImageData
    altText?: string
  }
  altImage?: {
    localFile?: IGatsbyImageData
    altText?: string
  }
}

const TextImage: React.FC<TextImageProps> = props => {
  const {
    textImageTitle,
    textImageSubtitle,
    textImageText,
    textImagePosition,
    textImageButton,
    textImage,
    altImage,
  } = props

  const image = textImage?.localFile && getImage(textImage.localFile)
  const alternativeImage = altImage?.localFile && getImage(altImage.localFile)
  const aboveTitle = textImagePosition === "Above Title"
  const belowTitle = textImagePosition === "Below Title"
  const belowText = textImagePosition === "Below Text"

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
                  Text Image: {textImageTitle}
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

export default TextImage

export const TextImageFallback: React.FC = () => {
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
                Text Image: Text Image Title
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
  fragment TextImage on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextImage {
      fieldGroupName
      textImageTitle
      textImageText
      textImagePosition
      textImageBackgroundColor
      textImageButton {
        target
        title
        url
      }
      textImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1184, height: 1376, placeholder: BLURRED)
          }
        }
      }
      altImage: textImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1310, height: 873, placeholder: BLURRED)
          }
        }
      }
    }
  }

  #   fragment contactTextImage on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextImage {
  #       fieldGroupName
  #       textImageTitle
  #       textImageText
  #       textImagePosition
  #       textImageBackgroundColor
  #       textImageButton {
  #         target
  #         title
  #         url
  #       }
  #       textImage {
  #         altText
  #         localFile {
  #           childImageSharp {
  #             gatsbyImageData(width: 1184, height: 1376, placeholder: BLURRED)
  #           }
  #         }
  #       }
  #       altImage: textImage {
  #         altText
  #         localFile {
  #           childImageSharp {
  #             gatsbyImageData(width: 1310, height: 873, placeholder: BLURRED)
  #           }
  #         }
  #       }
  #     }
  #   }
`
