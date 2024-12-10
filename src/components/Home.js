import profilePic from "../IMAGE/pic3.png";
import { Link } from "react-router-dom";
import Aboutpage from "../Pages/Aboutpage"
import "../assets/styles/Home.css"
function Home(){
    return(
        <>
        <section className="home_section" id="Home">
            <div className="profilePic_container">
                <img src={profilePic} alt="profilePic" loading="lazy"/>
            </div>
            <div className="profileData_container">
                <h3 className="profileName">Hello &nbsp;I'm Naveenkumar.C</h3>
                <h2 className="profilePassion">
                    Frontend Web Developer
                </h2>
                <p className="profileDetails">
                Hello! I'm a passionate frontend developer with a strong foundation in HTML, CSS, JavaScript, and React. I thrive on crafting intuitive and visually appealing user interfaces that deliver seamless experiences. With hands-on experience building over 15+ projects, I am eager to bring my creativity and problem-solving skills to real-world challenges. Let's collaborate to transform ideas into impactful digital solutions!.
                </p>
                <button type="button" className="aboutmeBtn_header"><Link className="aboutLink" to="/about" element={<Aboutpage />}>ABOUT ME</Link></button>
            </div>
        </section>
        </>
    )
}

export default Home;