import './projects.css'
import Card from "../../components/cards/cards"
import Loader from "../../components/loader"
import { API_URL } from "../../constants/constant"
import { useFetch } from "../../hooks/useFetch"



const Projects=()=>{
  const {
    data:projects,
    loading:loadingProjects,
    error:errorProjects,
  }=useFetch(API_URL.PROJECTS.url,API_URL.PROJECTS.config)

  return(
    <div className='contain-page'>
      <section className="contain-projects">
        <h1 className="titles">Proyectos</h1>
          <section className="projects">
              {loadingProjects && <Loader/>}
            {errorProjects && <h2> {errorProjects} </h2>}
            {projects.map((project) => (
                  <Card key={project.id} {...project}/>
                ))
            }
          </section>
      </section>
    </div>
  )
}

export default Projects