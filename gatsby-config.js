const defaultLanguage = 'en';

module.exports = {
  siteMetadata: {
    siteUrl: `https://gatsby-theme-i18n-react-intl.netlify.app`,
    title: "Make City",
    description: `Default example for i18n with react-intl`,
    author: `LekoArts`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Make the Kharkiv City`,
        short_name: `Make a City`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: defaultLanguage,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./i18n/react-intl/${defaultLanguage}.json`,
      },
    },
  ],
}
