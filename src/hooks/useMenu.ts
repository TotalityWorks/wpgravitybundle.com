import { graphql, useStaticQuery } from "gatsby"

interface UseMenuItemsProps {
  location?: string
  slug?: string
}

const useMenu = ({ location, slug }: UseMenuItemsProps) => {
  const {
    allWp,
    allWpMenu: { nodes },
  } = useStaticQuery(graphql`
    {
      allWpMenu {
        nodes {
          slug
          locations
          menuItems {
            nodes {
              uri
              url
              label
              target
              parentDatabaseId
              cssClasses
            }
          }
        }
      }
      allWp {
        nodes {
          generalSettings {
            title
            url
            description
            dateFormat
          }
        }
      }
    }
  `)

  if (location) {
    const menu =
      nodes && nodes.find((node: any) => node.locations.includes(location))
    return { menu: menu?.menuItems?.nodes, siteInfo: allWp.nodes[0] }
  }

  if (slug) {
    const menu = nodes.find((node: any) => node.slug === slug)
    return { menu: menu?.menuItems?.nodes, siteInfo: allWp.nodes[0] }
  }
  return { menu: [], siteInfo: allWp.nodes[0] }
}

export default useMenu
