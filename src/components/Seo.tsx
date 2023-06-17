import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

interface SeoProps {
  pageTitle?: string
  siteTitle?: string
  description?: string
  author?: string
  image?: string
  imageAlt?: string
  siteUrl?: string
  siteTwitter?: string
  twitterDescription?: string
  twitterTitle?: string
  twitterImage?: string
  twitterImageAlt?: string
  pathname?: string
  googleVerification?: string
  children?: React.ReactNode
}

const Seo: React.FC<SeoProps> = props => {
  const {
    pageTitle,
    siteTitle,
    description,
    author,
    image,
    imageAlt,
    siteUrl,
    siteTwitter,
    twitterDescription,
    twitterTitle,
    twitterImage,
    twitterImageAlt,
    pathname,
    googleVerification,
    children,
  } = props

  const {
    pageTitle: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    author: defaultAuthor,
    siteUrl: defaultSiteUrl,
    siteTwitter: defaultSiteTwitter,
  } = useSiteMetadata()

  const seoData = {
    pageTitle: pageTitle || defaultTitle,
    siteTitle: siteTitle || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl || defaultSiteUrl}${image || defaultImage}`,
    imageAlt: `${imageAlt}`,
    url: `${siteUrl || defaultSiteUrl}/${pathname || ``}`,
    author: author || defaultAuthor,
    siteTwitter: siteTwitter || defaultSiteTwitter,
    twitterDescription: twitterDescription || description || defaultDescription,
    twitterTitle: twitterTitle || pageTitle || defaultTitle,
    twitterImage: `${siteUrl || defaultSiteUrl}${
      twitterImage || image || defaultImage
    }`,
  }

  return (
    <>
      {/* Page Title */}
      <title>
        {seoData.pageTitle} | {seoData.siteTitle}
      </title>
      {/* Google Verification */}
      <meta name="google-site-verification" content={googleVerification} />
      {/* Page Description */}
      <meta name="description" content={seoData.description} />
      <meta name="image" content={seoData.image} />
      {/* Twitter Card Type */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* Twitter Content Title (max 70 characters) */}
      <meta name="twitter:title" content={seoData.pageTitle} />
      {/* Page Description (max 200 characters) */}
      <meta name="twitter:description" content={twitterDescription} />
      {/* Twitter Card Image URL.
        Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported.
        Only the first frame of an animated GIF will be used.
        SVG is not supported. */}
      <meta name="twitter:image" content={seoData.twitterImage} />
      {/* Twitter Card Image Alt (maximum 420 characters) */}
      <meta name="twitter:image:alt" content={seoData.imageAlt} />
      {/* Twitter @username of Website - Required */}
      <meta name="twitter:site" content={seoData.siteTwitter} />
      {/* Twitter @username of Author */}
      <meta name="twitter:creator" content={seoData.author} />
      <link rel="canonical" href={seoData.url} />

      {/* <link rel='shortcut icon' href={data.favicon.publicURL} /> */}

      {/* <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      /> */}

      {children}
    </>
  )
}

export default Seo
