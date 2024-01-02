
import './App.css';
import Header from './components/header/header';
import Router from './navigation';
import Footer from './components/footer/footer';
import images from './assets/images';

function App() {
  return (
    <div>
      <Header logo={images.logo}/>
        <div className='contain-pages'>
          <Router/>
        </div>
      <Footer />
    </div>
  )
}

export default App
