import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface GalleryProps extends FlexibleContentProps {
  galleryTitle?: string
  galleryText?: string
  galleryBackgroundColor?: string
  galleryButton?: {
    target?: string
    title?: string
    url?: string
  }
  imageGallery?: []
}

const Gallery: React.FC<GalleryProps> = props => {
  const { galleryTitle } = props

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
                  Gallery: {galleryTitle}
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

export default Gallery

export const fragment = graphql`
  fragment Gallery on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Gallery {
      fieldGroupName
      galleryTitle
      galleryText
      galleryBackgroundColor
      galleryButton {
        target
        title
        url
      }
      imageGallery {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }

  #   fragment contactGallery on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Gallery {
  #       fieldGroupName
  #       galleryTitle
  #       galleryText
  #       galleryBackgroundColor
  #       galleryButton {
  #         target
  #         title
  #         url
  #       }
  #       imageGallery {
  #         altText
  #         localFile {
  #           childImageSharp {
  #             gatsbyImageData
  #           }
  #         }
  #       }
  #     }
  #   }
`
