import React from "react"
import { graphql } from "gatsby"

// import types
import type { FlexibleContentProps } from "../../interfaces"

// import components
import Edges from "../Layout/Edges"

export interface BannerProps extends FlexibleContentProps {
  bannerTitle?: string
  bannerContent?: string
  bannerBackgroundColor?: string
  bannerLink?: {
    target?: string
    title?: string
    url?: string
  }
}

const Banner: React.FC<BannerProps> = props => {
  const {
    bannerTitle,
    // bannerContent,
    // bannerBackgroundColor,
    // bannerLink,
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
                  Banner: {bannerTitle}
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

export default Banner

export const BannerFallback: React.FC = () => {
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
                Banner: Banner Title
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
  fragment Banner on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Banner {
      fieldGroupName
      bannerTitle
      bannerContent
      bannerBackgroundColor
      bannerLink {
        target
        title
        url
      }
    }
  }

  #   fragment contactBanner on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Banner {
  #       fieldGroupName
  #       bannerTitle
  #       bannerContent
  #       bannerBackgroundColor
  #       bannerLink {
  #         target
  #         title
  #         url
  #       }
  #     }
  #   }
`
