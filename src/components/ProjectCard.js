import "../assets/styles/ProjectCard.css"
function ProjectCard({imgUrl,title,projectLink}){
    return(
        <>
        <div className="projectCard_container">
            <div className="projectCard_imageContainer">
                <img src={imgUrl} alt="card img 1" loading="lazy" />
            </div>
            <div className="projectCard_dataContaier">

            <h2 className="cardTitle">{title}</h2>
            <button type="button" className="cardButton">
                <a href={projectLink} target="_blank" rel="noreferrer noopener">VIEW PROJECT</a></button>
            </div>
        </div>
        </>
    )
}

export default ProjectCard;