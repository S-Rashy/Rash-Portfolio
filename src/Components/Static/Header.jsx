import styled from "styled-components";
import { FaHome, FaUserAlt, FaCode, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderContent>
        <StyledLink href="#home">
          <FaHome />
          <span>Home</span>
        </StyledLink>

        <StyledLink href="#about">
          <FaUserAlt />
          <span>About</span>
        </StyledLink>

        <StyledLink href="#projects">
          <FaCode />
          <span>Projects</span>
        </StyledLink>

        <StyledLink href="#contact">
          <FaEnvelope />
          <span>Contact</span>
        </StyledLink>
      </HeaderContent>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 400px;
  font-weight: 600;
  margin: 20px auto;
  height: 40px;
  border-radius: 20px;
  background-color: hsl(309.9, 90.9%, 85.9%);

  @media (max-width: 470px) {
    max-width: 90vw;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 6px;
  border-radius: 10px;
  text-decoration: none;
  color: #f641d8;
  transition: all 0.3s ease;
  font-size: 16px;

  svg {
    font-size: 18px;
  }

  &:hover {
    transform: scale(1.1);
    color: #52154e;
    text-decoration: underline;
  }

  span {
    transition: opacity 0.3s ease;
  }

  @media (max-width: 470px) {
    span {
      font-size: 12px;
    }
    svg {
      font-size: 16px;
    }
  }
`;
