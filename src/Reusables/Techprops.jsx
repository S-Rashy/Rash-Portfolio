import styled from "styled-components";
const Techprops = (props) => {
    return ( <TechpropsDiv>
        <img src={props.Logo} alt={`{props.Name}`}/>
        <p id="techName">{props.Name}</p>

    </TechpropsDiv> );
}
 
export default Techprops;

const TechpropsDiv = styled.div`
    /* border: 1px solid; */
    width: 100px;
    p{
        /* display: none; */
        visibility: hidden;
        text-align: center;
        color: #52154e;
        font-weight: 600;
        margin-top: 30px;
        
    }
    img{
        width: 85px;
        transition: transform ease 0.3s;

        &:hover{
            transform: scale(1.5);
        }
        &:hover + p {
            visibility: visible;
            /* border: 1px solid red; */
          
            /* display: block; */
            /* #techName{
                display: block;
            } */
        }
    }
   
`