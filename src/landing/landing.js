import React from 'react'
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './landing.css'

function Landing(){

    return(
        <>

        <div class="hero">
            <div class="hero-logo">
                <img src={logo} alt="imposter-logo" />
            </div>

            <div class="hero-header">
                <h2>Who is Imposter</h2>

            </div>
            <br></br>
            <div class="hero-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet mollis lorem quis semper. Integer non est non magna auctor egestas vitae eu magna. Cras dapibus tellus vitae dolor varius, non cursus lorem semper.</p>
            </div>

            <div class="hero-social-media-icons">
                <div class="icon">
                <FontAwesomeIcon icon={['fab', 'chrome']} size="xl" />
                </div>
                <div class="icon">
                <FontAwesomeIcon icon={['fab', 'github']} size="xl" />
                </div>
                
                <div class="icon">
                <FontAwesomeIcon icon={['fas', 'user-circle']} size="xl" />
                </div>
                

            </div>

        </div>

        </>
    )
}

export default Landing;