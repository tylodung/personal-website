import React from 'react';

import Container from '../components/Container';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

import { colors } from '../theme';


export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Header>
        <h1>{post.frontmatter.title}</h1>
      </Header>
      <Container width="1000px">
        <Wrapper dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
