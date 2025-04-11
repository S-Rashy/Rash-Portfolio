import styled from "styled-components";

import { Link } from "react-router-dom";
// import R from "../assets/R.jpg"
const Header = () => {
    return ( <HeaderDiv>
        <HeaderContent>
            <Link to="/" >
                <nav>Home</nav>
            </Link>

            <Link to="/about">
                <nav>About</nav>
            </Link>

            <Link to="/projects">
                <nav>Projects</nav>
            </Link >

            <Link to="/contact">
                <nav>Contact</nav>
            </Link>

        </HeaderContent>

    </HeaderDiv> );
}
 
export default Header;

const HeaderDiv = styled.div`
    position: fixed;
    top: 0;
    /* border:1px solid; */
    margin-top: 0px;
    width: 100vw;
    z-index: 1;

`
const HeaderContent=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
   max-width: 400px;
    font-weight: 600;
    margin: 20px auto;
    /* border:1px solid; */
    height: 40px;
    border-radius: 20px;
    background-color: hsl(309.9, 90.9%, 85.9%);
    a{
            text-decoration: none;
        }
    
    nav{
        color: #f641d8;
        transition: all 0.3s ease;
       
        &:hover{
            transform: scale(1.4);
            color: #52154e ;
            text-decoration: underline;
            
        }
    }
    @media (max-width: 470px) {
  a{
    font-size: 14px;
    
  }
  }
    
`