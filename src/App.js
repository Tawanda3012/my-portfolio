import "./App.css";
import Home from "./PortfolioConatiner/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./PortfolioConatiner/ContactMe/Contact";
import Aboutme from "./PortfolioConatiner/AboutMe/Aboutme";
import Testimonials from "./PortfolioConatiner/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       
          <Routes>
            <Route exact  path="/" element={<Home/>}  />
            <Route path="/aboutme" element={<Aboutme/>}  />
            <Route path="/testimonials" element={<Testimonials/>}  />
            <Route path="/contact" element={<Contact/>}  />
          </Routes>
       
      </BrowserRouter>
   
    </div>
  );
}

export default App;
