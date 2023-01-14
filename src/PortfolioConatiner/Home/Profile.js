import React from "react";
import Typical from "react-typical";
import "./Profile.css";
// import CV from '../../assets/tawanda.pdf'

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detais">
          <div className="colz">
            <div className="colz-icon">
              <a href="/#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="/#">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="/#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="/#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="/#">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Tawanda</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "A Fullstack Developer ",
                    1000,
                    "Ethusiastic Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I provide value to your business by designing user interactions
                on websites, developing servers and databases for website
                functionality and coding for mobile platforms.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn btn-primary ">
              {""}
              Hire Me{""}
            </button>
            <a href="../../assets/tawanda.pdf" download="tawanda.pdf">
              <button className="btn  btn-primary highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
