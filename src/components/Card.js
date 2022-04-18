import '../css/Card.css'
import {useState} from "react";
import TrialTag from "./TrialTag";
import {connect} from "react-redux";
import {addPlayer} from "../reduxStates/playerState/playerActions";

const Card = ({id1, id2, isFlipped, isInfoFlipped, player}) => {

    const [hovered, setHovered] = useState(false)

    console.log(id1 + " " + id2 + " " + isFlipped + " " + isInfoFlipped)
    console.log(player[1])

    return (
        <div className="card-holder"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
        >
            <div className={`background-card ${hovered ? "hover" : ""}`}>
            </div>
            <div className={`card ${isFlipped? "back" : ""}`} style={{backgroundImage: `url(${isInfoFlipped? player[id2].link : player[id1].link})`}}>
                <div className={`top-overlay`}>
                    {isInfoFlipped? player[id2].name : player[id1].name}
                </div>
                <TrialTag isTrial={isInfoFlipped? player[id2].isTrial : player[id1].isTrial}/>
                <div className={`bottom-overlay`}>
                    <ul className={`card-ul`}>
                        <li className={`card-li`}>
                            <p className={`card-li-p-front`}>Erichthonios</p>
                            <p className={`card-li-p-parse`}
                               style={
                                {color: `${isInfoFlipped? player[id2].parses.p1.color : player[id1].parses.p1.color}`}
                            }>
                                {isInfoFlipped? player[id2].parses.p1.parse : player[id1].parses.p1.parse}
                            </p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p-front`}>Hippocampos</p>
                            <p className={`card-li-p-parse`}
                               style={
                                {color: `${isInfoFlipped? player[id2].parses.p2.color : player[id1].parses.p2.color}`}
                            }>
                                {isInfoFlipped? player[id2].parses.p2.parse : player[id1].parses.p2.parse}
                            </p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p-front`}>Phoinix</p>
                            <p className={`card-li-p-parse`}
                               style={
                                {color: `${isInfoFlipped? player[id2].parses.p3.color : player[id1].parses.p3.color}`}
                            }>
                                {isInfoFlipped? player[id2].parses.p3.parse : player[id1].parses.p3.parse}
                            </p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p-front`}>Hesperos</p>
                            <p className={`card-li-p-parse`}
                               style={
                                {color: `${isInfoFlipped? player[id2].parses.p4p1.color : player[id1].parses.p4p1.color}`}
                            }>
                                {isInfoFlipped? player[id2].parses.p4p1.parse : player[id1].parses.p4p1.parse}
                            </p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p-front`}>Hesperos II</p>
                            <p className={`card-li-p-parse`}
                               style={
                                {color: `${isInfoFlipped? player[id2].parses.p4p2.color : player[id1].parses.p4p2.color}`}
                            }>
                                {isInfoFlipped? player[id2].parses.p4p2.parse : player[id1].parses.p4p2.parse}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    player: state.player,
});

export default connect(mapStateToProps, { addPlayer })(Card);