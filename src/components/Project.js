import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

const Container = styled.div`
  position: relative;
  background-color: ${props => props.color};
  padding: ${rhythm(1)};
  ${sizes.Tablet} {
    padding: ${rhythm(5)};
  }
`;

const Image = styled(Img)`
  z-index: 1000;
  transform: scale(0);
  animation: 0.7s grow ${props => (props.id ? `${(0.1 * props.id) + 0.3}s` : '0.7s')} forwards cubic-bezier(.51,.47,.61,.97);
  opacity: 0;
  ${sizes.Tablet} {
    max-width: 800px;
    margin: 0 auto;
  }
  @keyframes grow {
    0% {
      transform: scale(0.2);
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  /* Adjust image positioning (if image covers area with defined height) and add font-family for polyfill */
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'; // needed for IE9+ polyfill
  }
`;

const Project = ({
  id, name, sizes, color,
}) => (
  <Image id={id} sizes={sizes} title={`Image of ${name}`} />
);

Project.defaultProps = {
  color: 'white',
};

Project.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Project;
