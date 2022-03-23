import "../css/NextButton.css"
import ArrowDown from "../resources/images/arrow_down.png"
import {useState} from "react";

const NextButton = () => {

    const [hovered, setHovered] = useState(false)

    return (
        <div className="holder"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
        >
            <div className={`button-back ${hovered ? 'hover' : ''}`}>
            </div>
            <div className="button-front">
                <img src={ArrowDown}/>
            </div>
        </div>
    )
}

export default NextButton;