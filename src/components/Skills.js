import React from "react";
import Rectangle10 from "../assets/Home/Rectangle10.png";
import Rectangle11 from "../assets/Home/Rectangle11.png";
import Rectangle12 from "../assets/Home/Rectangle12.png";
import Arrow2 from "../assets/Home/Arrow2.png";
import Footer from "../PortfolioConatiner/Home/Footer/Footer";

function Skills() {
  return (
    <div className="container skills">
      <div className="row">
        <div className="col-md-4">
          <h2>My Skill set</h2>
          <hr />
          <p>
            I provide value to your business by designing user interactions on
            websites, developing servers and databases for website functionality
            and coding for mobile platforms.
          </p>
        </div>
        <div className="col-md-8">
          <div className="myskills">
            <div className="row">
              <div className="col-md-4">
                <img src={Rectangle10} className="img-fluid" alt="" />
              </div>
              <div className="col-md-4">
                <p>
                  Website <br /> Developer
                </p>
              </div>
              <div className="col-md-4">
                <img src={Arrow2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="myskills">
            <div className="row">
              <div className="col-md-4">
                <img src={Rectangle11} className="img-fluid" alt="" />
              </div>
              <div className="col-md-4">
                <p>
                  Website <br /> Developer
                </p>
              </div>
              <div className="col-md-4">
                <img src={Arrow2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="myskills">
            <div className="row">
              <div className="col-md-4">
                <img src={Rectangle12} className="img-fluid" alt="" />
              </div>
              <div className="col-md-4">
                <p>
                  Website <br /> Developer
                </p>
              </div>
              <div className="col-md-4">
                <img src={Arrow2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Skills;
