import React, { useState } from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import Rectangle12 from '../assets/Home/Rectangle12.png'


const Tabs = () => { // Create a functional component called Tabs
  const [url, setUrl] = useState("https://github.com/Tawanda3012"); // Initialize state variable url with default value, and setUrl function to update it

  const handleClick = () => { // Create handleClick function
    window.open(url, "_blank"); // Open a new window with the url in a new tab
  };

  return ( // Return JSX for the component
    <div className="pros container"> {/* Container for the component */}
      <div className="prods"> {/* Container for the projects section */}
        <h2>Projects</h2> {/* Heading for the projects section */}
        <button onClick={handleClick}>View All Projects <ArrowRight  /> </button> {/* Button to view all projects with handleClick event */}
      </div>

      <p> {/* Paragraph for the introduction */}
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

      <div className="row"> {/* Container for the row */}
        <div className="col-md-6"> {/* Column for the left side */}
          <div className="pros-img"> {/* Container for the image */}
            <img src={Rectangle12} className="img-fluid" alt="" /> {/* Image with source and alt attributes */}
          </div>
        </div>
        <div className="col-md-6"> {/* Column for the right side */}
          <div className="pro-text"> {/* Container for the project text */}
            <h2>SLIZ</h2> {/* Heading for the project */}
            <p> {/* Paragraph for the project description */}
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
