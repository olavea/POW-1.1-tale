module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lillian at the POW! Launch Lunch`,
        short_name: `POW!Lillian`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `book/images/UnicornLillian2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        basePath: `/`,
        imagePath: `book/images`,
        // audioPath: `book/audio`,
        infoLink: {
          title: "POW! on GitHub",
          url: `https://github.com/raae/pow-app.git`,
        },
      },
    },
  ],
  siteMetadata: {
    // First page will have siteTile as page title,
    // the other pages follow this configuration <page#> | <siteTitle>.
    siteTitle: `POW! Lillian at the Launch Lunch`,
    // Used for SEO
    siteDescription: `POW! Lillian (4.5 🦄) and Benedicte @raae at the Launch Lunch at Vespa Café Oslo Norway`,
    // Will be set on the <html /> tag
    siteLanguage: `no`,
    // Twitter Handle
    author: `@OlaHolstVea`,
  },
}
