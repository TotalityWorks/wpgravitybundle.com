import React from "react"
import { graphql } from "gatsby"

// import types
import type { FlexibleContentProps } from "../../interfaces"

// import components
import Edges from "../Layout/Edges"

export interface ListProps extends FlexibleContentProps {
  listTitle?: string
  listText?: string
  listBackgroundColor?: string
  listButton?: {
    target?: string
    title?: string
    url?: string
  }
  list?: []
}

const List: React.FC<ListProps> = props => {
  const { listTitle } = props

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
                  List: {listTitle}
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

export default List

export const ListFallback: React.FC = () => {
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
                List: List Title
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
  fragment List on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_List {
      fieldGroupName
      listTitle
      listText
      listBackgroundColor
      listButton {
        target
        title
        url
      }
      list {
        title
        text
      }
    }
  }

  #   fragment contactList on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_List {
  #       fieldGroupName
  #       listTitle
  #       listText
  #       listBackgroundColor
  #       listButton {
  #         target
  #         title
  #         url
  #       }
  #       list {
  #         title
  #         text
  #       }
  #     }
  #   }
`
