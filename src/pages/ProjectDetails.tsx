import { useParams } from "react-router-dom"

const ProjectDetails = () => {

    const project = useParams<{ projectId: string }>();
    console.log(project)

  return (
    <div>
        <h1 className="text-white text-5xl">Project {project.projectId} </h1>
    </div>
  )
}

export default ProjectDetails