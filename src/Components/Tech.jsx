import Html from "../assets/tech/html.svg"
import Css from "../assets/tech/css.svg"
import Js from "../assets/tech/javascript.svg"
import Ts from "../assets/tech/typescript.svg"
import ReactL from "../assets/tech/react.svg"
import Styled from "../assets/tech/styled.png"
import Tailwind from "../assets/tech/tailwind.svg"
import Vscode from "../assets/tech/vscode.svg"
import Git from "../assets/tech/git.svg"
import Github from "../assets/tech/github.svg"


import styled from "styled-components";
import { motion } from "framer-motion";
import Techprops from "../Reusables/Techprops"
const Tech = () => {
    return ( <TechDiv>
        <h1>MY TECH ARSENAL</h1>
        <hr />

        <Arsenal
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <Techprops Logo={Html} Name="HTML"/>
            <Techprops Logo={Css} Name="CSS"/>
            <Techprops Logo={Js} Name="JavaScript"/>
            <Techprops Logo={Ts} Name="Typescript"/>
            <Techprops Logo={ReactL} Name="React"/>
            <Techprops Logo={Styled} Name="Styled Components"/>
            <Techprops Logo={Tailwind} Name="Tailwind"/>
            <Techprops Logo={Vscode} Name="VS Code"/>
            <Techprops Logo={Git} Name="Git"/>
            <Techprops Logo={Github} Name="GitHub"/>
        </Arsenal>
        

    </TechDiv> );
}
 
export default Tech;

const TechDiv = styled.div`
    margin: 80px auto 0px;
    max-width: 1440px;
    overflow: hidden;
    /* border: 1px solid; */
    h1{
        text-align: center;
        color: #52154e;
        margin: 50px auto 0px;
        text-shadow: 2px 2px #f641d8;
    }
    hr{
        width: 200px;
        color:#f641d8 ;
        border-radius: 3px;
        border: 3px solid;
        
    }
`
const Arsenal = styled(motion.div)`
    display: flex;
    gap: 15px;
    justify-content: space-around;
    max-width: 90vw;
    margin: 40px auto 10px;

    gap: 30px;
  margin: 40px auto 10px;
  width: max-content;
  align-items: center;
  padding: 10px 0;
`