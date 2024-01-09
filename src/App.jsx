
import './App.css';
import Header from './components/header/header';
import Router from './navigation';
import Footer from './components/footer/footer';
import images from './assets/images';

function App() {
  return (
    <>
      <Header logo={images.logo}/>
        <div className='contain-pages'>
          <Router/>
        </div>
      <Footer />
    </>
  )
}

export default App
