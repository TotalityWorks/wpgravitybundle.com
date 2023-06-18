import React from "react"
import { graphql } from "gatsby"

// import types
import type { FlexibleContentProps } from "../../interfaces"

// import components
import Edges from "../Layout/Edges"
import SingleForm from "../SingleForm"
import useGravityData from "../../hooks/useGravityData"

export interface FormProps extends FlexibleContentProps {
  formId?: string
  formTitle?: string
  formText?: string
  formBackgroundColor?: string
}

const Form: React.FC<FormProps> = props => {
  const {
    formId,
    formTitle,
    // formText,
    // formBackgroundColor
  } = props

  const { allWpGfForm } = useGravityData()

  const form = allWpGfForm.nodes.find(
    (form: any) => Number(form.databaseId) === Number(formId)
  )

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
                  Form: {formTitle}
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <pre>{JSON.stringify(props, null, 2)}</pre>
                  {form && (
                    <>
                      <SingleForm form={form} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Edges>
    </>
  )
}

export default Form

export const FormFallback: React.FC = () => {
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
                Form: Form Title
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
  fragment Form on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Form {
      fieldGroupName
      formTitle
      formText
      formBackgroundColor
      formId
    }
  }

  #   fragment contactForm on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Form {
  #       fieldGroupName
  #       formTitle
  #       formText
  #       formBackgroundColor
  #       formId
  #     }
  #   }
`
