import React from 'react'
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dashboard.css'

const Dashboard = () => {
    return (
        <>
        <div class="dashboard">
            <div class="side-bar">
        <div class="side-bar-header">


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

        </div>

        <div class="side-bar-user-card">

            <div class="user-card">

                <div class="user-avatar">
                    <img /> {/*for user's avatar*/}

                </div>

                <div class="user-userid">
                    <p>@username</p>  {/*username data */}
                </div>

                <div class="logout-button">
                    <button>LOG OUT</button>
                </div>


            </div>

        </div>
        </div>

        </div>


        </>
    )
}

export default Dashboard;