import About from "../About";
import Contact from "../Contact";
import Hero from "../Hero";
import Project from "../Project";
// import Switch from "../Switch";

const Home = () => {
    return ( <div>
        {/* <Switch/> */}
         <Hero/>
         <About/>
         <Project/>
         <Contact/>
    </div> );
}
 
export default Home;