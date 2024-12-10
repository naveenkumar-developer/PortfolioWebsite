import footerImg from "../IMAGE/websiteLogo.png";
import footerIcon1 from "../IMAGE/footerIcon1.png";
import footerIcon2 from "../IMAGE/footerIcon2.png";
import footerIcon3 from "../IMAGE/footerIcon3.png";
import "../assets/styles/Footer.css"
function Footer(){
    return (
        <>
        <footer>
        <div className="footerLogo_container">
            <img src={footerImg} alt="footer img" loading="lazy" />
        </div>
        <div className="footerIcons_container">
            <a href="mailto:nkdavid861@gmail.com" target="_blank" rel="noreferrer noopener">
            <img src={footerIcon1} alt="footerIcon1" loading="lazy"/>
            </a>
            <a href="https://github.com/naveenkumar-developer?tab=repositories" target="_blank" rel="noreferrer noopener">
            <img src={footerIcon3} alt="footerIcon3" loading="lazy"/>
            </a>
            <a href="https://www.linkedin.com/in/naveenkumardeveloper01" target="_blank" rel="noreferrer noopener">
            <img src={footerIcon2} alt="footerIcon2" loading="lazy"/>
            </a>
        </div>
        <h2 className="footerLabel"> 👨‍💼 &nbsp; Created by Naveenkumar</h2>
        </footer>
        </>
    )
}


export default Footer;