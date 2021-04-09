import React from "react";
import logo from "../assets/logo.png";
import securityGif from "../assets/security1.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./landing.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="login-button">
        <Link to="/UserDashboard">Login </Link>
      </div>

      <div className="hero">
        <div className="hero-logo">
          <img src={logo} alt="imposter-logo" />
        </div>

        <div className="hero-header">
          <div id="white-text">Who is &nbsp;</div>
          <div id="red-text">Imposter ?</div>
        </div>
        <br></br>
        <div className="hero-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            laoreet mollis lorem quis semper. Integer non est non magna auctor
            egestas vitae eu magna. Cras dapibus tellus vitae dolor varius, non
            cursus lorem semper.
          </p>
        </div>

        <div className="add-to-chrome-button">
          <p> + Add to Chrome</p>
        </div>

        <div className="hero-social-media-icons">
          <div className="icon">
            <a href="#">
              <FontAwesomeIcon icon={["fab", "chrome"]} fa-2x />
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>

          <div className="icon">
            <a href="#">
              <FontAwesomeIcon icon={["fas", "user-circle"]} />
            </a>
          </div>
        </div>

        {/* after-hero section starts */}

        <div className="security-gif">
          <img src={securityGif} alt="security, privacy, ethicality stuff" />
        </div>

        <div className="features"></div>
      </div>
    </>
  );
}

export default Landing;
