import React, { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import "./Home.css";
import Profile from "./Profile";
import Sidebar from "../../components/Sidebar";
import Footer from "./Footer/Footer";
import Aboutme from "../AboutMe/Aboutme";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactForm from "../ContactMe/Contact";

function Home() {
  const pageRef = useRef(null);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Define a function to scroll the window to the bottom smoothly
const scrollToBottom = () => {
  // Scroll the window to the specified position (bottom) with smooth behavior
  window.scrollTo({ top: 10000, behavior: "smooth" });
};

  return (
    <div className="home">
      <div className="home-container">
        <div ref={pageRef} className="first-button">
          <button onClick={scrollToBottom}>
             <FaArrowDown />{" "}
            {/* Add the arrow down icon to the button */}
          </button>
        </div>
        <Profile />
        <Sidebar />
        <Footer />
      </div>
      <Aboutme />
      <Skills />
      <Projects />
      <ContactForm/>
    
      <div ref={pageRef} className="second-button">
      <button onClick={scrollToTop}>
             <FaArrowUp />{" "}
            {/* Add the arrow down icon to the button */}
          </button>
      </div>
    </div>
  );
}

export default Home;
