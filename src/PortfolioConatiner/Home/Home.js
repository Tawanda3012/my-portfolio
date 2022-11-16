import React from "react";
import "./Home.css";
import Profile from "./Profile";
import Sidebar from "../../components/Sidebar";
import Footer from "./Footer/Footer";
import Aboutme from '../AboutMe/Aboutme'



function Home() { 
  return (
    <div className="home">
      <div className="home-container">
        <Profile />
        <Sidebar />
        <Footer />
      </div>
      <Aboutme/>
    </div>
  );
}

export default Home;
