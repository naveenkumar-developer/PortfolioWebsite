import profilePic from "../IMAGE/pic3.png";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Aboutpage.css";
function AboutPage() {
  return (
    <>
      <div className="aboutpage">
        <h2>About Me</h2>

        <div className="myIntro">
          <h3>Turning Ideas into Engaging Digital Experiences</h3>
          <div>
            <h4>Who I Am</h4>
            <p>
              Hi, I’m Naveenkumar, a passionate Frontend Developer with a knack
              for crafting intuitive and visually appealing user interfaces. My
              journey in web development began with a curiosity for design and
              functionality, which quickly evolved into a deep love for creating
              digital experiences.
            </p>
          </div>
          <div>
            <h4>Skills and Expertise</h4>
            <p>
              {" "}
              Over the years, I’ve honed my skills in HTML, CSS, JavaScript, and
              React.js, building dynamic and responsive web applications. I have
              developed around 15+ frontend projects that showcase my creativity
              and technical expertise, ranging from e-commerce platforms to
              productivity tools.{" "}
            </p>{" "}
          </div>
          <div>
            <h4>Educational Background</h4>
            <p>
              {" "}
              I’m a graduate of Information Technology from AG Arts and Science
              College and have completed a frontend development bootcamp at
              Qtree Technologies, where I earned a certification in React.js. My
              educational background and hands-on project experience have
              equipped me with the skills to turn ideas into functional,
              engaging websites.
            </p>{" "}
          </div>

          <div>
            <h4>Beyond Coding</h4>
            <p>
              {" "}
              When I’m not coding, I enjoy exploring UI/UX design trends,
              learning about data structures and algorithms, and diving into the
              exciting world of backend development to expand my skill set.
            </p>{" "}
          </div>
          <div>
            <h4>Looking Ahead</h4>
            <p>
              I’m currently looking for opportunities where I can contribute my
              skills to impactful projects and continue to grow as a developer.
              Let’s connect and build something amazing together!
            </p>
          </div>
        </div>
        <div className="profileAndSkills_container">
          <div className="skills">
            <h3>My Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT JS</li>
              <li>GIT AND GITHUB</li>
              <li>MATERIAL UI</li>
              <li>REDUX</li>
              <li>SWIPPER JS</li>
            </ul>
          </div>
          <div className="profilepic_aboutpage">
            <img src={profilePic} alt="profilePic" loading="lazy" />
          </div>
          <div className="myDetails">
            <ul>
              <li>
                <PhoneIcon />
                <span>9025102806</span>
              </li>
              <li>
                <a
                  href="https://github.com/naveenkumar-developer?tab=repositories"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/naveenkumardeveloper01"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="mailto:nkdavid861@gmail.com">
                  <EmailIcon />
                  <span>Mail</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
