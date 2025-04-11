import styled from "styled-components";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectProps = (props) => {
    return ( <ProjectPropsDiv>
        <img src={props.Image} alt={`${props.Title}`} />
        <h3>{props.Title}</h3>
        <p>{props.Description}</p>

        <AllLinks>
            <div className="projectLinks">
                <a href={`${props.Link}`} target="_blank"><FaExternalLinkAlt/></a>
            </div>
            <div className="projectLinks">
            <a href={`${props.Repo}`} target="_blank"><FaGithub /></a>
            </div>
        </AllLinks>
       

    </ProjectPropsDiv> );
}
 
export default ProjectProps;

const ProjectPropsDiv = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 35px 35px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    box-shadow: #f02eaa66 5px 5px, #f02eaa4c 10px 10px, #f02eaa33 15px 15px, #f02eaa18 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
    img{
        width: 298px;
        height: 160px;
        border-radius: 20px 20px 0px 0px;
    }
    p{
        width: 260px;
    }
    .projectLinks{
    border-radius: 15px;
    width: 45px;
    height: 45px;
    background-color: #f68fe5;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition: all 0.3s ease;

   
    &:hover{
        background-color: #52154e;
        transition-timing-function: ease;
        transform: translateY(-5px);
    
        a{
            color: #f68fe5;
        }
        }
    a{
        margin: auto;
        color: #52154e;
        font-size: 25px;
        position: relative;
        animation: waving 3s infinite alternate;
    }
    }
`
const AllLinks = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-around;
    margin: auto;

`