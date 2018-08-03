import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

import github from '../assets/github_icon.svg';
import codepen from '../assets/codepen_icon.svg';
import linkedin from '../assets/linkedin_icon.svg';

const Navigation = styled.header`
  position: relative;
  left: 0;
  top: 0px;
  height: 65px;
  width: 100%;
  margin: 0;
  font-size: 1.1rem;
  background-color: transparent;
  z-index: 1000;
  &::before {
    position: absolute;
    top: 0;
    display: block;
    content: '';
    height: 4px;
    width: 100%;
    background: ${colors.primary_gradient};
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const RootNav = styled.ul`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  top: 5px;
`;

const LogoSection = styled.li`
  position: relative;
  margin-left: ${rhythm(1)};
  justify-self: flex-start;
`;

const PrimarySection = styled.li`
  display: none;
  margin-left: ${rhythm(2)};
  justify-content: center;
  > a {
    margin: 0 ${rhythm(0.3)};
  }
  ${sizes.Tablet} {
    display: flex;
  }
`;

const SocialSection = styled.li`
  position: absolute;
  display: flex;
  top: 15px;
  right: ${rhythm(1)};
  > a:nth-child(2) {
    margin: 0 ${rhythm(1)};
  }
  transform: scale(0.85);
  ${sizes.Mobile} {
    transform: scale(1);
  }
`;
const activeClassName = 'nav-item-active';
const NavItem = styled(Link).attrs({
  activeClassName,
})`
  color: ${colors.primary};
  font-weight: 400;
  &.${activeClassName}:after {
    transform: translateY(0);
    opacity: 1;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.53, 0, 0.38, 1),
      opacity 0.3s cubic-bezier(0.53, 0, 0.38, 1);
    transform: translateY(5px);
    background-color: ${colors.primary};
  }
  &:hover::after {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SocialLink = styled.a`
  color: ${colors.primary};
`;

export default () => (
  <Navigation role="navigation">
    <Container>
      <RootNav>
        <LogoSection>
          <Link exact to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="gradient">
                  <stop offset="5%" stopColor="#fc466b" />
                  <stop offset="95%" stopColor="#3f5efb" />
                </linearGradient>
              </defs>
              <g>
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="black"
                  strokeWidth="4px"
                  fill="none"
                />
                <text
                  x="50"
                  y="57.5"
                  fontSize="20px"
                  fontWeight="700"
                  fontFamily="Helvetica Neue"
                  textAnchor="middle"
                  fill="black"
                >
                  MTR
                </text>
              </g>
            </svg>
          </Link>
        </LogoSection>
        <PrimarySection>
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </PrimarySection>
        <SocialSection>
          <SocialLink href="https://github.com/reillym" target="_blank">
            <img height="30" width="30" src={github} alt="github" />
          </SocialLink>
          <SocialLink href="https://codepen.io/Reillym/" target="_blank">
            <img height="30" width="30" src={codepen} alt="codepen" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/michael-reilly-305075126/"
            target="_blank"
          >
            <img height="30" width="23" src={linkedin} alt="linkedin" />
          </SocialLink>
        </SocialSection>
      </RootNav>
    </Container>
  </Navigation>
);
