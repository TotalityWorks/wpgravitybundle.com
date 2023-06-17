# Yoast SEO & Headless WordPress

This template utilizes the `Yoast SEO` plugin for SEO controls in WordPress, and `Add WPGraphQL SEO` by Ash Hitchcock to access it with `WPGraphQL`. This information and other basic WordPress settings are passed into our SEO component using Gatsby's `Head` component in each template and the 404 page.

## Seo.tsx
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mollis magna sed viverra. Donec eu pulvinar diam, in varius diam. Morbi et mauris id dolor consectetur vulputate quis et ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu facilisis libero. Pellentesque malesuada ligula sed hendrerit vehicula. Maecenas in lacus elit.


### Seo Props
If you pass no props into the SEO component, then it will grab the default information from your `gatsby-config.js` file. Specifically it will grab `title`, `description`, `author`, `siteTwitter`, and `siteUrl` from `siteMetadata`.

All of these can be replaced with values from your WordPress installation, just in case you or your client (or their marketing team) wish to rebrand and have no easy access to `gatsby-config.js`.

#### 404.tsx Page SEO
The 404 Page only passes a `pageTitle` prop to the SEO component that says '404 Not Found'. This, of course, can be changed and added to.

#### Page Template SEO
```ts
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
        }
      }
      seo: {
        webmaster: {
          googleVerify: string
        }
        social: {
          twitter: {
            username: string
          }
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
```

#### Post Template SEO

#### Category Template SEO