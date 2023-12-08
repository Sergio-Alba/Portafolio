/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './cardsStyle.css'


const Card = ({ url, img, title, description, technology }) => {
    // Extraemos las propiedades de technology
  const { img1, img2, img3, img4, img5 ,img6,img7,img8,img9} = technology;

  // Creamos un array con las imágenes 
  const techImages = [img1, img2, img3, img4, img5,img6,img7,img8,img9].filter((img)=>img);
  return (
    <article className="card">
      <img className='card-image' src={img} alt={title} />
      <section className="contain-description">
          <h1 className="title-page">{title}</h1>
          <h4 className="description-page">{description}</h4>
          <h2 className="technology-create-title">Desarrollado con: </h2>
          <section className='technology-create'>
            {techImages.map((techImg, index) => (
              <img className='technology-image' key={index} src={techImg} alt={`Tech ${index}`} />
            ))}
          </section>
        <Link className='link-pages' to={url} target='_blank'>
          Ver
        </Link>
      </section>
    </article>
  );
};
export default Card