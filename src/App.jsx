
import Home from "./Components/pages/Home";
import Header from "./Components/Static/Header";
import About from "./Components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return ( <div>
    <BrowserRouter>
      <Header/>
      <Routes>
       <Route path = "/" element={<Home/>}/>
       <Route path = "/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  </div> );
}
 
export default App;