import {NavLink} from "react-router-dom";
import "./footer.css"
import phone from "../../src/phone-call.png"
import email from "../../src/email.png"
import fax from "../../src/fax.png"


function footer(){
    return(
    <div className="background">
         <div className="container">
        <   img src={phone} className = "icon"></img>
            <a className="phone" href = "tel:519-896-7890">(519) 896-7027</a>
        </div>
        <div className="container">
        <   img src={email} className = "icon"></img>
            <a className="phone" href = "mailto:info@accutempsystems.com">info@accutempsystems.com</a>
        </div>
        <div className="container">
        <   img src={fax} className = "icon"></img>
            <a className="phone" href = "tel:519-748-5510">(519) 748-5510</a>
        </div>
      
      
    </div>
     
    )
}

export default footer;