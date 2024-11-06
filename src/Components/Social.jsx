import styled from "styled-components";
import SocialProps from "../Reusables/SocialProps";

import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const Social = () => {
    return ( <SocialDiv>
        <SocialProps Link="" Icon={<RiTwitterXFill />}/>
        <SocialProps Link="" Icon={<FaLinkedinIn />}/>
        <SocialProps Link="" Icon={<FaGithub />}/>
        <SocialProps Link="" Icon={<IoLogoVercel />}/>
        <SocialProps Link="" Icon={<FaWhatsapp />}/>
        <SocialProps Link="" Icon={<FaTelegramPlane />}/>
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