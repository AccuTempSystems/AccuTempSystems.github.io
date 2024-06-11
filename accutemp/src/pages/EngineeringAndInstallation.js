import { NavLink } from "react-router-dom";
import ECRA from "../ECRA_ESA_Logo_280x179.jpg"

function EngineeringAndInstallation(){
    return(
        <div className= "outside-container">
            <img src = {ECRA}></img>
            <h2>Whether you’re under new construction or upgrading an existing facility, our trusted engineering and installation teams can help.</h2>
            <p>We design building automation systems to meet your priorities: comfort, energy efficiency, ease of operation and budget.</p>
            <p>Our versatile team tackles system upgrades with the same objectives. In many cases, we can even extend the usable lifetime of your existing equipment, while improving performance and reducing energy costs.</p>
            <p>Our installation team is made up of licensed electricians with extensive controls knowledge. They will work closely with other trades to ensure a smooth, well-executed implementation.</p>
            <p>Accu-Temp is a licensed electrical contractor under the Electrical Safety Authority.</p>
        </div>
     
    )
}

export default EngineeringAndInstallation;