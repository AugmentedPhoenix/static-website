import '../css/Navbar.css'
import AvarumSlogan from "../resources/images/avarum-slogan.png";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {Box, IconButton, SwipeableDrawer} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState} from "react";

const  useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: "50%",
    }
}));

const Navbar = ({isVisible}) => {

    const classes = useStyles();

    const [sideNavOpen, setSideNavOpen] = useState(false)

    const toggleUserSideNav = () => {
        setSideNavOpen(!sideNavOpen);
    };

    return (
        <div style={{zIndex: "1200"}} className={`navbar-holder ${isVisible ? "" : "hidden"}`}>
            <Box sx={{ display: {xs: "none", lg: "initial"}}}>
                <div className="navbar">
                    <p className={`navbar-text`}>Home</p>
                    <p className={`navbar-text`}>Roster</p>
                    <img src={AvarumSlogan} className="logo-navbar" alt="logo" />
                    <p className={`navbar-text`}>Schedule</p>
                    <p className={`navbar-text`}>Streams</p>
                </div>
                <div className="background-bar">
                </div>
            </Box>
            <Box sx={{ display: {sm: "initial", lg: "none"}}}>
                <div className={`navbar-holder ${isVisible ? "" : "hidden"}`}>
                    <Box sx={{display: {xs: "intial", sm: "initial"}}}>
                        <div style={{minHeight: '50px', display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}} className={`navbar`}>
                            <IconButton size="medium" onClick={toggleUserSideNav} style={{alignSelf: "flex-end"}}>
                                <MenuOpenIcon/>
                            </IconButton>
                        </div>
                        <div style={{minHeight: '50px'}} className={`background-bar`}>
                        </div>
                    </Box>
                    <Box sx={{display: {xs: "none", sm: "intial", md: "intial"}}}>
                        <div style={{minHeight: '75px', display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}} className={`navbar`}>
                            <IconButton size="large" onClick={toggleUserSideNav} style={{alignSelf: "flex-end"}}>
                                <MenuOpenIcon/>
                            </IconButton>
                        </div>
                        <div style={{minHeight: '75px'}} className={`background-bar`}>
                        </div>
                    </Box>
                </div>
                <SwipeableDrawer
                    anchor={"right"}
                    open={sideNavOpen}
                    onOpen={toggleUserSideNav}
                    onClose={toggleUserSideNav}
                    sx={{ zIndex: "1300" }}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <img style={{paddingTop: '2vmin'}} src={AvarumSlogan} className="logo-navbar" alt="logo" />
                    <p style={{paddingLeft: '2vmin'}} className={`navbar-text`}>Home</p>
                    <p style={{paddingLeft: '2vmin'}} className={`navbar-text`}>Roster</p>
                    <p style={{paddingLeft: '2vmin'}} className={`navbar-text`}>Schedule</p>
                    <p style={{paddingLeft: '2vmin'}} className={`navbar-text`}>Streams</p>
                </SwipeableDrawer>
            </Box>
        </div>
    )
}


export default Navbar;