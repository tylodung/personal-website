import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const EmailLink = styled.a`
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #3f5efb;
  }
`;

export default () => (
  <div>
    <Header>
      <h1>Contact</h1>
      <p>
        If you would like to contact me, please send me an email at{' '}
        <EmailLink href="mailto:1reillym@gmail.com">1reillym@gmail.com</EmailLink>.
      </p>
    </Header>
  </div>
);
