import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface LocationProps extends FlexibleContentProps {
  locationTitle?: string
  locationText?: string
  locationBackgroundColor?: string
  locationButton?: {
    target?: string
    title?: string
    url?: string
  }
  locationMap?: string
  locationAddress?: string
  locationPhoneNumber?: string
  locationHours?: string
}

const Location: React.FC<LocationProps> = props => {
  const { locationTitle } = props

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
                  Location: {locationTitle}
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

export default Location

export const LocationFallback: React.FC = () => {
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
                Location: Location Title
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
  fragment Location on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Location {
      fieldGroupName
      locationTitle
      locationText
      locationBackgroundColor
      locationButton {
        target
        title
        url
      }
      locationMap
      locationAddress
      locationPhone
      locationHours
    }
  }

  #   fragment contactLocation on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Location {
  #       fieldGroupName
  #       locationTitle
  #       locationText
  #       locationBackgroundColor
  #       locationButton {
  #         target
  #         title
  #         url
  #       }
  #       locationMap
  #       locationAddress
  #       locationPhone
  #       locationHours
  #     }
  #   }
`
