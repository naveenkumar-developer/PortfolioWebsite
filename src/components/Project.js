import cardImg1 from "../IMAGE/imgslider1.png";
import cardImg2 from "../IMAGE/img2.png";
import cardImg3 from "../IMAGE/img3.png";
import cardImg4 from "../IMAGE/img4.png";
import cardImg5 from "../IMAGE/img5.png";
import cardImg6 from "../IMAGE/img6.png";
import cardImg7 from "../IMAGE/img7.png";
import cardImg8 from "../IMAGE/img8.png";
import cardImg9 from "../IMAGE/img9.png";
import ProjectCard from "./ProjectCard";
import "../assets/styles/Project.css";
function Project(){

    const projectobj=[
        {id:1, imgUrl:cardImg1, title:"IMAGE SLIDER",projectLink:"https://naveenkumar-developer.github.io/imageSlider/"},
        {id:2, imgUrl:cardImg2, title:"SIGNUP PAGE",projectLink:"https://naveenkumar-developer.github.io/Signup-Page/"},
        {id:3, imgUrl:cardImg3, title:"E-SHOP",projectLink:"https://naveenkumar-developer.github.io/e-shop/"},
        {id:4, imgUrl:cardImg4, title:"MUSIC PLAYER",projectLink:"https://naveenkumar-developer.github.io/musicPlayer/"},
        {id:5, imgUrl:cardImg5, title:"FORM VALIDATION",projectLink:"https://naveenkumar-developer.github.io/formValidation/"},
        {id:6, imgUrl:cardImg6, title:"DIGITAL CLOCK",projectLink:"https://naveenkumar-developer.github.io/digitalclock.github.io/"},
        {id:7, imgUrl:cardImg7, title:"PARALLEX WEBSITE",projectLink:"https://naveenkumar-developer.github.io/parallaxWebsite/"},
        {id:8, imgUrl:cardImg8, title:"TODO LIST",projectLink:"https://naveenkumar-developer.github.io/Todolist/"},
        {id:9, imgUrl:cardImg9, title:"WEATHER APPLICATION",projectLink:"https://naveenkumar-developer.github.io/weatherApplication/"},
    ]

    return(
        <>
        <section className="project" id="Project">
            <div className="titleAndVAbtn_container">
        <h2>PROJECTS</h2>
        <button type="button" className="viewallBtn_project">
           <a href="https://github.com/naveenkumar-developer?tab=repositories" target="_blank" rel="noreferrer noopener">View All</a> 
        </button>
            </div>
        <div className="projectCards_container">
        {
            projectobj.map( (item)=>(
                <ProjectCard key={item.id} {...item} />
            ))
        }
        </div>
        </section>

        </>
    )
}


export default Project;