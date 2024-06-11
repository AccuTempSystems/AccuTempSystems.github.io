import { NavLink } from "react-router-dom";
import skyspark from "../skyspark-280x124.png"

function ResourceManagement(){
    return(
        <div className= "outside-container">
           <img src={skyspark}></img>
           <h2>Why pay for an integrated building management system if you can’t see the ROI?</h2>
           <p>The real value is in your data. But who has time to pore over endless trend logs?</p>
           <p> <a href = "https://www.skyfoundry.com/">SkySpark</a>, our advanced analytics platform, provides clear, real-time visualization of all your operational data. <a href = "https://www.skyfoundry.com/">SkySpark</a> alerts you, at a glance, to any equipment operating below optimum. And captures your energy consumption profile in a simple, meaningful graphical interface. Its powerful analytics engine even isolates the systems that are inefficient and predicts upcoming equipment problems, substantially reducing your operating and maintenance costs.</p>
           <p> <a href = "https://www.skyfoundry.com/">SkySpark</a> can integrate to your business systems as well, providing accurate, consolidated information to reconcile against your operating budgets.</p>
           <p> Our cloud-based resource management solutions will revolutionize the way you look at your building operations. </p>
           <p> And save you money.</p>
        </div>
     
    )
}

export default ResourceManagement;