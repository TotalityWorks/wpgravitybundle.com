import React, { lazy } from "react"

// import components
import { FlexibleContentComponents } from "../../interfaces"
import { SuspenseHelper } from "../SuspenseHelper"

// import fallback components
import { BannerFallback } from "./Banner"
import { CallToActionFallback } from "./CallToAction"
import { CarouselFallback } from "./Carousel"
import { DataTableFallback } from "./DataTable"
import { FaqFallback } from "./Faq"
import { FeatureLinksFallback } from "./FeatureLinks"
import { FormFallback } from "./Form"
import { GalleryFallback } from "./Gallery"
import { HeroFallback } from "./Hero"
import { LatestArticlesFallback } from "./LatestArticles"
import { LinkBoxesFallback } from "./LinkBoxes"
import { ListFallback } from "./List"
import { LocationFallback } from "./Location"
import { LogosFallback } from "./Logos"
import { NavBlockFallback } from "./NavBlock"
import { SupportTiersFallback } from "./SupportTiers"
import { TextAreaFallback } from "./TextArea"
import { TextBlockFallback } from "./TextBlock"
import { TextImageFallback } from "./TextImage"
import { VideosFallback } from "./Videos"

// lazy load flexible components
const Banner = lazy(() => import("./Banner"))
const CallToAction = lazy(() => import("./CallToAction"))
const Carousel = lazy(() => import("./Carousel"))
const DataTable = lazy(() => import("./DataTable"))
const Faq = lazy(() => import("./Faq"))
const FeatureLinks = lazy(() => import("./FeatureLinks"))
const Form = lazy(() => import("./Form"))
const Gallery = lazy(() => import("./Gallery"))
const Hero = lazy(() => import("./Hero"))
const LatestArticles = lazy(() => import("./LatestArticles"))
const LinkBoxes = lazy(() => import("./LinkBoxes"))
const List = lazy(() => import("./List"))
const Location = lazy(() => import("./Location"))
const Logos = lazy(() => import("./Logos"))
const NavBlock = lazy(() => import("./NavBlock"))
const SupportTiers = lazy(() => import("./SupportTiers"))
const TextArea = lazy(() => import("./TextArea"))
const TextImage = lazy(() => import("./TextImage"))
const TextBlock = lazy(() => import("./TextBlock"))
const Videos = lazy(() => import("./Videos"))

interface Props {
  components?: any
  data?: {
    title?: string
    uri?: string
    slug?: string
  }
}

const allComponents: FlexibleContentComponents = {
  Banner,
  CallToAction,
  Carousel,
  DataTable,
  Faq,
  FeatureLinks,
  Form,
  Gallery,
  Hero,
  LatestArticles,
  LinkBoxes,
  List,
  Location,
  Logos,
  NavBlock,
  SupportTiers,
  TextArea,
  TextBlock,
  TextImage,
  Videos,
}

const allComponentsFallbacks = {
  Banner: BannerFallback,
  CallToAction: CallToActionFallback,
  Carousel: CarouselFallback,
  DataTable: DataTableFallback,
  Faq: FaqFallback,
  FeatureLinks: FeatureLinksFallback,
  Form: FormFallback,
  Gallery: GalleryFallback,
  Hero: HeroFallback,
  LatestArticles: LatestArticlesFallback,
  LinkBoxes: LinkBoxesFallback,
  List: ListFallback,
  Location: LocationFallback,
  Logos: LogosFallback,
  NavBlock: NavBlockFallback,
  SupportTiers: SupportTiersFallback,
  TextArea: TextAreaFallback,
  TextBlock: TextBlockFallback,
  TextImage: TextImageFallback,
  Videos: VideosFallback,
}

const FlexibleContent: React.FC<Props> = props => {
  const { components, data } = props

  if (!!components) {
    return components
      .filter((component: any) => !!component)
      .map((component: any, index: any) => {
        const { fieldGroupName } = component
        if (!fieldGroupName) {
          return null
        }

        const type: keyof FlexibleContentComponents = fieldGroupName
          .split("_")
          .slice(-1)[0]

        const Component = allComponents[type]
        const ComponentFallback = allComponentsFallbacks[type]

        return (
          Component && (
            <div key={index}>
              <SuspenseHelper fallback={<ComponentFallback />}>
                <Component {...component} {...data} />
              </SuspenseHelper>
            </div>
          )
        )
      })
  }
}

export default FlexibleContent
