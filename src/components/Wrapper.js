import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

const Wrapper = styled.div`
  margin: 0 ${rhythm(1)};
  opacity: 0;
  transform: translateY(50px);
  animation: 0.3s fadeIn 0.4s ease-in-out forwards;
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export default Wrapper;
