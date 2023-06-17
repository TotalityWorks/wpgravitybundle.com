import React from "react"
import { graphql } from "gatsby"
// import Parser from "html-react-parser"

// import types
import type { FlexibleContentProps } from "../../interfaces"

// import components
import Edges from "../Layout/Edges"

export interface TextAreaProps extends FlexibleContentProps {
  textAreaTitle?: string
  textAreaText?: string
  textAreaBackgroundColor?: string
  textAreaButton?: {
    target?: string
    title?: string
    url?: string
  }
  textArea?: []
}

const TextArea: React.FC<TextAreaProps> = props => {
  const { textAreaTitle } = props

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
                  Text Area: {textAreaTitle}
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

export default TextArea

export const TextAreaFallback: React.FC = () => {
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
                Text Area: Text Area Title
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
  fragment TextArea on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextArea {
      fieldGroupName
      textAreaTitle
      textAreaText
      textAreaBackgroundColor
      textAreaButton {
        target
        title
        url
      }
      textArea {
        title
        text
      }
    }
  }

  #   fragment contactTextArea on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextArea {
  #       fieldGroupName
  #       textAreaTitle
  #       textAreaText
  #       textAreaBackgroundColor
  #       textAreaButton {
  #         target
  #         title
  #         url
  #       }
  #       textArea {
  #         title
  #         text
  #       }
  #     }
  #   }
`
