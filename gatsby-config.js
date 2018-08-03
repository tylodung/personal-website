module.exports = {
  siteMetadata: {
    title: 'Michael T. Reilly',
    description: 'Software Developer / User Interface Design',
  },
  plugins: [
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mtreilly.me',
        short_name: 'MTR',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#000',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'src', path: `${__dirname}/src` },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: { pathToConfigModule: 'src/utils/typography.js' },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
  ],
};
