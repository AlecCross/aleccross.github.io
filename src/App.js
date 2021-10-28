import projectList from "./data/projectList";

function App() {
    return <div style={{textAlign: "center"}}>
        <h1 style={{textAlign: "center"}}>alec_cross.github.io</h1>
        {projectList.map(
            project => <>
                <hr/>
                <a style={{textDecoration: "none", color: "black"}}
                   href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <img src={project.image} alt={project.title}/>
                    <h2>{project.title}</h2>
                    <h3>{project.description}</h3>
                </a>
            </>
        )}
    </div>

}

export default App
