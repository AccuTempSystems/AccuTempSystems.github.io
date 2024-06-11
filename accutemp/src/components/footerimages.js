import {NavLink} from "react-router-dom";
import "./footerimages.css"
import ACI from "../ACI_Logo_2012.jpg"
import tridium from "../LogoTridium.jpg"
import skyfoundry from "../skyfoundry_blue.png"

function footerimages(){
    return(
    <div className="background-1">
        <   img src={ACI} className = "footer-img"></img>
        <   img src={tridium} className = "footer-img"></img>
        <   img src={skyfoundry} className = "footer-img"></img>
          
   
      
      
    </div>
     
    )
}

export default footerimages;