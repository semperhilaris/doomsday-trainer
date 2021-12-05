module.exports = {
  siteMetadata: {
    title: `Doomsday Trainer`,
    description: `Practice calculating the weekday of any date!`,
    author: {
      name: `David Fröhlich`,
      content: ``,
    },
    social: {
      github: `https://github.com/semperhilaris`,
    },
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/index.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Doomsday Trainer`,
        short_name: `Doomsday Trainer`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
