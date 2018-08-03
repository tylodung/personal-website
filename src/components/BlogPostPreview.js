import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

const PostPreview = styled.div`
  position: relative;
  padding: ${rhythm(1 / 2)};
  margin: ${rhythm(1.5)};
  opacity: 0;
  animation: 0.5s slideInUp
    ${props => (props.id ? `${(0.1 * props.id) + 0.1}s` : '0.7s')} forwards
    cubic-bezier(0, 0.26, 0.21, 1.01);
  border-radius: 3px;
  ${sizes.Tablet} {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: ${rhythm(2)};
    margin: ${rhythm(1)} ${rhythm(1 / 2)};
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      opacity: 0;
      transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    &:hover::after {
      opacity: 1;
    }
  }
  @keyframes slideInUp {
    0% {
      transform: translateY(75px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 2)};
  display: inline-block;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background: ${colors.primary_gradient};
  }
`;
const Excerpt = styled.p`
  margin-bottom: 10px;
`;
const MetaData = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;
const BlogLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const BlogPostPreview = ({
  id, title, date, excerpt, timeToRead, slug,
}) => (
  <PostPreview id={id}>
    <Title>
      <BlogLink to={slug}>{title}</BlogLink>
    </Title>
    <Excerpt>{excerpt}</Excerpt>
    <MetaData>
      {date} • {timeToRead} minute read
    </MetaData>
  </PostPreview>
);

BlogPostPreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default BlogPostPreview;
