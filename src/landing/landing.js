import React from "react";
import logo from "../assets/logo.png";
import securityGif from "../assets/security1.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./landing.css";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

function Landing({ user }) {
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <>
      <div className="login-button">
        {user !== null
          ? <Link to="/UserDashboard">
            {user.displayName}
        </Link>
          :
          <Link onClick={handleGoogleSignIn}>
            Login
        </Link>}
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
              <FontAwesomeIcon icon={["fab", "chrome"]} />
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>

          <div className="icon" onClick={handleGoogleSignIn}>
            <a href="#">
              <FontAwesomeIcon icon={["fas", "user-circle"]} />
            </a>
          </div>
        </div>
      </div>

      {/* after-hero section starts */}
      <h2>Know our platform</h2>

      <div className="second-part">
        <div className="security-gif">
          <img src={securityGif} alt="security, privacy, ethicality stuff" />
        </div>

        <div className="features">
          <div className="feature">
            <div className="tick-icon">
              {" "}
              <FontAwesomeIcon icon={["fas", "check"]} />
            </div>

            <div className="text">
              Analyzes the authenticity of posts you see on Twitter
            </div>
          </div>

          <div className="feature">
            <div className="tick-icon">
              {" "}
              <FontAwesomeIcon icon={["fas", "check"]} />
            </div>

            <div className="text">
              Checks the forms you fill, analyzes the data-fields
            </div>
          </div>

          <div className="feature">
            <div className="tick-icon">
              {" "}
              <FontAwesomeIcon icon={["fas", "check"]} />
            </div>

            <div className="text">
              Helps you stay safe from unethical and shady platforms
            </div>
          </div>

          <div className="feature">
            <div className="tick-icon">
              {" "}
              <FontAwesomeIcon icon={["fas", "check"]} />
            </div>

            <div className="text">
              You can post and see other&apos;s posts and reviews about the
              sites you visit
            </div>
          </div>

          <div className="feature">
            <div className="tick-icon">
              {" "}
              <FontAwesomeIcon icon={["fas", "check"]} />
            </div>

            <div className="text">Warns you for creepy imposters around!</div>
          </div>
        </div>
      </div>

      <div className="footer">
        Made with &#9829; by Ravisha, Abhishek and Siddesh
      </div>
    </>
  );
}

export default Landing;
