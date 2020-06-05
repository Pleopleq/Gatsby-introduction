module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby Workshop',
    descriptions: 'A site built to learn how Gatsby works',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts', 
        path: 'posts',
      }
    }
  ],
};
