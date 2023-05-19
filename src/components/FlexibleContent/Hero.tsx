import React from "react"
import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface HeroProps extends FlexibleContentProps {
  heroTitle?: string
  heroText?: string
  heroImage?: {} // Add to WordPress
  heroBackgroundColor?: string
  heroBackgroundVideo?: string
  heroBackgroundImage?: {}
  heroSingleImage?: {
    image: {
      localFile: IGatsbyImageData
      altText: string
    }
  }
  heroGallery?: []
  heroPrimaryButton?: {
    target?: string
    title?: string
    url?: string
  }
  heroSecondaryButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const Hero: React.FC<HeroProps> = props => {
  const {
    heroTitle,
    // heroText,
    // heroGallery,
    // heroSingleImage,
    // heroPrimaryButton,
    // heroSecondaryButton,
  } = props

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
                  Hero: {heroTitle}
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

export default Hero

export const fragment = graphql`
  fragment Hero on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Hero {
      fieldGroupName
      heroTitle
      heroText
      heroBackgroundColor
      heroBackgroundVideo
      heroBackgroundImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      heroPrimaryButton {
        target
        title
        url
      }
      heroSecondaryButton {
        target
        title
        url
      }
      heroGallery {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      heroSingleImage {
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }

  #   fragment contactHero on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Hero {
  #       fieldGroupName
  #       heroTitle
  #       heroSubtitle
  #       heroText
  #       heroBackgroundColor
  #       heroBackgroundVideo
  #       heroBackgroundImage {
  #         altText
  #         localFile {
  #           childImageSharp {
  #             gatsbyImageData
  #           }
  #         }
  #       }
  #       heroButton {
  #         target
  #         title
  #         url
  #       }
  #       heroSecondaryButton {
  #         target
  #         title
  #         url
  #       }
  #       heroGallery {
  #         altText
  #       }
  #     }
  #   }
`
