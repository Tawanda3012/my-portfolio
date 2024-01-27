import React, { useState } from "react";
import Typical from "react-typical";
import "./Profile.css";
// import CV from '../../assets/tawanda.pdf'



// Define the Profile component
function Profile() {
  // Initialize pdfUrl state with default value
  const [pdfUrl, setPdfUrl] = useState("https://example.com/sample.pdf");

  // Define handleDownload function to handle the download action
  const handleDownload = () => {
    // Create a new anchor element
    const link = document.createElement("a");
    // Set the href attribute of the anchor element to the pdfUrl
    link.href = pdfUrl;
    // Set the download attribute of the anchor element to "sample.pdf"
    link.download = "sample.pdf";
    // Append the anchor element to the document body
    document.body.appendChild(link);
    // Simulate a click event on the anchor element
    link.click();
    // Remove the anchor element from the document body
    document.body.removeChild(link);
  };

  // Return the JSX for the Profile component
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detais">
          <div className="colz">
            <div className="colz-icon">
              {/* Map through an array of social media icons and create anchor elements */}
              {["google-plus-square", "github-square", "facebook-square", "instagram", "linkedin"].map((icon, index) => (
                <a key={index} href="/#">
                  {/* Render the Font Awesome icon based on the current icon */}
                  <i className={`fa fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="profile-details-name">
            {/* Render the name with highlighted text */}
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Tawanda</span>
            </span>
          </div>
          <div className="profile-details-role">
            {/* Render the role using the Typical component for animated text */}
            <span className="primary-text">
              <h1>
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
              {/* Render the role tagline */}
              <span className="profile-role-tagline">
                I provide value to your business by designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms.
              </span>
            </span>
          </div>

          <div className="profile-options">
            {/* Render the "Hire Me" button */}
            <button className="btn btn-primary">Hire Me</button>
            {/* Render the "Get Resume" button with handleDownload function on click */}
            <button onClick={handleDownload} className="btn  btn-primary highlighted-btn">Get Resume</button>
          </div>
        </div>
        {/* Render the profile picture */}
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
