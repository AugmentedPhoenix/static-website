import './App.css';
import Logo from "./components/Logo"
import {Oval} from "react-loader-spinner";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import NextButton from "./components/NextButton";

function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false)
    const [cardsFlipped, setCardsFlipped] = useState(false)
    const [cardInfoFlipped, setCardInfoFlipped] = useState(false)

    //change this to transition when everything that needs to be loaded is loaded for a seemless page swap
    useEffect(() => {
        setTimeout(function () {
            setIsLoading(false);
            setTimeout(function () {
                setShowContent(true);
            }, 750) //This needs to be the same as the transition time for the logo in App.css
        }, 3000)
    })

    console.log("This is a test log!")

    return (
        <div className="App">
            <header className="App-header">
                <Logo isBig={isLoading} isVisible={!showContent}/>
                <div className={`loading ${isLoading}`}>
                    <Oval color="#000000" secondaryColor="#282c34"/>
                </div>
                <Navbar isVisible={showContent}/>
                <div className={`content ${showContent ? "" : "hidden"}`}>
                    <Card inGameName1={'Desh Jomah'} server1={'Shiva'} inGameName2={'Both Fawn'} server2={'Twintania'} isFlipped={cardsFlipped} isInfoFlipped={cardInfoFlipped}/>
                    <Card inGameName1={'Claire Hart'} server1={'Shiva'} inGameName2={'Gio Redis'} server2={'Zodiark'} isFlipped={cardsFlipped} isInfoFlipped={cardInfoFlipped}/>
                    <Card inGameName1={'Mr Mindless'} server1={'Lich'} inGameName2={"Prae's Slave"} server2={'Lich'} isFlipped={cardsFlipped} isInfoFlipped={cardInfoFlipped}/>
                    <Card inGameName1={'Skyler Crown'} server1={'Twintania'} inGameName2={'Leia Fae'} server2={'Phoenix'} isFlipped={cardsFlipped} isInfoFlipped={cardInfoFlipped}/>
                </div>
                <div className={`down-button-holder ${showContent? "" : "hidden"}`}
                     onClick={() => {
                         setCardsFlipped(!cardsFlipped)
                         setTimeout( function (){setCardInfoFlipped(!cardInfoFlipped)
                         console.log("I am late")}, 1300)
                     }}
                >
                    <NextButton>
                    </NextButton>
                </div>
            </header>
        </div>
    );
}

export default App;
