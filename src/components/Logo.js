import AvarumSlogan from "../resources/images/avarum-slogan.png"

const Logo = ({isBig, isVisible}) => {
    return (
        <img src={AvarumSlogan} className={`logo ${isBig ? "" : "small"} ${isVisible ? "" : "hidden"}`} alt="logo" />
    )
}

export default Logo;