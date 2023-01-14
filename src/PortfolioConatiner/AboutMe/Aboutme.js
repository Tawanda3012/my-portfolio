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
            I provide value to your business by designing user interactions on
            websites, developing servers and databases for website functionality
            and coding for mobile platforms.
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
