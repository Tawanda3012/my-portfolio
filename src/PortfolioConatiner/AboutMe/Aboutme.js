import React from "react";
import Rectangle6 from "../../assets/Home/Rectangle6.png";
import html5 from '../../assets/Home/html5-logo.png'
import Vector from '../../assets/Home/Vector.png'
import Vector1 from '../../assets/Home/Vector(1).png'
import Vector2 from '../../assets/Home/Vector(2).png'
import Vector3 from '../../assets/Home/Vector(3).png'





function Aboutme() {
  return (
    <div className="About container">
      <div className="row">
        <div className="col-md-6">
          <div className="about-img">
            <img src={Rectangle6} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h2>About Me</h2>
          <hr />
          <p>
          Hello everyone! I am proud to present my web development projects, which showcase my skills and expertise in building dynamic and engaging websites. Whether you need a simple brochure website or a complex web application, I can provide you with a solution that meets your specific needs and requirements. I have experience in using the latest technologies and frameworks such as HTML, CSS, JavaScript, React, and Node.js to create fast, responsive, and user-friendly websites that provide an exceptional user experience. If you're looking for a talented and dedicated web developer, look no further. Contact me today to learn more about my projects and how I can help bring your vision to life
          </p>
          <div className="lang-img">
          <img src={html5} className="img-fluid" alt="" />
          <img src={ Vector} className="img-fluid" alt="" />
          <img src={ Vector1} className="img-fluid" alt="" />
          <img src={ Vector1} className="img-fluid" alt="" />
          <img src={ Vector3} className="img-fluid" alt="" />
          {/* <img src={ Wordpress} className="img-fluid" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
