import React from "react"
import { graphql } from "gatsby"
// import Parser from "html-react-parser"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface TextBlockProps extends FlexibleContentProps {
  textBlockBackgroundColor: string
  textBlockTitle: string
  textBlockText: string
  textBlockLocation: string
  textBlockButton: {
    target?: string
    title?: string
    url?: string
  }
}

const TextBlock: React.FC<TextBlockProps> = props => {
  const { textBlockTitle } = props

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
                  Text Block: {textBlockTitle}
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

export default TextBlock

export const TextBlockFallback: React.FC = () => {
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
                Text Block: Text Block Title
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
  fragment TextBlock on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextBlock {
      fieldGroupName
      textBlockBackgroundColor
      textBlockTitle
      textBlockText
      textBlockLocation
      textBlockButton {
        target
        title
        url
      }
    }
  }

  #   fragment contactTextBlock on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextBlock {
  #       fieldGroupName
  #       textBlockBackgroundColor
  #       textBlockTitle
  #       textBlockText
  #       textBlockLocation
  #       textBlockButton {
  #         target
  #         title
  #         url
  #       }
  #     }
  #   }
  #
`
