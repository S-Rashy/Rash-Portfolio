import styled from "styled-components";
import ProjectProps from "../Reusables/ProjectProps";

import Coolors from "../assets/projects/coolors.png"
import Country from "../assets/projects/country.png"
import Desserts from "../assets/projects/desserts.png"
import Furniro from "../assets/projects/furniro.png"
import Nexcent from "../assets/projects/nexcent.png"
import Sunnyside from "../assets/projects/sunnyside.png"
import Kuda from "../assets/projects/kuda.png"

const Project = () => {
    return ( <ProjectDiv>

        <h2>PROJECTS</h2>
        <hr />
        <h6>Here  are a few of my recent projects;</h6>

        <ProjectContainer>
            <ProjectProps Image={Furniro} Title="Furniro e-commerce" Description="The landing page of an e-Commerce site built with HTML and CSS using designs from figma" Link="https://s-rashy.github.io/furniro/" Repo=""/>
            <ProjectProps Image={Country} Title="REST Country API" Description="An interactive website that displays countries' data fetched from an API with search and filter features" Link="https://s-rashy.github.io/restCountries/" Repo=""/>
            <ProjectProps Image={Coolors} Title="Coolors Clone" Description="Succesfully cloned the landing page of Coolors with React" Link="" Repo=""/>
            <ProjectProps Image={Sunnyside} Title="SunnySide" Description="" Link="" Repo=""/>
            <ProjectProps Image={Nexcent} Title="Nexcent" Description="Landing page of a webpage that focuses on talent hiring built with HTML and CSS" Link="" Repo=""/>
            <ProjectProps Image={Desserts} Title="Product list with cart" Description="Responsive product list website built by fetching data from API with add to cart features" Link="https://product-list-with-cart-livid-omega.vercel.app/" Repo=""/>
            <ProjectProps Image={Kuda} Title="Kuda Clone" Description="A replica of the Kuda website built with React and styled-components which is responsive on all screen sizes" Link="https://product-list-with-cart-livid-omega.vercel.app/" Repo=""/>
        </ProjectContainer>

    </ProjectDiv> );
}
 
export default Project;

const ProjectDiv = styled.div`
    margin: 80px auto 0px;
    max-width: 1440px;
    
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
    h6{
        font-size: 22px;
        text-align: center;
        color: #52154e;
    }
    
`
const ProjectContainer= styled.div`
    display: flex;
    justify-content: center;
    margin: 50px auto;
    max-width: 1300px;
    flex-wrap: wrap;
    gap: 30px;
`