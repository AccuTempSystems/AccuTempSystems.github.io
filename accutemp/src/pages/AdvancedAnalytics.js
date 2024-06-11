import { NavLink } from "react-router-dom";
import skyspark from "../skyspark-280x124.png"
import "./AdvancedAnalytics.css"

function AdvancedAnalytics(){
    return(
        <div className= "outside-container">
           <img src = {skyspark}></img>
           <h2>Whether you’re looking for better operational monitoring or a comprehensive energy management system, we have the right solution</h2>
           <div className= "div-container">
                <a href = "https://www.skyfoundry.com/">SkySpark, </a>
                <p className = "div-element"> our advanced analytics platform, provides clear real-time visualization of all your operational data.</p>
           </div>
           <p>Advanced monitoring or “continuous commissioning” scans for changes in your environment that indicate equipment is not performing optimally. SkySpark alerts you, at a glance, what the problem is and its probable cause.</p>
           <p>No more waiting for “alarms”. Reduce your maintenance costs by correcting problems before they happen. And before they cost you money.</p>
           <p>SkySpark captures your energy consumption profile in a simple meaningful graphical interface. Identify and rectify systems not running to specification and reduce your energy costs. You can even optimize your operation based on weather forecasts and time-of-day energy rates.</p>
           <p>Our solution readily integrates to your existing building management systems, through the power of the NiagaraAX framework or interfacing directly to your platforms.</p>
           <p>We can easily integrate to your business systems as well, providing accurate consolidated information to reconcile against your operating budgets.</p>
           <p>SkySpark will change the way you think about resource management. And the way you see it.</p>
           <p>Put our cloud-based analytics solutions to work for your operation.</p>

        </div>
     
    )
}

export default AdvancedAnalytics;