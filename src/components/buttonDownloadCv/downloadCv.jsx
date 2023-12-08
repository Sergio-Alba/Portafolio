/* eslint-disable react/prop-types */
import './downloadCvStyle.css'
import curriculum from '../../../public/frontend.pdf'
const  DownloadCv  = ({name}) => {
  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = curriculum; // Ruta del archivo en la carpeta 'public'
    link.download = 'mi_curriculum.pdf'; // Nombre del archivo al descargar
    link.click();
  };
  return(
    <button 
      className='btn-download'
      type="button"
      onClick={descargarCV}
      >
      {name}
    </button>
  )
}

export default DownloadCv