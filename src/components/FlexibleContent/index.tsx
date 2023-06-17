import React, { lazy, Suspense } from "react"

// import types
import type { FlexibleContentComponents } from "../../interfaces"

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

        return (
          Component && (
            <div key={index}>
              <Suspense fallback={<Component {...component} {...data} />}>
                <Component {...component} {...data} />
              </Suspense>
            </div>
          )
        )
      })
  }
}

export default FlexibleContent
