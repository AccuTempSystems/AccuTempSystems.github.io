import {NavLink} from "react-router-dom";
import "./navbar.css"
import image from "../2023 AccuTemp NoBack.jpg"

function NavBar(){
    return(
        <body>
        <header class="menu">
            <NavLink to ="accyutemp" class="clickable">
                <img src={image} className= "logo"></img>
            </NavLink>
    
            <div class = "menu">
                <div class="menu">
                <NavLink to="accutemp" class="clickable"> 
                        <p className="item1">Home</p>
                    </NavLink>
                </div>
                <div class = "dropdown">
                    <div class="menu-title">Solutions</div>
                    <div class="dropdown-content">
                    <NavLink to="/BuildingAutomation" class="clickable"> 
                        <p className="item">Building Automation</p>
                    </NavLink>
                    <NavLink to="/SystemsIntegration" class="clickable"> 
                        <p className="item">Systems Integration</p>
                    </NavLink>
                    <NavLink to="/ResourceManagement" class="clickable">
                        <p className="item">Resource Management</p>
                    </NavLink>
                    </div>
                </div>
                <div class = "dropdown">
                    <div class="menu-title">Services</div> 
                    <div class="dropdown-content">
                        <NavLink to="/EngineeringAndInstallation" class="clickable">
                            <p className="item">Engineering & Installation</p>
                         </NavLink>
                        <NavLink to="/AdvancedAnalytics" class="clickable">
                          <p className="item">Advanced Analytics</p>
                        </NavLink>
                        <NavLink to="/MonitoringAndSupport" class="clickable">
                            <p className="item">Monitoring & Support</p>
                        </NavLink>
                    </div>
                </div>
                <div class = "dropdown">
                    <div class="menu-title">Our Company</div>
                    <div class="dropdown-content">
                        <NavLink to ="/OurHistory">
                         <p className="item"> Our History </p>
                        </NavLink>
                       
                    </div>
                </div>
                <div class = "dropdown">
                    <NavLink to = "/Contact">
                       <div class="menu-title">Contact Us</div>
                    </NavLink>
                    
                    <div class="dropdown-content">
                        <a rel="noopener" target="_blank" href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </header>
    </body>
    )
}

export default NavBar;