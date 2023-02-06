import React, { useRef } from "react";
import "./Home.css";
import Profile from "./Profile";
import Sidebar from "../../components/Sidebar";
import Footer from "./Footer/Footer";
import Aboutme from "../AboutMe/Aboutme";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects"
import Contact from "../ContactMe/Contact";

function Home() {
  const pageRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top:10000,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <div className="home-container">
        <div ref={pageRef} className="first-button">
          <button onClick={scrollToBottom}>Scroll to Bottom</button>
        </div>
        <Profile />
        <Sidebar />
        <Footer />
      </div>
      <Aboutme />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer />
      <div ref={pageRef} className="second-button" >
        <button onClick={scrollToTop}>Scroll to Top</button>
      </div>
    </div>
  );
}

export default Home;
