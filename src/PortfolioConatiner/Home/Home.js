import React from 'react'
import './Home.css'
import Profile from './Profile'
import Sidebar from "../../components/Sidebar";
import Footer from './Footer/Footer'

function Home() {
  return (
    <div className="home-container">
      
        <Profile/>
        <Sidebar/>
        <Footer/>

    </div>
  )
}

export default Home