import '../css/Card.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {buildSchema, graphql} from "graphql";
import {gql, GraphQLClient} from "graphql-request";

const Card = ({inGameName1, server1, inGameName2, server2, isFlipped, isInfoFlipped}) => {

    const [imgLink1, setImgLink1] = useState(null)
    const [player1Rankings, setPlayer1Rankings] = useState(["0", "0", "0", "0", "0"])
    const [player1Colors, setPlayer1Colors] = useState([[0,0,0,], [0,0,0], [0,0,0], [0,0,0], [0,0,0]])
    const [imgLink2, setImgLink2] = useState(null)
    const [player2Rankings, setPlayer2Rankings] = useState(["0", "0", "0", "0", "0"])
    const [player2Colors, setPlayer2Colors] = useState([[0,0,0,], [0,0,0], [0,0,0], [0,0,0], [0,0,0]])
    const [hovered, setHovered] = useState(false)
    //const [isLoading, setIsLoading] = useState(true)

    const getParseColor = (parse) => {
        if(parse < 25){
            return [102, 102, 102] //gray
        } else if (parse > 25 && parse < 49.9 ) {
            return [30, 255, 0]
        } else if (parse > 50 && parse < 74.9) {
            return [0, 112, 255]
        } else if (parse > 75 && parse < 94.9) {
            return [163, 53, 238]
        } else if (parse > 95 && parse < 98.9) {
            return [255, 128, 0]
        } else if (parse > 99 && parse < 100) {
            return [226, 104, 168]
        } else {
            return [229, 204, 128]
        }
    }

    async function getPlayerData(playername, server, oneTwo){
        const endpoint = "https://www.fflogs.com/api/v2/client"
        const client = new GraphQLClient(endpoint, {
            headers: {
                authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWZmNGY0My03YzE4LTQwYjYtOTM0NS0yMzYxMzNmY2U5OTgiLCJqdGkiOiJiOTQxYjZlZTc5NDYzYWJmMmY0ZWUzMDdiNzU2ZDVlNzVmZTUyMDJmZjA1YzJkNzg2ZmI0MmYyNWFmMDM0OWUyMjBlNzRiOTc3ZTg1NDkxMyIsImlhdCI6MTY0OTI2MDg5Mi43OTk0MDcsIm5iZiI6MTY0OTI2MDg5Mi43OTk0MDksImV4cCI6MTY1OTYyODg5Mi43OTI1MSwic3ViIjoiIiwic2NvcGVzIjpbInZpZXctdXNlci1wcm9maWxlIiwidmlldy1wcml2YXRlLXJlcG9ydHMiXX0.KqhjXIqCGW1kVgMGJfXChjdU5XCQa--LxDatOFr_94Z8EzjtQOM_vX1btrztBbZ_o8YL6PAUflxgrlFyFP3wVahJNb0X_7a6sGcqhOT_ha3fkAx2i2wYnePIOGIvUqAUcgs2Qw5iAGvcBunMaa---ak2iGihR-gePaV3P5HWNaxATqeJbtBgVFTtH4NZewyxa10BKucr0f4tJYe2fqilnwAuWYOKzDQ8GqfNnGDfilLiIByK6NdzXpSdCjyYZixeWaOt8o3KAaRSCyNqfqym62zFo1NxEuAChSIqIDDWdanF7SCTTFrcXNXTsTz6gl3N8IliPTONoGdNA-cixWvJA71J_bbGwt3DOlNLz4iGHua3lLnLXloK2vcyXisy8o1UuLZOrjOJAfw0SbpFe20VcfFsUmdKpsovIvLTlbOItxH0DyUMRF3hANpWv2OzCdB9wNaVDxRwW0z97vfREg2b_u4SwcMEXKRvNGzVDmOzi6ol_bF0qkiavPBTXGUdVtha75gFQ61AXFlJcJF2OXpKq7474PYIVLcp2bHE3C8XG1-wzg7qv4MJof0cqqy2xwkTEiSu9JtwTN2G0mUFtelGKj3uMqtqB2Mr25QuE6mkqJHu-_krhytaJIsSBkZLWKBLCzn_Wz9Z7n8KiMTP5XZt9WMa8WlgRuJOinzfZLfhBr0',
            },
        })
        const query = gql`
         {
                characterData{
                    character(name: "${playername}", serverSlug: "${server}", serverRegion: "EU") {
                        name,
                        zoneRankings(metric: rdps, timeframe: Historical)
                    }
                }
            }
        `

        const data = await client.request(query);
        const zoneRankings = data.characterData.character.zoneRankings;
        if(oneTwo) {
            setPlayer1Rankings([
                zoneRankings.rankings[0].rankPercent.toFixed(1),
                zoneRankings.rankings[1].rankPercent.toFixed(1),
                zoneRankings.rankings[2].rankPercent.toFixed(1),
                zoneRankings.rankings[3].rankPercent.toFixed(1),
                zoneRankings.rankings[4].rankPercent.toFixed(1)
            ])
            setPlayer1Colors([
                getParseColor(player1Rankings[0]),
                getParseColor(player1Rankings[1]),
                getParseColor(player1Rankings[2]),
                getParseColor(player1Rankings[3]),
                getParseColor(player1Rankings[4])
            ])
        } else {
            setPlayer2Rankings([
                zoneRankings.rankings[0].rankPercent.toFixed(1),
                zoneRankings.rankings[1].rankPercent.toFixed(1),
                zoneRankings.rankings[2].rankPercent.toFixed(1),
                zoneRankings.rankings[3].rankPercent.toFixed(1),
                zoneRankings.rankings[4].rankPercent.toFixed(1)
            ])
            setPlayer2Colors([
                getParseColor(player2Rankings[0]),
                getParseColor(player2Rankings[1]),
                getParseColor(player2Rankings[2]),
                getParseColor(player2Rankings[3]),
                getParseColor(player2Rankings[4])
            ])
        }
    }

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

        getPlayerData(inGameName1, server1, true);

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

        getPlayerData(inGameName2, server2, false);

        console.log(getParseColor(player1Rankings[2]))

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
                            <p className={`card-li-p-front`}>Erichthonios</p>
                            <p className={`card-li-p-parse`} style={{color: `${isInfoFlipped? player2Colors[0] : player1Colors[0]}`}}>{player1Rankings[0]}</p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p-front`}>Hippocampos</p>
                            <p className={`card-li-p-parse`} style={{color: `${isInfoFlipped? player2Colors[1] : player1Colors[1]}`}}>{player1Rankings[1]}</p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p-front`}>Phoinix</p>
                            <p className={`card-li-p-parse`} style={{color: `${isInfoFlipped? player2Colors[2] : player1Colors[2]}`}}>{player1Rankings[2]}</p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p-front`}>Hesperos</p>
                            <p className={`card-li-p-parse`} style={{color: `${isInfoFlipped? player2Colors[3] : player1Colors[3]}`}}>{player1Rankings[3]}</p>
                        </li>
                        <li className={`card-li`}>
                            <p className={`card-li-p-front`}>Hesperos II</p>
                            <p className={`card-li-p-parse`} style={{color: `${isInfoFlipped? player2Colors[4] : player1Colors[4]}`}}>{player1Rankings[4]}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;