import React from "react"
import { PageProps } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

import { BannerProps } from "./components/FlexibleContent/Banner"
import { CallToActionProps } from "./components/FlexibleContent/CallToAction"
import { CarouselProps } from "./components/FlexibleContent/Carousel"
import { DataTableProps } from "./components/FlexibleContent/DataTable"
import { FaqProps } from "./components/FlexibleContent/Faq"
import { FeatureLinksProps } from "./components/FlexibleContent/FeatureLinks"
import { FormProps } from "./components/FlexibleContent/Form"
import { GalleryProps } from "./components/FlexibleContent/Gallery"
import { HeroProps } from "./components/FlexibleContent/Hero"
import { LatestArticlesProps } from "./components/FlexibleContent/LatestArticles"
import { LinkBoxesProps } from "./components/FlexibleContent/LinkBoxes"
import { ListProps } from "./components/FlexibleContent/List"
import { LocationProps } from "./components/FlexibleContent/Location"
import { LogosProps } from "./components/FlexibleContent/Logos"
import { NavBlockProps } from "./components/FlexibleContent/NavBlock"
import { SupportTiersProps } from "./components/FlexibleContent/SupportTiers"
import { TextAreaProps } from "./components/FlexibleContent/TextArea"
import { TextBlockProps } from "./components/FlexibleContent/TextBlock"
import { TextImageProps } from "./components/FlexibleContent/TextImage"
import { VideosProps } from "./components/FlexibleContent/Videos"

interface Image {
  node: {
    localFile:
      | IGatsbyImageData
      | {
          childImageSharp: {
            gatsbyImageData: {
              images: {
                fallback: {
                  src: string
                }
              }
            }
          }
        }
    altText: string
  }
}

interface ArticleItem {
  title: string
  excerpt: string
  uri: string
  categories: { nodes: any }
  thumbnail: Image
  archiveThumbnail: Image
}

interface FlexibleContentProps extends PageProps {
  title?: string
  slug?: string
}

interface DataType {
  allWp: {
    nodes: {
      generalSettings: {
        title: string
        description: string
      }
      acfOptionsGlobalOptions: {
        websiteSeoInfo: {
          websiteUrl: string
          twitterHandle: string
        }
      }
      seo: {
        webmaster: {
          googleVerify: string
        }
      }
    }[]
  }
}

interface PageDataType extends DataType {
  page: {
    title?: string
    uri?: string
    slug?: string
    template?: any
  }
}

interface CategoryPageDataType extends DataType {
  categories: {
    name?: string
    uri?: string
  }
}

interface PostDataType extends DataType {
  wpPost: {
    title?: string
    content?: string
    featuredImage?: Image
    author?: {
      node?: {
        name?: string
        userInfo?: {
          twitterHandle?: string
        }
      }
    }
    categories?: any
  }
}

interface TemplatePageProps extends PageProps {
  data: PageDataType
}

interface TemplatePostProps extends PageProps {
  data: PostDataType
}

interface FlexibleContentComponents {
  Banner: React.FC<BannerProps>
  CallToAction: React.FC<CallToActionProps>
  Carousel: React.FC<CarouselProps>
  DataTable: React.FC<DataTableProps>
  Faq: React.FC<FaqProps>
  FeatureLinks: React.FC<FeatureLinksProps>
  Form: React.FC<FormProps>
  Gallery: React.FC<GalleryProps>
  Hero: React.FC<HeroProps>
  LatestArticles: React.FC<LatestArticlesProps>
  LinkBoxes: React.FC<LinkBoxesProps>
  List: React.FC<ListProps>
  Location: React.FC<LocationProps>
  Logos: React.FC<LogosProps>
  NavBlock: React.FC<NavBlockProps>
  SupportTiers: React.FC<SupportTiersProps>
  TextArea: React.FC<TextAreaProps>
  TextBlock: React.FC<TextBlockProps>
  TextImage: React.FC<TextImageProps>
  Videos: React.FC<VideosProps>
}

export {
  ArticleItem,
  FlexibleContentProps,
  FlexibleContentComponents,
  TemplatePageProps,
  TemplatePostProps,
  PageDataType,
  CategoryPageDataType,
  PostDataType,
}
