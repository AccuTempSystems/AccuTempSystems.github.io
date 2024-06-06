import {NavLink} from "react-router-dom";
import "./footer.css"
import phone from "../../src/phone-call.png"


function footer(){
    return(
      <div className="container">
        <img src={phone} className = "icon"></img>
        <a className="phone" href = "tel:519-896-7890">(519) 896-7027</a>
      </div>
    )
}

export default footer;