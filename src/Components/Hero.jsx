import styled from "styled-components";
import { motion } from "framer-motion";
import Rash from "../assets/rash2.jpg";

const Hero = () => {
  return (
    <Herodiv>
      {Array.from({ length: 70 }).map((_, i) => (
        <FloatingDot
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

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
        initial={{ opacity: 0, x: 100 }}
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
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 40px 20px;
  max-width: 1440px;
  margin: 0px auto 30px;
  background-color: hsl(311, 64%, 94%);
  color: rgb(43, 44, 44);
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  z-index: 1;
  >* {
    z-index: 1;
    position: relative;
  }

  p {
    font-weight: 600;
    padding: 9px;
    border-radius: 20px;
    margin-top: 30px;
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
    font-family: Lato;
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

const FloatingDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: rgba(246, 65, 216, 0.3); // from #f641d8
  border-radius: 50%;
  box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.2);

  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  z-index: 0;

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(20px, -20px);
    }
    50% {
      transform: translate(-15px, -40px);
    }
    75% {
      transform: translate(-20px, -10px);
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
  img:hover {
    transform: scale(1.02) rotate(1deg);
    transition: 0.3s ease;
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
