import './about.css'

const About=()=>{
  return(
    <section className="container-about">
      <section className="contain-about">
        <h1 className="titles">Sobre mí</h1>
        <p className="description-about">
          ¡Hola! Soy Sergio, un apasionado entusiasta de la tecnología y el desarrollo web. Aunque no tengo experiencia laboral formal, he dedicado mi tiempo a trabajar en emocionantes proyectos personales que me han permitido adquirir habilidades sólidas en el mundo de la tecnología.
          Me considero un autodidacta y me encanta aprender nuevas habilidades por mi cuenta. Mi enfoque principal ha sido el desarrollo web y la creación de aplicaciones web interactivas. Mi objetivo es seguir creciendo como desarrollador y aprender nuevas tecnologías.
        </p>
      </section>
      <section className="contain-my-skills">
        <h2>Mis Skills</h2>
        <ul className="container-my-technologies">
          <h3 className="title-technologies">Tecnologías</h3>
          <li className="skills">
            <p className="tech">Html5</p>
            <p className="tech">Css</p>
            <p className="tech">Bootstrap</p>
            <p className="tech">Tailwind</p>
            <p className="tech">Sass</p>
            <p className="tech">JavaScript</p>
            <p className="tech">TypeScript</p>
            <p className="tech">React</p>
          </li>
          <h3 className="title-technologies">Control de versiones</h3>
          <li className="skills">
            <p className="tech">Git</p>
            <p className="tech">GitHub</p>
          </li>
          <h3 className="title-technologies">Metodologías Ágiles </h3>
          <li className="skills">
            <p className="tech">Scrum</p>
          </li>
        </ul>
      </section>
    </section>
  )
}
export default About



