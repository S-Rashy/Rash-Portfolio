import Html from "../assets/tech/html.svg"
import Css from "../assets/tech/css.svg"
import Js from "../assets/tech/javascript.svg"
import Ts from "../assets/tech/typescript.svg"
import ReactL from "../assets/tech/react.svg"
import Styled from "../assets/tech/styled.png"
import Vscode from "../assets/tech/vscode.svg"
import Git from "../assets/tech/git.svg"
import Github from "../assets/tech/github.svg"




import styled from "styled-components";
import Techprops from "../Reusables/Techprops"
const Tech = () => {
    return ( <TechDiv>
        <h1>MY TECH ARSENAL</h1>
        <hr />

        <Arsenal>
            <Techprops Logo={Html} Name="HTML"/>
            <Techprops Logo={Css} Name="CSS"/>
            <Techprops Logo={Js} Name="JavaScript"/>
            <Techprops Logo={Ts} Name="TYpescript"/>
            <Techprops Logo={ReactL} Name="React"/>
            <Techprops Logo={Styled} Name="Styled Components"/>
            <Techprops Logo={Vscode} Name="VS Code"/>
            <Techprops Logo={Git} Name="Git"/>
            <Techprops Logo={Github} Name="GitHub"/>
        </Arsenal>
        

    </TechDiv> );
}
 
export default Tech;

const TechDiv = styled.div`
    h1{
        text-align: center;
        color: #52154e;
        margin: 50px auto 0px;
    }
    hr{
        width: 200px;
        /* height: 5px; */
        color:#f641d8 ;
        /* background-color: #f641d8; */
        border-radius: 3px;
        border: 3px solid;
        /* margin: 20px auto  ; */
        
    }
`
const Arsenal = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
    max-width: 90vw;
    margin: 50px auto;
`