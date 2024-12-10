import logo from "../IMAGE/websiteLogo.png";
import { Link } from "react-router-dom";
import AboutPage from "../Pages/Aboutpage";
import Contactpage from "../Pages/Contactpage";
import "../assets/styles/Header.css";
function Header(){
    return(
        <>
        <header>
            <img src={logo} alt="website logo" loading="lazy"/>
            <nav>
                <ul>
                    <li><Link to="/main" >HOME</Link></li>
                    <li><Link to="/about" element={<AboutPage/>}>ABOUT</Link></li>
                    <li><Link to="/contact" element={<Contactpage />}>CONTACT</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;