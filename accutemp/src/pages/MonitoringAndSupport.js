import { NavLink } from "react-router-dom";
import truck from "../AT_truck-280x179.jpg"

function MonitoringAndSupport(){
    return(
        <div className= "outside-container">
           <img src = {truck}></img>
           <p>Need help?</p>
           <p>Accu-Temp provides comprehensive monitoring, maintenance and support services to keep your operation running smoothly.</p>
           <p>Through <b>preventive maintenance</b> and on-call <b>service agreements</b>, we ensure that your building automation systems remain stable and reliable for years to come.</p>
           <p>With <b>remote monitoring</b>, we provide real-time alerts to any change in your facility operation. And we can be “first line of defense” for assessing and remote-diagnosing any operational problems.</p>
           <p>With <b>advanced monitoring</b>, we leverage our advanced analytics tools to flag changes in your system before they become problems, potentially reducing your maintenance costs and truck-rolls substantially.</p>
           <p>Our trusted team of engineers, controls specialists and licensed electricians is at your disposal, whatever your support needs.</p>
        </div>
     
    )
}

export default MonitoringAndSupport;