import {NavLink} from "react-router-dom";
import "./navbar.css"

function NavBar(){
    return(
        <body>
        <header class="menu">
            <div class = "menu">
                <div class="menu">Home</div>
                <div class = "dropdown">
                    <div class="menu-title">Solutions</div>
                    <div class="dropdown-content">
                        <a rel="noopener" target="_blank" href="">Building Automation</a>
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
             
                <div class="menu">Our Company</div>
                <div class="menu">Contact Us</div>
            </div>
        </header>
    </body>
    )
}

export default NavBar;