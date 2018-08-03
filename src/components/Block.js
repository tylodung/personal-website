import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

const AnimatedContainer = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  padding: ${rhythm(1 / 2)} ${rhythm(1)};
  margin-bottom: ${rhythm(2)};
  opacity: 0;
  border-radius: 3px;
  background-color: ${colors.bg};
  animation: 0.5s slideInUp
    ${props => (props.id ? `${(0.1 * props.id) + 0.1}s` : '0.75s')} forwards
    cubic-bezier(0, 0.26, 0.21, 1.01);
  z-index: 1;
  &::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      background: ${colors.primary_gradientv2};
      border-radius: 3px 0 0 3px;
      z-index: -100;
    }
  ${sizes.Tablet} {
    display: flex;
    flex-flow: column nowrap;
    margin: ${rhythm(1)} auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      border-radius: 3px;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
      z-index: -1000;
    }
    &::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      background: ${colors.primary_gradientv2};
      border-radius: 3px 0 0 3px;
      z-index: -100;
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

const Title = styled.h2`
  display: inline-block;
  text-align: left;
  margin-left: ${rhythm(1 / 3)};
  ${sizes.Tablet} {
    position: absolute:
    top: 0;
    padding: ${rhythm(1 / 3)} 0;
    text-align: center;
    transition: all 0.1s cubic-bezier(0.57, 0.21, 0.69, 1.25);
  }
`;

const Text = styled.div`
  padding: ${rhythm(1 / 3)};
  transition: all 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
  ${sizes.Desktop} {
    padding: ${rhythm(1)};
  }
`;

class Block extends React.PureComponent {
  render() {
    const { id, title, children } = this.props;
    return (
      <AnimatedContainer id={id}>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </AnimatedContainer>
    );
  }
}

Block.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
};

Block.defaultProps = {
  id: undefined,
};

export default Block;
