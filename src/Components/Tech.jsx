import Html from "../assets/tech/html.svg";
import Css from "../assets/tech/css.svg";
import Js from "../assets/tech/javascript.svg";
import Ts from "../assets/tech/typescript.svg";
import React from "../assets/tech/react.svg";
import Next from "../assets/tech/next.svg";
import Styled from "../assets/tech/styled.png";
import Tailwind from "../assets/tech/tailwind.svg";
import Vscode from "../assets/tech/vscode.svg";
import Git from "../assets/tech/git.svg";
import Github from "../assets/tech/github.svg";

import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const techStack = [
  { logo: Html, name: "HTML" },
  { logo: Css, name: "CSS" },
  { logo: Js, name: "JavaScript" },
  { logo: Ts, name: "TypeScript" },
  { logo: React, name: "React" },
  { logo: Next, name: "Nextjs" },
  { logo: Styled, name: "Styled Components" },
  { logo: Tailwind, name: "Tailwind" },
  { logo: Vscode, name: "VS Code" },
  { logo: Git, name: "Git" },
  { logo: Github, name: "GitHub" },
];

const Tech = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <TechDiv>
      <h1 data-aos="fade-down">MY TECH ARSENAL</h1>
      <hr data-aos="fade-up" data-aos-delay="200" />
      <Grid>
        {techStack.map((tech, index) => (
          <LogoWrapper
            key={`${tech.name}-${index}`}
            data-aos="flip-up"
            data-aos-delay={index * 100}
          >
            <img src={tech.logo} alt={tech.name} />
            <p>{tech.name}</p>
          </LogoWrapper>
        ))}
      </Grid>
    </TechDiv>
  );
};

export default Tech;

const TechDiv = styled.div`
  margin: 50px auto 0px;
  max-width: 1440px;
  padding: 0 20px;
  overflow-x: hidden; 

  h1 {
    text-align: center;
    color: #52154e;
    margin: 50px auto 0px;
    text-shadow: 2px 2px #f641d8;
  }

  hr {
    width: 200px;
    color: #f641d8;
    border-radius: 3px;
    border: 3px solid;
    margin: 0 auto;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  max-width: 1000px;
  margin: 40px auto 0px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 130px;
  position: relative;

  img {
    width: 60px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.4);
    }
  }

  p {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity 0.4s ease, transform 0.8s ease;
    text-align: center;
    color: #52154e;
    margin-top: 5px;
    width: 120px;
    height: 40px;
    padding: 6px;
    border-radius: 5px;
    background-color: hsl(309.9, 90.9%, 85.9%);
    box-shadow: 0 5px #f641d8;
  }

  &:hover p {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
