/* eslint-disable react/prop-types */
import Redes from '../redes/redes'
import './style.css'
const Footer = () => {
  return (
    <footer className="footer">
      <section className="container-redes">
        <h3 className="redes">Redes:</h3>
        <Redes/>
      </section>
      <span >©:2023 @SergioAlba</span>
    </footer>
  )
}

export default Footer