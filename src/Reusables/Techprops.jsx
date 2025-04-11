import styled from "styled-components";
const Techprops = (props) => {
  return (
    <TechpropsDiv>
      <img src={props.Logo} alt={`{props.Name}`} />
      <p id="techName">{props.Name}</p>
    </TechpropsDiv>
  );
};

export default Techprops;

const TechpropsDiv = styled.div`
  width: 130px;
  /* border: 1px solid; */
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  p {
    visibility: hidden;
    text-align: center;
    color: #52154e;
    margin-top: 30px;
    width: 120px;
    height: 40px;
    padding:  6px;
    border-radius: 5px;
    border: none;
    background-color: hsl(309.9, 90.9%, 85.9%);
    box-shadow: 0 5px #f641d8;
  }
  img {
    width: 95px;
    transition: transform ease 0.3s;

    &:hover {
      transform: scale(1.4);
    }
    &:hover + p {
      visibility: visible;
    }
  }
`;
