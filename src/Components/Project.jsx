import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectProps from "../Reusables/ProjectProps";

import BCollar from "../assets/projects/bcollar.png";
import Country from "../assets/projects/country.png";
import Desserts from "../assets/projects/desserts.png";
import Lezada from "../assets/projects/lezada.png";
import Shoppy from "../assets/projects/shoppy.png";
import Ticket from "../assets/projects/ticket.png";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <ProjectDiv>
      <h2 data-aos="fade-down">PROJECTS</h2>
      <hr data-aos="fade-up" data-aos-delay="200" />
      <h6 data-aos="fade-up" data-aos-delay="400">
        Here are a few of my recent projects;
      </h6>

      <ProjectContainer>
        <div data-aos="zoom-in-up">
          <ProjectProps
            data-aos="zoom-in"
            data-aos-delay="200"
            Image={Lezada}
            Title="Lezada"
            Description="An elegant e-commerce web app designed to provide a smooth and simple shopping experience."
            Link="https://lezada-kappa.vercel.app"
            Repo="https://github.com/S-Rashy/lezada"
            Stacks={["Vue", "Pinia", "TailwindCSS"]}
          />
        </div>
        <div data-aos="zoom-in-up">
          <ProjectProps
            Image={BCollar}
            Title="BCollar"
            Description="A full Stack application that connects artisans with potential clients"
            Link="https://frontendbcolar-pyxh.vercel.app"
            Repo="https://frontendbcolar-pyxh.vercel.app"
            Stacks={["React", "Styled-Component"]}
          />
        </div>
        <div data-aos="zoom-in-up">
          <ProjectProps
            data-aos="zoom-in"
            data-aos-delay="200"
            Image={Shoppy}
            Title="Shoppy"
            Description="A clean and structured online store designed for an intuitive shopping experience."
            Link="https://shoppy-ebon.vercel.app"
            Repo="https://github.com/S-Rashy/shoppy"
            Stacks={["Vue", "Vuex", "TailwindCSS"]}
          />
        </div>
        <div data-aos="zoom-in-up">
          <ProjectProps
            data-aos-delay="100"
            Image={Country}
            Title="Country info"
            Description="An interactive website that displays countries' data fetched from an API with search and filter features"
            Link="https://s-rashy.github.io/restCountries"
            Repo="https://github.com/S-Rashy/restCountries"
            Stacks={["HTML", "CSS", "JavaScript"]}
          />
        </div>
        <div data-aos="zoom-in-up">
          <ProjectProps
            data-aos="zoom-in"
            data-aos-delay="300"
            Image={Ticket}
            Title="Ticket Generator"
            Description="A web app that transforms user information into a customized event ticket in real time."
            Link="https://ticket-generator-coral.vercel.app"
            Repo="https://github.com/S-Rashy/TicketGenerator"
            Stacks={["React", "Styled-Components", "Cloudinary"]}
          />
        </div>
        <div data-aos="zoom-in-up">
          <ProjectProps
            data-aos="zoom-in"
            data-aos-delay="400"
            Image={Desserts}
            Title="Product list with cart"
            Description="Responsive product list website built by fetching data from API with add to cart features"
            Link="https://product-list-with-cart-livid-omega.vercel.app"
            Repo="https://github.com/S-Rashy/product-list-with-cart"
            Stacks={["HTML", "CSS", "JavaScript", "JSON"]}
          />
        </div>
      </ProjectContainer>
    </ProjectDiv>
  );
};

export default Project;

const ProjectDiv = styled.div`
  margin: 40px auto 0px;
  max-width: 1440px;

  h2 {
    text-align: center;
    color: #52154e;
    margin: 50px auto 0px;
    text-shadow: 2px 2px #f641d8;
    font-size: 30px;
  }
  hr {
    width: 100px;
    color: #f641d8;
    border-radius: 3px;
    border: 3px solid;
  }
  h6 {
    font-size: 22px;
    text-align: center;
    color: #52154e;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto;
  max-width: 1300px;
  flex-wrap: wrap;
  gap: 50px;
`;
