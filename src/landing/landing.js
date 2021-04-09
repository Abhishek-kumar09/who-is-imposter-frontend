import React from 'react'
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './landing.css'
import {BrowserRouter, Link, Route} from 'react-router-dom'

function Landing(){

    return(
        <>
        <div class="login-button">
            
            <Link to = "/UserDashboard">Login </Link>
            
        
        </div>

        <div class="hero">

            <div class="hero-logo">
                <img src={logo} alt="imposter-logo" />
            </div>

            <div class="hero-header">
               <div id="white-text">
                    Who is &nbsp;
               </div>
               <div id="red-text">
                    Imposter ?
               </div>

            </div>
            <br></br>
            <div class="hero-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet mollis lorem quis semper. Integer non est non magna auctor egestas vitae eu magna. Cras dapibus tellus vitae dolor varius, non cursus lorem semper.</p>
            </div>

            <div class="add-to-chrome-button">
                <p> + Add to Chrome</p>
            </div>

            <div class="hero-social-media-icons">
                <div class="icon">
                    <a href="#">
                <FontAwesomeIcon icon={['fab', 'chrome']} fa-2x />
                    </a>
                </div>
                <div class="icon">
                <a href="#">
                <FontAwesomeIcon icon={['fab', 'github']}  />
                </a>
                </div>
                
                <div class="icon">
                <a href="#">
                <FontAwesomeIcon icon={['fas', 'user-circle']}  />
                </a>
                </div>
                

            </div>

        </div>

        </>
    )
}

export default Landing;