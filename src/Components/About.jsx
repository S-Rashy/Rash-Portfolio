import styled from "styled-components";
import Tech from "./Tech";
import Social from "./Social";
const About = () => {
  return (
    <AboutDiv>
      <AboutContent>
        <h2>ABOUT ME</h2>
        <hr />
        <p>
          I am a Frontend Developer from Lagos Nigeria with experience in
          creating responsive, user-centric interfaces. Whether it's building
          websites tailored to brand needs or collaborating within a team, I put
          in solid efforts in bringing digital visions to life and enhancing
          user experiences.
        </p>
        <p>
          As a developer with a background in health education, I understand the
          importance of clear communication, empathy, and user-centered design.
          I'm eager to apply these skills to create intuitive and accessible web
          experiences that promote healthy living and wellness.
        </p>
      </AboutContent>

      <Social />

      <Tech />
    </AboutDiv>
  );
};

export default About;

const AboutDiv = styled.div`
  margin: 80px auto;
`;
const AboutContent = styled.div`
  max-width: 1440px;
  margin: 0px auto 30px;

  h2 {
    font-size: 30px;
    text-align: center;
    color: #52154e;
    margin: 0px auto 0px;
    text-shadow: 2px 2px #f641d8;
  }
  hr {
    width: 110px;
    color: #f641d8;
    border-radius: 3px;
    border: 3px solid;
  }
  p {
    max-width: 80vw;
    margin: 30px auto;
    line-height: 20px;
  }
`;
