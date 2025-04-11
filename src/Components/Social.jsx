import styled from "styled-components";
import { motion } from "framer-motion";
import SocialProps from "../Reusables/SocialProps";

import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



const Social = () => {
    return ( <SocialDiv>
        <SocialProps Link="https://twitter.com/RforRashy" Icon={<RiTwitterXFill />}/>
        <SocialProps Link="www.linkedin.com/in/rashidah-sadiq" Icon={<FaLinkedinIn />}/>
        <SocialProps Link="https://github.com/S-Rashy" Icon={<FaGithub />}/>
        <SocialProps Link="sadiqrashidah@gmail.com " Icon={<IoIosMail />}/>
        <SocialProps Link="https://wa.me/2349097366587" Icon={<FaWhatsapp />}/>
        <SocialProps Link="https://t.me/RforRashy" Icon={<FaTelegramPlane />}/>
    </SocialDiv> );
}
 
export default Social;

const SocialDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    max-width: 400px ;
    /* border: 1px solid; */

`