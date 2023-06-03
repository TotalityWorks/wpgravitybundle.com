import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

// interface Video {
//   videoTitle: string
//   videoText: string
//   videoEmbedLink: string
//   downloadableItems: []
// }

export interface VideosProps extends FlexibleContentProps {
  videosTitle?: string
  videosText?: string
  videosBackgroundColor?: string
  videosButton?: {
    target?: string
    title?: string
    url?: string
  }
  videos: []
}

const Videos: React.FC<VideosProps> = props => {
  const { videosTitle } = props

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
                  Videos: {videosTitle}
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

export default Videos

export const VideosFallback: React.FC = () => {
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
                Videos: Videos Title
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
  fragment Videos on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Videos {
      fieldGroupName
      videosTitle
      videosText
      videosBackgroundColor
      videosButton {
        target
        title
        url
      }
      videos {
        text
        videoEmbedLink
      }
    }
  }

  #   fragment contactVideos on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Videos {
  #       fieldGroupName
  #       videosTitle
  #       videosText
  #       videosBackgroundColor
  #       videosButton {
  #         target
  #         title
  #         url
  #       }
  #       videos {
  #         text
  #         videoEmbedLink
  #       }
  #     }
  #   }
`
