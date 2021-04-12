import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import plus from "../assets/plus.png";
import love from "../assets/Love.png";
import "./dashboard.css";
import { useHistory } from "react-router-dom";
import { logout, firestore } from "../firebase";

const Dashboard = ({ user }) => {
  const history = useHistory();
  console.log("user", user);

  const [feeds, setfeeds] = useState(null);

  useEffect(() => {
    fetchFromFirestore();
  }, []);

  const fetchFromFirestore = () => {
    const dataArray = [];
    firestore
      .collection("feeds")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          const auctionData = doc.data();
          dataArray.push({ ...auctionData });
        });
        setfeeds(dataArray);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("logout Successfull");
        history.push("/");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <>
      {console.log(user)}
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
              {user ? (
                <img className="user-avatar" src={user.photoURL} />
              ) : (
                <div className="user-avatar" />
              )}

              <div className="user-userid" onClick={fetchFromFirestore}>
                <h3
                  style={{
                    marginLeft: "auto",
                    color: "#fff",
                    background: "transparent",
                  }}
                >
                  {user ? user.displayName : "@username"}
                </h3>{" "}
                {/* username data */}
              </div>

              <div className="logout-button">
                <button onClick={handleLogout}>LOG OUT</button>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* col-1 ends */}
        <div className="col-2">
          <div className="welcome">Welcome User!</div>

          <div className="postings">
            <div className="create-post">
              <div className="create-post-1">
                {" "}
                {/* display:flex */}
                <div className="plus-sign">
                  <img src={plus} />
                </div>
                <textarea
                  className="text"
                  name="text-input"
                  placeholder="Write a Post"
                  multiple
                ></textarea>
              </div>

              <div className="post-button">
                <button>Post</button>
              </div>
            </div>
          </div>

          {feeds !== null ? (
            feeds.map(({ name, text, loves }, idx) => {
              return (
                <div key={idx} className="posting">
                  <div className="pos">
                    <div className="post1">
                      {" "}
                      {/* display:flex */}
                      {/* Get the data from backend */}
                      <img
                        className="avatar"
                        src={`https://source.unsplash.com/256x256/?face,${idx}`}
                      ></img>
                      <div className="text" style={{ padding: "24px 8px" }}>
                        {text.split(".").map((item, idx) => {
                          return (
                            <p key={idx} style={{ margin: "8px" }}>
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="second-row">
                    <div className="love-reacts">
                      <div className="love-react">
                        <img src={love} alt="love-react" />
                      </div>

                      <div className="love-reactions">{loves}</div>
                    </div>

                    <div className="show-more-button">
                      <a>Show More...</a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Loading Data</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// https://source.unsplash.com/256x256/?face
