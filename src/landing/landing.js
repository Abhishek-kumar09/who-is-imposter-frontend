import React from 'react'
import logo from '../assets/logo.png';
import securityGif from '../assets/security1.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './landing.css'
import {Link} from 'react-router-dom'

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
                <FontAwesomeIcon icon={['fab', 'chrome']} />
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

            {/*after-hero section starts*/}
            <h2>Know our platform</h2>

            <div class="second-part">

                

            <div class="security-gif">
                <img src={securityGif} alt="security, privacy, ethicality stuff" />

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

                        <div class="feature">
                            <div class="tick-icon"> <FontAwesomeIcon icon={['fas', 'check']} /></div>

                            <div class="text">Analyzes the authenticity of posts you see on Twitter</div>

                        </div>

                        <div class="feature">
                            <div class="tick-icon"> <FontAwesomeIcon icon={['fas', 'check']} /></div>

                            <div class="text">Checks the forms you fill, analyzes the data-fields</div>

                        </div>

                        <div class="feature">
                            <div class="tick-icon"> <FontAwesomeIcon icon={['fas', 'check']} /></div>

                            <div class="text">Helps you stay safe from unethical and shady platforms</div>

                        </div>

                        <div class="feature">
                            <div class="tick-icon"> <FontAwesomeIcon icon={['fas', 'check']} /></div>

                            <div class="text">You can post and see other's posts and reviews about the sites you visit</div>

                        </div>

                        <div class="feature">
                            <div class="tick-icon"> <FontAwesomeIcon icon={['fas', 'check']} /></div>

                            <div class="text">Warns you for creepy imposters around!</div>

                        </div>

                       
            </div>
            

        </div>

        <div class="footer">

            Made with &#9829; by Ravisha, Abhishek and Siddesh

        <div className="security-gif">
          <img src={securityGif} alt="security, privacy, ethicality stuff" />
        </div>

        <div className="features"></div>
      </div>
    </>
  );
}

export default Landing;
