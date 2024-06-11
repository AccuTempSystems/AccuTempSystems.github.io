import { NavLink } from "react-router-dom";
import dave from "../DaveVoll-280x354.jpg"

function OurHistory(){
    return(
        <div className= "outside-container">
           <img src ={dave}></img>
           <p>Dave Voll 1946-2011</p>
           <p>Formed in 1982 by Dave Voll and his nephew Chris Voll, Accu-Temp began as an HVAC service company in Waterloo County. Within a few short years, the company grew and was soon providing 24-hour service and installation for its many customers.           </p>
           <p>By the early 90’s Chris’s interest in HVAC controls expanded the company’s services to include building automation; Dave continued to run the HVAC service side of the company. As the field of building automation matured from pneumatic to electronic to computerized, Accu-Temp led the way by continually adopting new technology and developing creative operating sequences to meet its clients needs</p>
           <p>By the late 90’s, it was clear that Accu-Temp had a solid building automation client base and so the controls side of the company started to expand. Since 2002, Accu-Temp has been at the forefront of browser-based networked building automation systems. With over 200 sites successfully installed, Accu-Temp has solid experience for its custom program solutions for buildings and systems.</p>
           <p>In 2007, with Dave winding down his career, Accu-Temp restructured to focus exclusively on building automation.</p>
           <p>Accu-Temp continues to grow, building on our solid controls background with systems integration, resource manangement and advanced analyitics services.</p>
        </div>
     
    )
}

export default OurHistory;