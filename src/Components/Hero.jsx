import styled from "styled-components";
import { motion } from "framer-motion";
import Rash from "../assets/rash2.jpg";

const Hero = () => {
  return (
    <Herodiv>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeroLeft>
          <motion.p
            initial={{ scale: 0.7, opacity: 0, y: -30 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span id="wave">👋🏼</span> Hi There, Welcome!
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I'm <span id="myName">Rashidah Sadiq</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A Frontend Developer
          </motion.h3>
          <motion.h6
            initial={{ opacity: 0, y: 50 }}
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
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
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
  justify-content: space-around;
  align-items: center;
  padding: 40px 40px 20px;
  max-width: 1440px;
  margin: 30px auto ;
  p {
    font-weight: 600;
    padding: 9px;
    border-radius: 20px;
    width: 270px;
    text-align: center;
    font-size: 20px;
    background: linear-gradient(45deg, #010001, #52154e, #a4078a);
    background-size: 200% 200%;
    animation: gradientBG 3s infinite alternate;
    color: white;
    border: 4px solid #f641d8;
    box-shadow: 0px 0px 10px #f641d8, 0px 0px 20px #ff00ff;
    text-shadow: 0px 0px 5px #f641d8, 0px 0px 10px #ff00ff;
  }

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  p:hover {
    transform: scale(1.1);
    background-color: #f641d8;
  }

  h2 {
    font-size: 55px;
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

  @media (max-width: 900px) {
    width: 80vw;
  }
`;
const HeroRight = styled.div`
  img {
    width: 450px;
    border: 5px solid #f641d8;
    border-radius: 50%;
    box-shadow: 10px 10px 5px #de50d5;
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
