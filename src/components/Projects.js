import React, { useState } from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import Rectangle12 from '../assets/Home/Rectangle12.png'

const Tabs = () => {

    const [url, setUrl] = useState("https://github.com/Tawanda3012");
    const handleClick = () => {
        window.open(url, "_blank");
      };



  return (
    <div className="pros container">
        <div className="prods">
            <h2>Projects</h2>
            <button onClick={handleClick}>View All Projects <ArrowRight  /> </button>
        </div>
      
      <p>
        Hello everyone! I am proud to present my web development projects, which
        showcase my skills and expertise in building dynamic and engaging
        websites. Whether you need a simple brochure website or a complex web
        application, I can provide you with a solution that meets your specific
        needs and requirements. I have experience in using the latest
        technologies and frameworks such as HTML, CSS, JavaScript, React, and
        Node.js to create fast, responsive, and user-friendly websites that
        provide an exceptional user experience. If you're looking for a talented
        and dedicated web developer, look no further. Contact me today to learn
        more about my projects and how I can help bring your vision to life.
      </p>
      <div className="row">
        <div className="col-md-6">
            <div className="pros-img">
            <img src={Rectangle12} className="img-fluid" alt="" />
            </div>
        </div>
        <div className="col-md-6">
          <div className="pro-text">
            <h2>SLIZ</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              officia vitae repellat est recusandae, quod nemo possimus. Sunt
              voluptatem vel ex perferendis modi. Cupiditate, odit sapiente
              maxime quasi libero ab?
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tabs;
