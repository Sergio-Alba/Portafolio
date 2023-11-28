
import './App.css';
import Header from './components/header/header';
import Router from './navigation';
import Footer from './components/footer/footer';
import images from './assets/images';
import ModeTheme from './components/ModeTheme/modeTheme';

function App() {
  return (
    <div>
      <Header logo={images.logo}/>
      <ModeTheme/>
      <Router/>
      <Footer/>
    </div>
  )
}

export default App
