import '../css/Card.css'
import axios from "axios";
import {useEffect, useState} from "react";

const Card = ({inGameName1, server1, inGameName2, server2, isFlipped, isInfoFlipped}) => {

    const [imgLink1, setImgLink1] = useState(null)
    const [imgLink2, setImgLink2] = useState(null)
    const [hovered, setHovered] = useState(false)
    //const [isLoading, setIsLoading] = useState(true)

    var link;
    useEffect(() => {
        if(inGameName1 !== ''){
            link = "https://xivapi.com/character/search?name=" + inGameName1.replace(' ', '+')
                + "&server=" + server1 + "&private_key=3675586e68a34b60a0ef60c02dee23a0c9621fbb8e9c49eba160781b5972d78c";

            //write some logic that firt checks if the img is already downloaded and ifso uses that img

            axios(link)
                .then(async response => {
                    let data = await response.data;
                    let results = data.Results;
                    let portraitLink = Object.values(results[0])[0];
                    console.log(portraitLink)
                    let _link = portraitLink.replace('c0_96x96.jpg', 'l0_640x873.jpg');
                    console.log(_link.split("?")[0])

                    setImgLink1(_link)
                });
        } else {
            link = "Test Card"
        }

        if(inGameName2 !== ''){
            link = "https://xivapi.com/character/search?name=" + inGameName2.replace(' ', '+')
                + "&server=" + server2 + "&private_key=3675586e68a34b60a0ef60c02dee23a0c9621fbb8e9c49eba160781b5972d78c";

            //write some logic that first checks if the img is already downloaded and ifso uses that img

            axios(link)
                .then(async response => {
                    let data = await response.data;
                    let results = data.Results;
                    let portraitLink = Object.values(results[0])[0];
                    console.log(portraitLink)
                    let _link = portraitLink.replace('c0_96x96.jpg', 'l0_640x873.jpg');
                    console.log(_link.split("?")[0])

                    setImgLink2(_link)
                });
        } else {
            link = "Test Card"
        }
    }, [])
    return (
        <div className="card-holder"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
        >
            <div className={`background-card ${hovered ? "hover" : ""}`}>
            </div>
            <div className={`card ${isFlipped? "back" : ""}`} style={{backgroundImage: `url(${isInfoFlipped? imgLink2 : imgLink1})`}}>
                <div className={`top-overlay`}>
                    {isInfoFlipped? inGameName2 : inGameName1}
                </div>
                <div className={`bottom-overlay`}>
                    <ul className={`card-ul`}>
                        <li className={`card-li`}>
                            <p className={`card-li-p`}>Erichthonios</p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p`}>Hippocampos</p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p`}>Phoinix</p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p`}>Hesperos</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;