import React from 'react';
import styled from 'styled-components';

import Container from '../components/Container';
import Block from '../components/Block';
import Header from '../components/Header';
import { rhythm } from '../utils/typography';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${rhythm(1)} 0;
  margin: 0 ${rhythm(1)};
`;

export default ({ transition }) => (
  <div>
    <Header>
      <h1>About</h1>
      <p>A brief list of my skills and education.</p>
    </Header>
    <Container width="1000px">
      <Wrapper>
        <Block id={1} title="Hello">
          <p>
          I'm a Software Developer currently residing in Massachussets. I build
          web and mobile applications with the goal having great performance and user experience.
          I enjoy learning, building user interfaces, working with large amounts data, optimizing performance, deleting code, and drumming.
          </p>
        </Block>
        <Block id={2} title="Skills">
          <h4>Primary Technologies</h4>
          <p>HTML5, CSS3, JavaScript (ES5, ES6), React, NodeJS, Git</p>
          <h4>Languages</h4>
          <p>JavaScript, Python, PHP</p>
          <h4>Libraries</h4>
          <p>React, Redux, jQuery, RxJS</p>
          <h4>Frameworks</h4>
          <p>React Native, Express, Flask, Jest</p>
          <h4>Backend</h4>
          <p>Backend: NodeJS, MongoDB, SQL, WordPress</p>
          <h4>Other</h4>
          <p>
          Webpack, Gulp, Git, npm, yarn, bash, AJAX, JSON, XML, Adobe XD, Sketch
          </p>
        </Block>
        <Block id={3} title="Education">
          <h4>Associates of Science in Computer Science</h4>
          <p>Normandale Community College, Bloomington, MN</p>
          <h4>Front-End Development Certificate</h4>
          <p><a href="https://www.freecodecamp.org/reillym">Free Code Camp</a></p>
          <h4> Web Developer Bootcamp & Learn and Understand NodeJS Certificate</h4>
          <p><a href="https://www.udemy.com/user/mike-r/">Udemy</a></p>
          <h4>Web Development Courses</h4>
          <p><a href="https://app.pluralsight.com/profile/michael-reilly52">Pluralsight</a></p>
          <h4>Web Development, Design Patterns and Algorithms</h4>
          <p>Udacity</p>
          <h4>Front End Development Workshops</h4>
          <p>Frontend Masters</p>
        </Block>
      </Wrapper>
    </Container>
  </div>
);
