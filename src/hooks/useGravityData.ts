import { useStaticQuery, graphql } from "gatsby"

const useGravityData = () => {
  const { allWpGfForm } = useStaticQuery(
    graphql`
      query FormQuery {
        allWpGfForm {
          nodes {
            databaseId
            cssClass
            formFields {
              nodes {
                databaseId
                type
                visibility
                pageNumber
                ... on WpTextField {
                  cssClass
                  defaultValue
                  description
                  descriptionPlacement
                  errorMessage
                  isRequired
                  label
                  labelPlacement
                  placeholder
                  size
                }
                ... on WpTextAreaField {
                  cssClass
                  defaultValue
                  description
                  descriptionPlacement
                  errorMessage
                  isRequired
                  label
                  labelPlacement
                  placeholder
                  size
                }
              }
            }
            submitButton {
              text
              type
            }
          }
        }
      }
    `
  )
  return { allWpGfForm }
}

export default useGravityData
