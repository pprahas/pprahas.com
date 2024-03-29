import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 20vh;
  padding: 0;

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
  }
`;

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Eleventy',
    'Node.js',
    'WordPress',
    'Flask',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              {/* Hello! My name is Brittany and I enjoy creating things that live on the internet. My
              interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot
              about HTML &amp; CSS! */}
              {/* Hi! I am <a> Prahas Pattem,</a> an undergraduate student at Purdue University with a
              major in computer science and a minor in mathematics. I will be graduating in December
              2023. */}
              Hi! I'm <a>Prahas Pattem</a>, a Purdue alum with a Bachelor of Science in Computer
              Science, Class of December 2023.
            </p>
            {/* <p>
              Fast-forward to today, and I’ve had the privilege of working at <a>a start up </a>,{' '}
              <a href="https://starry.com/">2 start-ups</a>,{' '}
              <a href="https://www.apple.com/">a huge corporation</a>, and{' '}
              <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. You
              can learn more about my technical experience <a href="/#jobs">here.</a> My main focus
              these days is building accessible, inclusive products and digital experiences at{' '}
              <a href="https://upstatement.com/">Upstatement</a> for a variety of clients.
            </p> */}
            {/* <p>
              I've gained valuable experience as a <a>Software Engineer Intern</a> at a{' '}
              <a>startup </a> specializing in Conversational AI for Customer Support, as well as at
              a <a>corporation</a> dedicated to the development of Cyber-Physical Systems for
              railways, and another <a>company</a> Additionally, I've contributed as an{' '}
              <a>Undergraduate Research Assistant</a> at Purdue University and further expanded my
              skills as a <a>Research and Development Intern</a> at a <a>consulting company.</a>
            </p> */}

            {/* <p>
              I've gained valuable experience as a <a>Software Engineer Intern</a> working in{' '}
              <a>three different companies.</a> The first company was a <a>startup</a> specializing
              in Conversational AI for Customer Support. The second company was a <a>corporation</a>{' '}
              dedicated to the development of Cyber-Physical Systems for railways. The third company
              was a <a>consulting corporation.</a> Additionally, I've contributed as an{' '}
              <a>Undergraduate Software Development</a> <a>Assistant</a> at Purdue University where
              my work led to a <a>publication.</a>
            </p> */}

            <p>
              As a recent graduate, I've interned as a <a>Software Engineer</a> at{' '}
              <a>three companies</a>, gaining hands-on experience in <a>diverse projects.</a> At a
              startup, I contributed to an application with a <a>multilingual chatbot.</a> In a
              corporate setting, I was involved in building a <a>cloud server</a> backed by digital
              twin technology. At a consulting firm, my work centered around developing an{' '}
              <a>analytics dashboard.</a> During my undergraduate studies at Purdue, I assisted in
              software development, which contributed to a <a>research publication.</a>
            </p>

            {/* <p>
              I have worked as a <a>Software Engineer Intern </a> at a <a>startup </a> that builds
              Conversational AI for Customer Support and at a <a>corporation</a> that develops
              Cyber-Physical Systems for railways. I have also worked as a{' '}
              <a> Research and Development Intern</a> at a <a>consultant company.</a>
            </p> */}
            <p>
              More recently, I've ventured into the healthcare domain with an{' '}
              <a>AI-powered application </a> designed to facilitate preliminary self-diagnosis,
              subsequently reviewed by certified doctors. On another front, I developed an Android
              app integrating <a>Alexa Voice Service,</a> enabling a variety of audio interactions
              including Q&A, weather updates, and other Alexa services. Additionally, I have
              designed a <a>gamified productivity application </a> that aids individuals and groups
              in goal attainment through engaging game-like elements.
            </p>

            {/* <p>
              I'm currently working on an <a>AI-powered healthcare application</a> wherein users can
              self-diagnose using AI and get it reviewed by an actual doctor. Furthermore, I've
              created an Android application that uses the <a>Alexa Voice Service </a> to perform
              audio operations, such as general questions, weather forecasts, Android-specific
              operations, and other Alexa functionalities. Additionally, I've developed a{' '}
              <a>Gamifying Productivity Application</a> designed to assist individuals and groups in
              achieving their goals through gamification.
            </p> */}
            {/* <p>
              I am currently working on an <a>Online Auction System</a> where users can sell or buy
              items through bidding. Additionally, I have developed a{' '}
              <a>Gamifying Productivity Application </a> that helps people accomplish their goals
              using Gamification and a <a>Food Delivery Application </a> where customers can order
              food from local restaurants.
            </p> */}
            {/* <p>
              I'm passionate about learning the latest and greatest technologies No matter what I am
              working on, I am sure to bring my curiosity and different thinking hats to everything
              I do.
            </p> */}
            <p>
              I'm currently open to <a>New Grad Full-Time Sofware Engineer</a> positions starting{' '}
              <a>Spring 2024. </a> If you think we would be a great match, I'd love to hear from
              you!
            </p>
            <StyledHeroSection>
              <div>
                <a
                  className="email-link"
                  // href="https://www.newline.co/courses/build-a-spotify-connected-app"
                  href="/#contact">
                  Contact Details
                </a>

                <a
                  className="email-link"
                  // href="https://www.newline.co/courses/build-a-spotify-connected-app"
                  style={{ marginLeft: '2rem', width: '10rem' }}
                  target="_blank"
                  href="/resume.pdf">
                  ㅤㅤResume
                </a>
              </div>
            </StyledHeroSection>
            {/* <p>
              You can find my contact details <a href="/#contact">here</a> and my resume{' '}
              <a href="/resume.pdf" target="_blank">
                here.
              </a>
            </p> */}

            {/* <p>
              I am currently looking for a <a>Software Engineering Internship</a> for Summer 2023.
              If you wish to get in touch, you can find my contact details{' '}
              <a href="/#contact">here.</a>
            </p> */}
            {/* <p>Here are a few of my skills:</p> */}
          </div>

          {/* <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul> */}
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
