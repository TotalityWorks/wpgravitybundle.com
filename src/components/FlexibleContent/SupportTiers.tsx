import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface SupportTiersProps extends FlexibleContentProps {
  supportTiersTitle?: string
  supportTiersText?: string
  supportTiersBackgroundColor?: string
  supportTiersButton?: {
    target?: string
    title?: string
    url?: string
  }
  supportTiersCategories?: []
  supportTiersFeatures?: []
}

const SupportTiers: React.FC<SupportTiersProps> = props => {
  const { supportTiersTitle } = props

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
                  Support Tiers: {supportTiersTitle}
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

export default SupportTiers

export const fragment = graphql`
  fragment SupportTiers on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_SupportTiers {
      fieldGroupName
      supportTiersTitle
      supportTiersText
      supportTiersBackgroundColor
      supportTiersButton {
        target
        title
        url
      }
      supportTiersCategories {
        category
      }
      supportTiersFeatures {
        featureTitle
        featureSupport {
          supported
        }
      }
    }
  }

  #   fragment contactSupportTiers on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_SupportTiers {
  #       fieldGroupName
  #       supportTiersTitle
  #       supportTiersText
  #       supportTiersBackgroundColor
  #       supportTiersButton {
  #         target
  #         title
  #         url
  #       }
  #       supportTiersCategories {
  #         category
  #       }
  #       supportTiersFeatures {
  #         featureTitle
  #         featureSupport {
  #           supported
  #         }
  #       }
  #     }
  #   }
`
