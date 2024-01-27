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

function Home() {
  const pageRef = useRef(null);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToBottom = () => {
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
      <Footer />
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
