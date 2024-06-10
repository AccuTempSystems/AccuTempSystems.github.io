import {NavLink} from "react-router-dom";
import "./navbar.css"
import image from "../AccuTemp2 monochrome.jpg"

function NavBar(){
    return(
        <body>
        <header class="menu">
            <img src={image} className= "logo"></img>
            <div class = "menu">
                <div class="menu">Home</div>
                <div class = "dropdown">
                    <div class="menu-title">Solutions</div>
                    <div class="dropdown-content">
                    <NavLink to="/BuildingAutomation" class="clickable"> 
                        <p>Building Automation</p>
                    </NavLink>
                        <a rel="noopener" target="_blank" href="">Systems Integration</a>
                        <a rel="noopener" target="_blank" href="">Resource Management</a>
                    </div>
                </div>
                <div class = "dropdown">
                    <div class="menu-title">Services</div> 
                    <div class="dropdown-content">
                        <a rel="noopener" target="_blank" href="">Engineering & Installation</a>
                        <a rel="noopener" target="_blank" href="">Advanced Analytics</a>
                        <a rel="noopener" target="_blank" href="">Monitoring & Support</a>
                    </div>
                </div>
                <div class = "dropdown">
                    <div class="menu-title">Our Company</div>
                    <div class="dropdown-content">
                        <a rel="noopener" target="_blank" href="">Our History</a>
                    </div>
                </div>
                <div class = "dropdown">
                    <div class="menu-title">Contact Us</div>
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