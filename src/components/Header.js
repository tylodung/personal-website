import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  padding: 50px;
  background-color: ${props => (props.color ? props.color : 'transparent')};
  animation: 0.3s slideIn 0.3s forwards cubic-bezier(0,.26,.21,1.01);
  opacity: 0;
  @keyframes slideIn {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default ({ children, color }) => (
  <Header color={color}>
    {children}
  </Header>
);
