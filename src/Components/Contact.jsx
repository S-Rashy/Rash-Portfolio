import styled from "styled-components";
const Contact = () => {
    return ( <ContactDiv>
        <h2>Contact Me</h2>
        <hr />
        <form action="">
            {/* <label htmlFor="name">Name</label> <br /> <br /> */}
            <input type="text" placeholder="What's your name" required /> <br />

            {/* <label htmlFor="name">Email</label> <br /> <br /> */}
            <input type="text" placeholder="What's your Email" required /> <br />

            <textarea name="message" id="" placeholder="Please type your message"  rows="8" cols="44" required></textarea><br /> <br />

            <button>Submit</button>


        </form>

    </ContactDiv>
     );
}
 
export default Contact;
const ContactDiv = styled.div`
    margin: auto;
   

    h2{
        text-align: center;
        color: #52154e;
        margin: 50px auto 0px;
        text-shadow: 2px 2px #f641d8;
        font-size: 30px;
    }
    hr{
        width: 80px;
        color:#f641d8 ;
        border-radius: 3px;
        border: 3px solid;
        
    }
    form{
        max-width: 500px;
        /* border: 1px solid; */
        margin: 50px auto;
        
    }
    input{
        width: 500px;
        height: 55px;
        margin: 0px auto 30px;
        color: #52154e;
        font-size: 20px; 
        background-color: #f68fe5 ;
        border: 1px solid #52154e;
        border-radius: 10px;
    }
    textarea{
        color: #52154e;
        font-size: 20px; 
        background-color: #f68fe5 ;
        border-radius: 10px;
    }
    button{
        color: #f641d8;
        background-color: #52154e;
        width: 200px;
        margin: auto;
        font-weight: 600;
        &:hover{
            color: #52154e;
            background-color: #f68fe5;
        }
    }
    
`