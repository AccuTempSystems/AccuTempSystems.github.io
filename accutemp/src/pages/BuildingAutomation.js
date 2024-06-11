import { NavLink } from "react-router-dom";
import green from "../Canada-Green-Building-Council-280x179.jpg"

function BuildingAutomation(){
    return(
        <div className= "outside-container">
            <img src = {green}></img>
            <p> Since 1989, Accu-Temp has built upon our partnership with <a href = "https://buildings.honeywell.com/us/en">Honeywell Environmental Controls</a> to provide leading-edge building automation solutions. As an Authorized Controls Integrator, we have strategic access to Honeywell technologies and resources, bringing you some of the strongest controls platforms in the industry.</p>
            <p>Our NiagaraAX certified controls specialists, teamed with our experienced installers – all licensed electricians – will meet your building automation needs, on schedule and on budget.</p>
            <p>As a LEED® accredited member of the <a href = "https://www.cagbc.org/">Canada Green Building Council</a>, Accu-Temp strives to deliver safe, healthy environments. Our distinct control strategies maximize comfort and indoor air quality while maintaining energy efficiency and extending equipment lifespan.</p>
        </div>
     
    )
}

export default BuildingAutomation;