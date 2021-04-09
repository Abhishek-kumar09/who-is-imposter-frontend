import React from 'react'
import logo from '../assets/logo.png';
import plus from '../assets/plus.png'
import love from '../assets/Love.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dashboard.css'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
        

        <div class="dashboard"> 

                
                    <div class="side-bar-header">  {/*display:flex*/}


                        <div class="logo">
                            <img src={logo} />
                        </div>

                        <div class="header">

                            <div id="white-text">
                                Who is
                            </div>
                            <div id="red-text">
                                Imposter ?
                            </div>


                        </div>

                        <div class="welcome">Welcome Username!</div>

                    </div>

                    <div class="row-second"> {/*display:flex*/}

                    <div class="side-bar-user-card">

                        <div class="user-card">

                            <div class="user-avatar">
                                <img /> {/*for user's avatar*/}

                            </div>

                            <div class="user-userid">
                                <p>@username</p>  {/*username data */}
                            </div>

                            <div class="logout-button">
                            <button><Link to="/">LOG OUT</Link></button>
                            </div>


                        </div>

                    </div>

                    <div class="postings">

                            <div class="create-post">
                                
                                    <div class="create-post-1"> {/*display:flex*/}
                                        <div class="plus-sign">
                                            <img src={plus} />

                                        </div>
                                        <div class="text">
                                            Write a post ....
                                        </div>
                                    </div>

                                <div class="post-button">
                                    <button>Post</button>
                                </div>

                            </div>

                        <div class="people-posts">
                        <div class="posts-post">
                            <div class="posts-post-1"> {/*display:flex*/}
                                {/*Get the data from backend*/}
                                <div class="avatar">
                                </div>

                                <div class="text">
                                    <p>Written Posts with blalalalal</p>
                                </div>
                            </div>
                            <div class="love-react">
                                <img src={love} alt="love-react" />
                            </div>

                        </div>

                        <div class="posts-post">
                            <div class="posts-post-1"> {/*display:flex*/}
                                {/*Get the data from backend*/}
                                <div class="avatar">
                                </div>

                                <div class="text">
                                    <p>Written Posts with blalalalal</p>
                                </div>
                            </div>
                            <div class="love-react">
                                <img src={love} alt="love-react" />
                            </div>

                        </div>

                            </div>
                            </div>

                            </div>

        </div>


        </>
    )
}

export default Dashboard;