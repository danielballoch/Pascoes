const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
        resolve: 'gatsby-plugin-page-transitions',
        options: {
          transitionTime: 500
        }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    //prismic
    {
        resolve: 'gatsby-source-prismic',
        options: {
          // The name of your prismic.io repository. This is required.
          // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
          // is 'gatsby-source-prismic-test-site.prismic.io'.
          repositoryName: 'pascoes',
    
          // Set a link resolver function used to process links in your content.
          // Fields with rich text formatting or links to internal content use this
          // function to generate the correct link URL.
          // The document node, field key (i.e. API ID), and field value are
          // provided to the function, as seen below. This allows you to use
          // different link resolver logic for each field if necessary.
          // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
          linkResolver: ({ node, key, value }) => (doc) => {
            `/${doc.uid}`
          },
    
          // Set a list of links to fetch and be made available in your link
          // resolver function.
          // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
          fetchLinks: [
            // Your list of links
          ],
    
          // Set an HTML serializer function used to process formatted content.
          // Fields with rich text formatting use this function to generate the
          // correct HTML.
          // The document node, field key (i.e. API ID), and field value are
          // provided to the function, as seen below. This allows you to use
          // different HTML serializer logic for each field if necessary.
          // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
          htmlSerializer: ({ node, key, value }) => (
            type,
            element,
            content,
            children,
          ) => {
            prismicHtmlSerializer
          },
    
          // Provide an object of Prismic custom type JSON schemas to load into
          // Gatsby. This is required.
          schemas: {
            index: require('./src/prismic-shemas/index.json'),
            contact: require('./src/prismic-shemas/contact.json'),
            services: require('./src/prismic-shemas/services.json'),
            about: require('./src/prismic-shemas/about.json'),
            navigation: require('./src/prismic-shemas/navigation.json'),
            footer: require('./src/prismic-shemas/footer.json')
            // homepage: require('./src/prismic-shemas/homepage.json')
          },
    
          // Set a default language when fetching documents. The default value is
          // '*' which will fetch all languages.
          // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
          lang: '*',
    
          // Add the Prismic Toolbar script to the site. Defaults to false.
          // Set to "legacy" if your repository requires the older toolbar script.
          // See: https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature
          prismicToolbar: true,
    
          // Set a function to determine if images are downloaded locally and made
          // available for gatsby-transformer-sharp for use with gatsby-image.
          // The document node, field key (i.e. API ID), and field value are
          // provided to the function, as seen below. This allows you to use
          // different logic for each field if necessary.
          // This defaults to always return false.
          shouldDownloadImage: ({ node, key, value }) => {
            // Return true to download the image or false to skip.
          },
    
          // Provide a default set of Imgix image transformations applied to
          // Imgix-backed gatsby-image fields. These options will override the
          // defaults set by Prismic.
          // See: https://docs.imgix.com/apis/url
          imageImgixParams: {
            auto: 'compress,format',
            fit: 'max',
            q: 50,
          },
    
          // Provide a default set of Imgix image transformations applied to
          // the placeholder images of Imgix-backed gatsby-image fields. These
          // parameters will be applied over those provided in the above
          // `imageImgixParams` option.
          // See: https://docs.imgix.com/apis/url
          imagePlaceholderImgixParams: {
            w: 100,
            blur: 15,
            q: 50,
          },
    
          // Set the prefix for the filename where type paths for your schemas are
          // stored. The filename will include the MD5 hash of your schemas after
          // the prefix.
          // This defaults to 'prismic-typepaths---${repositoryName}'.
          typePathsFilenamePrefix:
            'prismic-typepaths---pascoes',
        },
      },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
