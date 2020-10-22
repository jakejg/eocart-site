/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || "https://ecocart.io/440x280.png"
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: (metaDescription == "A free and simple way to show your customers you care about the environment as much as they do." ? "EcoCart is a Chrome extension that automatically calculates and offsets the carbon footprint of your order. Earn EcoPoints and redeem rewards when you shop like normal at over 10,000 of your favorite sites!" : metaDescription),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: (metaDescription == "A free and simple way to show your customers you care about the environment as much as they do." ? "EcoCart is a Chrome extension that automatically calculates and offsets the carbon footprint of your order. Earn EcoPoints and redeem rewards when you shop like normal at over 10,000 of your favorite sites!" : metaDescription),
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
