import '../css/Navbar.css'
import AvarumSlogan from "../resources/images/avarum-slogan.png";

const Navbar = ({isVisible}) => {
    return (
        <div className={`navbar-holder ${isVisible ? "" : "hidden"}`}>
            <div className="navbar">
                <p className={`navbar-text`}>Home</p>
                <p className={`navbar-text`}>Roster</p>
                <img src={AvarumSlogan} className="logo-navbar" alt="logo" />
                <p className={`navbar-text`}>Schedule</p>
                <p className={`navbar-text`}>Streams</p>
            </div>
            <div className="background-bar">

            </div>
        </div>
    )
}


export default Navbar;