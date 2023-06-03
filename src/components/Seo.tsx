import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

interface SeoProps {
  title?: string
  siteTitle?: string
  description?: string
  author?: string
  image?: string
  siteUrl?: string
  siteTwitter?: string
  pathname?: string
  googleVerification?: string
  children?: React.ReactNode
}

const Seo: React.FC<SeoProps> = props => {
  const {
    title,
    siteTitle,
    description,
    author,
    image,
    siteUrl,
    siteTwitter,
    pathname,
    googleVerification,
    children,
  } = props

  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    author: defaultAuthor,
    siteUrl: defaultSiteUrl,
    siteTwitter: defaultSiteTwitter,
  } = useSiteMetadata()

  const seoData = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl || defaultSiteUrl}${image || defaultImage}`,
    url: `${siteUrl || defaultSiteUrl}${pathname || ``}`,
    author: author || defaultAuthor,
    siteTwitter: siteTwitter || defaultSiteTwitter,
  }

  return (
    <>
      {/* Page Title */}
      <title>
        {seoData.title} | {siteTitle}
      </title>
      {/* Google Verification */}
      <meta
        name="google-site-verification"
        content={googleVerification}
        // content="Jv_SK1J3zn41DHIanT49Zq-AVekbHyD0pILppTT7l6g" // GET dynamically
      />
      {/* Page Description */}
      <meta name="description" content={seoData.description} />
      <meta name="image" content={seoData.image} />
      {/* Twitter Card Type */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* Twitter Content Title (max 70 characters) */}
      <meta name="twitter:title" content={seoData.title} />
      {/*  */}
      <meta name="twitter:url" content={seoData.url} />
      {/* Page Description (max 200 characters) */}
      <meta name="twitter:description" content={seoData.description} />
      {/* Twitter Card Image URL.
        Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported.
        Only the first frame of an animated GIF will be used.
        SVG is not supported. */}
      <meta name="twitter:image" content={seoData.image} />
      {/* Twitter Card Image Alt (maximum 420 characters) */}
      <meta name="twitter:image:alt" content={seoData.image} />
      {/* Twitter @username of Website - Required */}
      <meta name="twitter:site" content={seoData.siteTwitter} />
      {/* Twitter @username of Author */}
      <meta name="twitter:creator" content={seoData.author} />
      <link rel="canonical" href={seoData.url} />
      {/* <link rel='shortcut icon' href={data.favicon.publicURL} /> */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  )
}

export default Seo
