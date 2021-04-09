import React from "react";
import logo from "../assets/logo.png";
import plus from "../assets/plus.png";
import love from "../assets/Love.png";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="col-1">
          <div className="logoAndHeader">
            {" "}
            {/* display: flex */}
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="header">
              <div id="white-text">Who is</div>
              <div id="red-text">Imposter ?</div>
            </div>
          </div>

          <div className="side-bar-user-card">
            <div className="user-card">
              <div className="user-avatar">
                <img /> {/* for user's avatar */}
              </div>

              <div className="user-userid">
                <p>@username</p> {/* username data */}
              </div>

              <div className="logout-button">
                <button>
                  <Link to="/">LOG OUT</Link>
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* col-1 ends */}
        <div className="col-2">
          <div className="welcome">Welcome Username!</div>

          <div className="postings">
            <div className="create-post">
              <div className="create-post-1">
                {" "}
                {/* display:flex */}
                <div className="plus-sign">
                  <img src={plus} />
                </div>
                <div className="text">Write a post ....</div>
              </div>

              <div className="post-button">
                <button>Post</button>
              </div>
            </div>
          </div>
          <div>
            <div className="posting">
              <div className="post1">
                {" "}
                {/* display:flex */}
                {/* Get the data from backend */}
                <div className="avatar"></div>
                <div className="text">
                  <p>Written Posts with blalalalal</p>
                </div>
              </div>

              <div className="second-row">
                <div className="love-reacts">
                  <div className="love-react">
                    <img src={love} alt="love-react" />
                  </div>

                  <div className="love-reactions">12</div>
                </div>

                <div className="show-more-button">
                  <a>Show More...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
