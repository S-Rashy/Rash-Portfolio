import styled from "styled-components";

const SocialProps = (props) => {
    return ( <SocialPropsDiv>
       <a href={`${props.Link}`} target="_blank">{props.Icon}</a>

    </SocialPropsDiv> );
}
 
export default SocialProps;

const SocialPropsDiv = styled.div`
    /* border: 1px solid; */
    border-radius: 15px;
    width: 45px;
    height: 45px;
    background-color: #52154e;
    display: flex;
    position: relative;
    animation: slide 2s linear  infinite alternate;
   
    @keyframes slide {
        0% {top: 0px;}
        50% {top: 10px;}
        100% {top: 20px;}
        }
    &:hover{
        background-color: #f641d8;
        a{
            color: #52154e;
        }
        }
    a{
        margin: auto;
        color: #f641d8;
        font-size: 25px;
        position: relative;
        animation: waving 3s infinite alternate;
    }

`