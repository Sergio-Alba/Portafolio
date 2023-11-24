import { Routes ,Route} from "react-router-dom";
import Home from "../pages/home/home"
import About from "../pages/about/about"
import Contact from "../pages/contact/contact"
import Projects from "../pages/projects/projects"
import Error404 from "../pages/error/error404"



function Router(){
  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
  )
}


export default Router