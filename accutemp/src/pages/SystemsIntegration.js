import { NavLink } from "react-router-dom";
import protocols from "../protocols-280x179.jpg"

function SystemsIntegration(){
    return(
        <div className= "outside-container">
           <img src = {protocols}></img>
           <h2>Accu-Temp wields the powerful integration tools of NiagaraAX to bring all your building controls into a single coherent management system.</h2>
           <p>Our solutions provide a secure, web-based interface for all building operations, also accessible by hand-held and mobile devices.</p>
           <p>Building owners can protect their investment in existing direct digital controls, extending their useful lifetime while enjoying next-generation access and control.</p>
           <p>An integrated management system gives access to consistent, reliable operating data. Applying monitoring tools and advanced analytics can further increase the efficiency and reliability of all your building systems and reduce operating costs.</p>
           <p>Our team of controls and network specialists are trained in a vast array of platforms, protocols and technologies. Let us tailor an integrated solution to meet your needs.</p>
        </div>
     
    )
}

export default SystemsIntegration;