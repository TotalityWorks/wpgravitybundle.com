import React from "react"
import { graphql, Link, HeadFC } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Parser from "html-react-parser"

// import types
import type { ArticleItem, CategoryPageDataType } from "../../interfaces"

// import components
import Layout from "../../components/Layout/Layout"
import Edges from "../../components/Layout/Edges"
import Seo from "../../components/Seo"

const Category = (props: any) => {
  const {
    data: { wpCategory, posts },
  } = props

  return (
    <Layout isCategory={true}>
      <Edges size="lg">
        {wpCategory.name && <h1 children={wpCategory.name} />}

        {wpCategory.description && <p children={wpCategory.description} />}

        {posts &&
          posts.nodes.map((post: ArticleItem) => {
            const image =
              post?.archiveThumbnail?.node?.localFile &&
              getImage(post.archiveThumbnail.node.localFile)

            return (
              <div key={post.uri}>
                {image && (
                  <GatsbyImage
                    image={image}
                    alt={post?.archiveThumbnail?.node?.altText || ""}
                    className="rounded-lg shadow-lg object-cover object-center"
                  />
                )}

                {post.title && (
                  <Link to={`${post.uri}`}>
                    <h2 children={post.title} />
                  </Link>
                )}

                {post.categories && (
                  <p>
                    {post.categories &&
                      post.categories.nodes.map(
                        (cat: { name: string; uri: string }, i: number) => {
                          return (
                            <Link
                              key={cat.uri}
                              to={cat.uri}
                              className={`${i === 0 ? "" : "ml-[5px]"}`}
                              children={cat.name}
                            />
                          )
                        }
                      )}
                  </p>
                )}

                {post.excerpt && <div children={Parser(post.excerpt)} />}
              </div>
            )
          })}
      </Edges>
    </Layout>
  )
}

export default Category

export const Head: HeadFC<CategoryPageDataType> = props => {
  const {
    data: {
      categories: { name },
      allWp: { nodes },
    },
  } = props
  const siteTitle = nodes[0].generalSettings.title

  return <Seo pageTitle={name} siteTitle={siteTitle} />
}

export const categoryQuery = graphql`
  query Category($id: String!, $postsPerPage: Int!, $offset: Int!) {
    wpCategory(id: { eq: $id }) {
      description
      name
      id
      uri
    }

    categories: allWpCategory {
      nodes {
        ...PostCategory
      }
    }

    posts: allWpPost(
      sort: { date: DESC }
      limit: $postsPerPage
      skip: $offset
      filter: { categories: { nodes: { elemMatch: { id: { eq: $id } } } } }
    ) {
      nodes {
        ...PostFragment
      }
    }

    allWp {
      nodes {
        generalSettings {
          title
        }
      }
    }
  }
`
