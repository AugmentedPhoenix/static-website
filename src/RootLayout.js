// Import React Modules
import React, {Fragment, useEffect, useState} from "react";

import { connect } from "react-redux";
import { addPlayer } from "./reduxStates/playerState/playerActions";
import {loadPlayerData} from "./utility/playerDataGetter";
import Logo from "./components/Logo";
import {Oval} from "react-loader-spinner";
import Navbar from "./components/Navbar";
import NextButton from "./components/NextButton";
import Card from "./components/Card";

const players = [
    [1, "Mr Mindless", "Lich", "Reaper", false],
    [2, "Desh Jomah", "Shiva", "Gunbreaker", false],
    [3, "Prae's Slave", "Lich", "Blackmage", false],
    [4, "Zaki Legs", "Lich", "Whitemage", false],
    [5, "Skyler Crown", "Twintania", "Dragoon", false],
    [6, "Kerialstraz Menethil", "Phoenix", "Dark Knight", false],
    [7, "Zour O'dimm", "Phoenix", "Scholar", false],
    [8, "Gio Redis", "Zodiark", "Astrologian", false],
    [9, "Leia Fae", "Phoenix", "Dancer", false]
]

const RootLayout = ({player, addPlayer}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [cardsFlipped, setCardsFlipped] = useState(false);
    const [cardInfoFlipped, setCardInfoFlipped] = useState(false);

    //change this to transition when everything that needs to be loaded is loaded for a seemless page swap
    useEffect(() => {
        setTimeout(function () {
            setIsLoading(false);
            setTimeout(function () {
                setShowContent(true);
            }, 750); //This needs to be the same as the transition time for the logo in App.css
        }, 3000);
    });

    React.useEffect(() => {
        let loaded = 0;
        players.forEach(player => {
            loadPlayerData(player[0], player[1], player[2], player[3], player[4], addPlayer)
                .then(() => {
                    loaded += 1
                    if(loaded === players.length) {
                        console.log("No longer loading")
                    }
                })
        });
    }, []);

    /*
    access redux state example
      React.useEffect(() => {
        if (player["v1.0"]) {
          console.log(player["v1.0"]);
        }
      }, [player]);

     */
    /*
    <Card_OLD
                 inGameName1={"Desh Jomah"}
                 server1={"Shiva"}
                 role1={"Gunbreaker"}
                 player1IsTrial={false}
                 inGameName2={"Zour O'dimm"}
                 server2={"Phoenix"}
                 role2={"Scholar"}
                 player2IsTrial={false}
                 isFlipped={cardsFlipped}
                 isInfoFlipped={cardInfoFlipped}
             />
             <Card_OLD
                 inGameName1={"Kerialstraz Menethil"}
                 server1={"Phoenix"}
                 role1={"Dark Knight"}
                 player1IsTrial={true}
                 inGameName2={"Gio Redis"}
                 server2={"Zodiark"}
                 role2={"Astrologian"}
                 player2IsTrial={false}
                 isFlipped={cardsFlipped}
                 isInfoFlipped={cardInfoFlipped}
             />
             <Card_OLD
                 inGameName1={"Mr Mindless"}
                 server1={"Lich"}
                 role1={"Reaper"}
                 player1IsTrial={false}
                 inGameName2={"Prae's Slave"}
                 server2={"Lich"}
                 role2={"Blackmage"}
                 player2IsTrial={false}
                 isFlipped={cardsFlipped}
                 isInfoFlipped={cardInfoFlipped}
             />
             <Card_OLD
                 inGameName1={"Skyler Crown"}
                 server1={"Twintania"}
                 role1={"Dragoon"}
                 player1IsTrial={false}
                 inGameName2={"Leia Fae"}
                 server2={"Phoenix"}
                 role2={"Dancer"}
                 player2IsTrial={false}
                 isFlipped={cardsFlipped}
                 isInfoFlipped={cardInfoFlipped}
             />
     */
    return <Fragment>
        <div className="App">
            <header className="App-header">

            </header>
            <body className="body">
            <Logo isBig={isLoading} isVisible={!showContent} />
            <div className={`loading ${isLoading}`}>
                <Oval color="#000000" secondaryColor="#282c34" />
            </div>
            <Navbar isVisible={showContent} />
            <div className={`content ${showContent ? "" : "hidden"}`}>
                <Card id1={1} id2={3} isFlipped={cardsFlipped} isInfoFlipped={cardInfoFlipped}/>
            </div>
            <div
                className={`down-button-holder ${showContent ? "" : "hidden"}`}
                onClick={() => {
                    setCardsFlipped(!cardsFlipped);
                    setTimeout(function () {
                        setCardInfoFlipped(!cardInfoFlipped);
                    }, 1100);
                }}
            >
                <NextButton></NextButton>
            </div>
            </body>
        </div>
    </Fragment>;
};

const mapStateToProps = (state) => ({
    player: state.player,
});

export default connect(mapStateToProps, { addPlayer })(RootLayout);
