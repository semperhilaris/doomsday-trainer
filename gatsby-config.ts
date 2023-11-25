import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Doomsday Trainer`,
    siteTitleAlt: `Doomsday Trainer`,
    siteHeadline: `Doomsday Trainer`,
    siteUrl: `https://doomsday.semperhilaris.com`,
    siteDescription: `Welcome to the Doomsday Trainer!`,
    siteImage: `/og_image.png`,
    author: `@semper_hilaris`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Doomsday Trainer`,
        short_name: `Doomsday Trainer`,
        description: ` `,
        start_url: `/`,
        background_color: `#343334`,
        theme_color: `#343334`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
