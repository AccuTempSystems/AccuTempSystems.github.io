import { NavLink } from "react-router-dom";
import "./Home.css"
import building from "../homepage images/office-building-280x124.jpg"
import jigsaw from "../homepage images/jigsaw-puzzle-280x124.jpg"
import pie from "../homepage images/pie_chart-280x124.jpg"

function Home(){
    return(
        <div>
            <h1>Welcome to Accu-Temp Cooling & Heating Systems Inc.</h1> 
            <p>At Accu-Temp, we revolutionize the way you experience your built environment. Our cutting-edge building automation systems empower you to control and optimize every aspect of your space, from energy efficiency to comfort, security, and beyond</p>
            <div className="flex-container">
                <div>
                    <div className= "inner-container">
                    <div className="card">
                    <NavLink to="/BuildingAutomation" class="clickable"> 
                        <img src={building} className="cardImage"></img>
                        <h3>Building Automation</h3>
                    </NavLink>
                    </div>
                    <div className="card">
                    <NavLink to="/SystemsIntegration" class="clickable"> 
                        <img src={jigsaw} className="cardImage"></img>
                        <h3>Systems Integration</h3>
                    </NavLink>
                    </div>
                    <div className="card"> 
                    <NavLink to="/ResourceManagement" class="clickable">
                         <img src={pie} className="cardImage"></img>
                        <h3>Resource Management</h3>
                    </NavLink>
                    </div>
                    </div>
                    <img></img>
                 
                    <NavLink to="/EngineeringAndInstallation" class="clickable">
                        <p>Engineering & Installation</p>
                    </NavLink>
                    <NavLink to="/AdvancedAnalytics" class="clickable">
                        <p>Advanced Analytics</p>
                    </NavLink>
                    <NavLink to="/MonitoringAndSupport" class="clickable">
                        <p>Monitoring & Support</p>
                    </NavLink>
                </div>
            </div>
        </div>
     
    )
}

export default Home;