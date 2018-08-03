import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
`;

const GradientH1 = styled.h1`
  background: ${colors.primary_gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.5rem;
  text-align: center;
`;

const NotFoundPage = () => (
  <Wrapper>
    <GradientH1>404 NOT FOUND</GradientH1>
  </Wrapper>
);

export default NotFoundPage;
