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
                type
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
