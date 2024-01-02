import './homeStyle.css'
import images from '../../assets/images'
import DownloadCv from '../../components/buttonDownloadCv/downloadCv'
import Redes from '../../components/redes/redes'
import logoHtml from '../../assets/Logos/Htm5.png'
import logoCss from '../../assets/Logos/CSS3.png'
import logoTailwind from '../../assets/Logos/Tailwind.png'
import logoBootstrap from '../../assets/Logos/bootstrap.png'
import logoSass from '../../assets/Logos/Sass.png'
import logoJs from '../../assets/Logos/JavaScript.png'
import logoReact from '../../assets/Logos/React.png'
import logoVite from '../../assets/Logos/Vite.png'
import logoTypeScript from '../../assets/Logos/TypeScript.png'
import logoFirebase from '../../assets/Logos/firebase.png'
import logoGit from '../../assets/Logos/Git.png'
import Card from '../../components/cards/cards'
import { useFetch } from '../../hooks/useFetch'
import { API_URL } from '../../constants/constant'
import Loader from '../../components/loader'
import { Link } from 'react-router-dom'


const Home=()=>{
  const {
    data:projects,
    loading:loadingProjects,
    error:errorProjects,
  }=useFetch(API_URL.PROJECTS.url,API_URL.PROJECTS.config)
  return(
    <>
      <section className="container-presentation">
        <div className="presentation">
          <h3 className='title'>Bienvenido me llamo</h3>
          <h1>Sergio Alba</h1>
          <h2>Soy desarrollador web <span>frontend Developer</span> </h2>
            <Redes/>
          <DownloadCv name='Descargar CV'/>
        </div>
        <img className='presentation-image'  src={images.profile} alt='' />
      </section>
      <section className="container-projects">
        <h4 className='titles'> Mis proyectos</h4>
        <div className="projects-contain">
            {loadingProjects && <Loader/>}
          {errorProjects && <h2> {errorProjects} </h2>}
          {projects.slice(0,3).map((project) => (
                <Card key={project.id} {...project}/>
              ))
          }
        </div>
        <Link className='link-projects' to='/Projects'>
          Ver mas Proyectos
        </Link>
      </section>
      <section className="container-skills">
        <h2 className="titles">Mis Skills</h2>
        <div className="container-technologies">
          <img src={logoHtml} alt="Logo Html5" />
          <img src={logoCss} alt="Logo Css 3" />
          <img src={logoBootstrap} alt="Logo Bootstrap" />
          <img src={logoTailwind} alt="Logo Tailwind" />
          <img src={logoSass} alt="Logo Sass" />
          <img src={logoJs} alt="Logo JavaScript" />
          <img src={logoReact} alt="Logo React" />
          <img src={logoVite} alt="Logo Vite" />
          <img src={logoTypeScript} alt="Logo TypeScript" />
          <img src={logoFirebase} alt="Logo Firebase" />
          <img src={logoGit} alt="Logo git" />
        </div>
      </section>
    </>
  )
}
export default Home