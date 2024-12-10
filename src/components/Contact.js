import { Link } from "react-router-dom";
import { ContactPage } from "@mui/icons-material";
import "../assets/styles/Contact.css";
function CONTACT(){
    return(
        <>
        <section>
            <div className="contact_container">
                <div className="contactData">
                    <h2>Let's work together on your next project</h2>
                    <p>
                    As a passionate frontend fresher, I'm eager to collaborate and contribute to your next project. Whether it's designing responsive interfaces, building user-friendly websites, or turning ideas into visually engaging digital experiences, I’m excited to bring value with creativity and dedication. Let’s work together to create something remarkable!
                    </p>
                </div>
                <button type="button" className="contactBtn">
                   <Link className="contactLink" to="/contact" element={<ContactPage />}>CONTACT</Link> 
                </button>
            </div>
        </section>
        </>
    )
}

export default CONTACT;