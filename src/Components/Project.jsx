import styled from "styled-components";
import ProjectProps from "../Reusables/ProjectProps";

const Project = () => {
    return ( <ProjectDiv>

        <h2>PROJECTS</h2>
        <hr />
        <p>Here  are a few of my recent projects</p>
        <ProjectProps/>

    </ProjectDiv> );
}
 
export default Project;

const ProjectDiv = styled.div`
    h2{
        text-align: center;
        color: #52154e;
        margin: 50px auto 0px;
        text-shadow: 2px 2px #f641d8;
        font-size: 30px;
    }
    hr{
        width: 80px;
        color:#f641d8 ;
        border-radius: 3px;
        border: 3px solid;
        
    }
`