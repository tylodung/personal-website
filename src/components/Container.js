import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import { sizes } from '../theme';

const Container = styled.div`
  margin: ${rhythm(2)} auto;
  ${props => props.width && `max-width: ${props.width};`}
  ${sizes.Tablet} {
    
  }
`;

export default ({ children, width }) => (
  <Container width={width}>
    {children}
  </Container>
);
