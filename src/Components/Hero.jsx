import styled from "styled-components";
import { motion } from "framer-motion";
import Rash from "../assets/rash2.jpg";

const Hero = () => {
  return (
    <Herodiv>
     <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeroLeft>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span id="wave">👋🏼</span> Hi There! WELCOME
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I'm <span id="myName">Rashidah Sadiq</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A Frontend Developer
          </motion.h3>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            A frontend developer with a love for coding and a passion for
            creating engaging and memorable web experiences.
          </motion.h6>
        </HeroLeft>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        viewport={{ once: false, amount:0.3 }}
      >
        
        <HeroRight>
          <img src={Rash} alt="" />
        </HeroRight>
      </motion.div>
    </Herodiv>
  );
};

export default Hero;

const Herodiv = styled.div`
  display: flex;
  /* background-color: #f9cff2; */
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  max-width: 1440px;
  margin: 30px auto 0px;
  /* border-bottom: 1px solid #f641d8; */
  p {
    font-weight: 600;
    border: 4px solid;
    padding: 9px;
    border-radius: 20px;
    width: 270px;
    text-align: center;
    font-size: 20px;
    background-color: #010001;
    color: #f641d8;
    /* margin: auto; */
  }
  h2 {
    font-size: 55px;
    /* color: #52154e; */
  }
  #myName {
    background-image: linear-gradient(to bottom, #52154e, #f641d8, #ebc5e5);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  h3 {
    color: #030000;
    font-size: 50px;
  }
  h6 {
    font-size: 22px;
    font-weight: 500;
    max-width: 500px;
    line-height: 30px;
  }
  #wave {
    margin-right: 5px;
    position: relative;
    animation: waving 0.5s infinite;
  }
  @keyframes waving {
    from {
      left: 0px;
    }
    to {
      left: 4px;
    }
  }

  @media (max-width: 1100px) {
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 30px;
    }
    h6 {
      font-size: 18px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 20px;
    }
    h6 {
      font-size: 16px;
    }
  }
`;
const HeroLeft = styled.div`
  /* max-width: 50%; */
  /* border: 1px solid; */

  @media (max-width: 900px) {
    width: 80vw;
  }

  /* border: 1px solid; */
  /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
  /* align-items: center; */
`;
const HeroRight = styled.div`

  img {
    width: 450px;
    /* height: 400px; */
    border: 5px solid #f641d8;
    border-radius: 5550px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
    box-shadow: 10px 10px 5px #de50d5;
    /* #52154e;  #f641d8 #f9cff2*/
    background-color: inherit;
  }

  @media (max-width: 1100px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 900px) {
    img {
      width: 500px;
    }
  }
  @media (max-width: 600px) {
    img {
      width: 400px;
    }
  }
  @media (max-width: 450px) {
    img {
      width: 300px;
    }
  }
`;
