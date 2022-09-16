import { Link } from "react-router-dom";

const logo =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Ffr%2Fthumb%2Fb%2Fb2%2FLogo_CIH.png%2F120px-Logo_CIH.png&f=1&nofb=1";
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">  <img src={logo} ></img> </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/contactus">contacter nous</Link>
                <Link to="/chatbot"> chatbot </Link>
                <Link to="/form"> form </Link>
                <Link to="/history"> history</Link>
            </div>
        </div>
    );
};

export default Navbar;
