import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { colors, sizes } from '../theme';
import { rhythm } from '../utils/typography';

const activeClassName = 'mobile-nav-item-active';
const NavLink = styled(Link).attrs({
  activeClassName,
})`
  color: ${colors.primary};
  text-align: center;
  text-decoration: none;
  padding: ${rhythm(1 / 3)} 0;
  flex: 1 1 25%;
  background-color: white;
  &.${activeClassName} {
    transition: all 0.3s ease-in-out;
    background-color: transparent;
  }
`;

const MobileNavItem = ({ linkTo, label }) => (
  <NavLink to={linkTo}>
    <div>{label}</div>
  </NavLink>
);

const MobileNavigation = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.bg};
  box-shadow: 0px -8px 20px -18px rgba(0, 0, 0, 0.7);
  z-index: 1000;
  &::before {
    position: absolute;
    bottom: 0;
    display: block;
    content: '';
    height: 44px;
    width: 100%;
    background: ${colors.primary_gradient};
    z-index: -1;
  }
  ${sizes.Tablet} {
    display: none;
  }
`;

export default () => (
  <MobileNavigation role="navigation">
    <MobileNavItem linkTo="/portfolio" label="Portfolio" />
    <MobileNavItem linkTo="/blog" label="Blog" />
    <MobileNavItem linkTo="/about" label="About" />
    <MobileNavItem linkTo="/contact" label="Contact" />
  </MobileNavigation>
);
