import React from 'react';
import BlogPostPreview from '../components/BlogPostPreview';

import Container from '../components/Container';
import Header from '../components/Header';

export default ({ data }) => (
  <div>
    <Header>
      <h1>Blog</h1>
      <p>{data.allMarkdownRemark.totalCount} Posts</p>
    </Header>
    <Container width="1000px">
      {data.allMarkdownRemark.edges.map(({ node }, i) => (
        <BlogPostPreview
          key={node.frontmatter.title}
          id={i + 1}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
          timeToRead={node.timeToRead}
          slug={node.fields.slug}
        />
      ))}
    </Container>
  </div>
);

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
