import '../css/Navbar.css'
import AvarumSlogan from "../resources/images/avarum-slogan.png";

const Navbar = ({isVisible}) => {
    return (
        <div className={`navbar-holder ${isVisible ? "" : "hidden"}`}>
            <div className="navbar">
                <p>Home</p>
                <p>Roster</p>
                <img src={AvarumSlogan} className="logo-navbar" alt="logo" />
                <p>Schedule</p>
                <p>Streams</p>
            </div>
            <div className="background-bar">

            </div>
        </div>
    )
}


export default Navbar;