import "./Program.css"
// import program1 from "../../assets/program-1.png"
import both from "../../assets/both.png"
import sir from  "../../assets/sir.png"
import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png" 
import program_icon_3 from "../../assets/program-icon-3.png" 
import sameersir from "../../assets/sameersir.png"
import "./Program.css"
const Programs=()=>{
    return<>
    
    <div id ="programs">
        <div id="program-container">
            <div id="program">
                <img src={sameersir}></img>  
                <div id="caption">
                    <img src={program_icon_1}></img>
                    <p>Co-Founder</p>
                </div>
            </div>
            <div className="program-title">
                <h3>Sameer Sadana</h3>
                <p>Building the future with AppX & 100X School |<br/> YC-backed founder |<br/>   MAIT Delhi alum</p>
            </div>
        </div>

        <div id="program-container">
            <div id="program">
                <img src={both}></img>
                <div id="caption">
                    <img src={program_icon_2}></img>
                    <p>100XSchool</p>
                </div>
            </div>
            <div className="program-title">
                <h3>100X School</h3>
                <p>Where Coders are Made</p>
            </div>
        </div>

        <div id="program-container">
            <div id="program">
                <img src={sir}></img>
                <div id="caption">
                    <img src={program_icon_3}></img>
                    <p>Founder</p> 
                </div>
            </div>
            <div className="program-title">
                <h3>Harkirat Singh</h3>
                <p>Founder of 100xSchool and 100xDevs <br/>| Ex-Amazon & Goldman Sachs | 2x GSoC | Youtuber| <br/> | IIT Roorkee CSE |

</p>
            </div>
        </div>
    </div>    
    
    </>

}

export default Programs