module.exports = {
  siteMetadata: {
    title: "D.O.T. Die Offene Tür",
    author: "D.O.T Projekt",
    description: "D.O.T Research Project Webpage"
  },
  pathPrefix: '/',
  plugins: [
    
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-124169160-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-react-svg-1.1.1',
    //   options: {
    //       include: /assets\/svg/
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass'
  ]
}
