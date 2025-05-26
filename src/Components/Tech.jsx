import Html from "../assets/tech/html.svg";
import Css from "../assets/tech/css.svg";
import Js from "../assets/tech/javascript.svg";
import Ts from "../assets/tech/typescript.svg";
import React from "../assets/tech/react.svg";
import Styled from "../assets/tech/styled.png";
import Tailwind from "../assets/tech/tailwind.svg";
import Vscode from "../assets/tech/vscode.svg";
import Git from "../assets/tech/git.svg";
import Github from "../assets/tech/github.svg";

import styled from "styled-components";
import { motion } from "framer-motion";

const techStack = [
  { logo: Html, name: "HTML" },
  { logo: Css, name: "CSS" },
  { logo: Js, name: "JavaScript" },
  { logo: Ts, name: "TypeScript" },
  { logo: React, name: "React" },
  { logo: Styled, name: "Styled Components" },
  { logo: Tailwind, name: "Tailwind" },
  { logo: Vscode, name: "VS Code" },
  { logo: Git, name: "Git" },
  { logo: Github, name: "GitHub" },
];

const scrollingStack = [...techStack, ...techStack];

const Tech = () => {
  return (
    <TechDiv>
      <h1>MY TECH ARSENAL</h1>
      <hr />
      <Arsenal
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {scrollingStack.map((tech, index) => (
          <LogoWrapper key={`${tech.name}-${index}`}>
            <img src={tech.logo} alt={tech.name} />
            <p>{tech.name}</p>
          </LogoWrapper>
        ))}
      </Arsenal>
    </TechDiv>
  );
};

export default Tech;

const TechDiv = styled.div`
  margin: 80px auto 0px;
  max-width: 1440px;
  overflow: hidden;

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

const Arsenal = styled(motion.div)`
  display: flex;
  gap: 30px;
  margin: 40px auto 10px;
  width: max-content;
  align-items: center;
  padding: 10px 0;
`;

const LogoWrapper = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  img {
    width: 95px;
    transition: transform ease 0.3s;

    &:hover {
      transform: scale(1.4);
    }

    &:hover + p {
      visibility: visible;
    }
  }

  p {
    visibility: hidden;
    text-align: center;
    color: #52154e;
    margin-top: 30px;
    width: 120px;
    height: 40px;
    padding: 6px;
    border-radius: 5px;
    border: none;
    background-color: hsl(309.9, 90.9%, 85.9%);
    box-shadow: 0 5px #f641d8;
  }
`;
