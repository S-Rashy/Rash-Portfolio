import styled from "styled-components";
import ProjectProps from "../Reusables/ProjectProps";

import BCollar from "../assets/projects/bcollar.png"
import Coolors from "../assets/projects/coolors.png"
import Country from "../assets/projects/country.png"
import Desserts from "../assets/projects/desserts.png"
import Furniro from "../assets/projects/furniro.png"
import Nexcent from "../assets/projects/nexcent.png"
import Sunnyside from "../assets/projects/sunnyside.png"
import Ticket from "../assets/projects/ticket.png"

const Project = () => {
    return ( <ProjectDiv>

        <h2>PROJECTS</h2>
        <hr />
        <h6>Here  are a few of my recent projects;</h6>

        <ProjectContainer>
            {/* <ProjectProps Image={Furniro} Title="Furniro e-commerce" Description="The landing page of an e-Commerce site built with HTML and CSS using designs from figma" Link="https://s-rashy.github.io/furniro/" Repo=""/> */}
            <ProjectProps Image={BCollar} Title="BCollar" Description="A full Stack application that connects artisans with potential clients" Link="frontendbcolar-pyxh.vercel.app" Repo="frontendbcolar-pyxh.vercel.app"/>
            <ProjectProps Image={Country} Title="Country info " Description="An interactive website that displays countries' data fetched from an API with search and filter features" Link="s-rashy.github.io/restCountries" Repo="github.com/S-Rashy/restCountries"/>
            {/* <ProjectProps Image={Coolors} Title="Coolors Clone" Description="Succesfully cloned the landing page of Coolors with React" Link="" Repo=""/> */}
            <ProjectProps Image={Sunnyside} Title="SunnySide" Description="A static website for a creative agency, built with modern HTML and CSS." Link="sunnyside-eta-ruby.vercel.app" Repo="github.com/S-Rashy/sunnyside"/>
            <ProjectProps Image={Ticket} Title="Ticket Generator" Description="This app accepts user input and generates ticket instantly for an event" Link="ticket-generator-coral.vercel.app" Repo="github.com/S-Rashy/TicketGenerator"/>
            {/* <ProjectProps Image={Nexcent} Title="Nexcent" Description="Landing page of a webpage that focuses on talent hiring built with HTML and CSS" Link="" Repo=""/> */}
            <ProjectProps Image={Desserts} Title="Product list with cart" Description="Responsive product list website built by fetching data from API with add to cart features" Link="product-list-with-cart-livid-omega.vercel.app" Repo="github.com/S-Rashy/product-list-with-cart"/>
        </ProjectContainer>

    </ProjectDiv> );
}
 
export default Project;

const ProjectDiv = styled.div`
    margin: 40px auto 0px;
    max-width: 1440px;
    
    h2{
        text-align: center;
        color: #52154e;
        margin: 50px auto 0px;
        text-shadow: 2px 2px #f641d8;
        font-size: 30px;
    }
    hr{
        width: 100px;
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
    gap: 50px;
`