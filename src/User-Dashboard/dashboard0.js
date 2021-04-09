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
        <div className="side-bar-header">
          {" "}
          {/* display:flex */}
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="header">
            <div id="white-text">Who is</div>
            <div id="red-text">Imposter ?</div>
          </div>
          <div className="welcome">Welcome Username!</div>
        </div>

        <div className="row-second">
          {" "}
          {/* display:flex */}
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

            <div className="people-posts">
              <div className="posts-post">
                <div className="posts-post-1">
                  {" "}
                  {/* display:flex */}
                  {/* Get the data from backend */}
                  <div className="avatar"></div>
                  <div className="text">
                    <p>Written Posts with blalalalal</p>
                  </div>
                </div>
                <div className="love-react">
                  <img src={love} alt="love-react" />
                </div>
              </div>

              <div className="posts-post">
                <div className="posts-post-1">
                  {" "}
                  {/* display:flex */}
                  {/* Get the data from backend */}
                  <div className="avatar"></div>
                  <div className="text">
                    <p>Written Posts with blalalalal</p>
                  </div>
                </div>
                <div className="love-react">
                  <img src={love} alt="love-react" />
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
