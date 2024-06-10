import { NavLink } from "react-router-dom";
import "./Home.css"
import building from "../homepage images/office-building-280x124.jpg"
import jigsaw from "../homepage images/jigsaw-puzzle-280x124.jpg"
import pie from "../homepage images/pie_chart-280x124.jpg"
import gear from "../homepage images/gear-system-280x124.jpg"
import laptop from "../homepage images/laptop-280x124.jpg"
import binoculars from "../homepage images/binoculars-280x124.jpg"

function Home(){
    return(
        <div>
            <div className= "body">
                <h1>Welcome to Accu-Temp Cooling & Heating Systems Inc.</h1> 
                <p>At Accu-Temp, we revolutionize the way you experience your built environment. Our cutting-edge building automation systems empower you to control and optimize every aspect of your space, from energy efficiency to comfort, security, and beyond</p>
            </div>
            
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
                    <div className= "inner-container">
                    <div className="card">
                        <NavLink to="/EngineeringAndInstallation" class="clickable">
                         <img src={gear} className="cardImage"></img>
                         <h3>Engineering & Installation</h3>
                        </NavLink>
                    </div>
                    <div className = "card">
                    <NavLink to="/AdvancedAnalytics" class="clickable">
                        <img src={laptop} className="cardImage"></img>
                        <h3>Advanced Analytics</h3>
                    </NavLink>
                    </div>
                    <div className ="card">
                    <NavLink to="/MonitoringAndSupport" class="clickable">
                        <img src={binoculars} className="cardImage"></img>
                        <h3>Monitoring & Support</h3>
                    </NavLink>
                    </div>
                
                    </div>
                </div>
            </div>
        </div>
     
    )
}

export default Home;