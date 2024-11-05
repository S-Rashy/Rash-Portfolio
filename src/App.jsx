
import Home from "./Components/pages/Home";
import Header from "./Components/Static/Header";
import About from "./Components/About";
import Project from "./Components/Project";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";

const App = () => {
  return ( <div>
    <BrowserRouter>
      <Header/>
      <Routes>
       <Route path = "/" element={<Home/>}/>
       <Route path = "/about" element={<About/>}/>
       <Route path = "/projects" element={<Project/>}/>
       <Route path = "/contact" element={<Contact/>}/>
       
      </Routes>
    </BrowserRouter>
  </div> );
}
 
export default App;