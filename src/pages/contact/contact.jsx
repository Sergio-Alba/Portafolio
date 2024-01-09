import './contact.css'
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import { useForm } from "../../hooks/useForm"
import images from '../../assets/images';
import Redes from '../../components/redes/redes';


const initialState = {
  name:{value:'', error:'',hasError:true,active:false,name:'name'},
  surname:{value:'', error:'',hasError:true,active:false,name:'name'},
  email:{value:'',error:'',hasError:true,active:false,name:'name'},
  affair:{value:'',error:'',hasError:true,active:false,name:'name'},
  message:{value:'',error:'',hasError:true,active:false,name:'name'},
  isFormValid:false
}


const Contact=()=>{
  const[formState,inputHandler,inputFocus,inputBlur,clearInputs]=useForm(initialState);
  const onChange =(event)=>{
    const {name,value}= event.target;
    inputHandler({name,value})
  }
  
  const onFocus = ({ name }) => {
    inputFocus({ name })
  }
  const onBlur = ({ name }) => {
    inputBlur({ name })
  }
  const onSubmit = (event)=>{
    event.preventDefault()
    clearInputs({ formState })
  }
  return (
    <section className='container-contact'>
      <section className='container-form'>
        <div className="contain-img-form">
          <section className="contact-title">
            <h2>Contácteme  por mis redes o envíame un correo.</h2>
          </section>
          <Redes/>
          <img className='img-form' src={images.frame} alt="frame" />
        </div>
        <form action={onSubmit} className="form" method="post">
          <div className="container-inputs">
            <Input
              id='name'
              type='text'
              name='name'
              label='Nombre'
              required={true}
              onFocus={()=>onFocus({name:'name'})}
              onBlur={()=>onBlur({name:'name'})}
              onChange={onChange}
              active={formState.name.active}
              error={formState.name.error}
              hasError={formState.name.hasError}
            />
          </div>
          <div className="container-inputs">
            <Input
              id='surname'
              type='text'
              name='surname'
              label='Apellido'
              required={true}
              onFocus={()=>onFocus({name:'surname'})}
              onBlur={()=>onBlur({name:'surname'})}
              onChange={onChange}
              active={formState.surname.active}
              error={formState.surname.error}
              hasError={formState.surname.hasError}
            />
          </div>
          <div className="container-inputs">
            <Input
              id='email'
              type='email'
              name='email'
              label='Correo Electrónico'
              required={true}
              onFocus={()=>onFocus({name:'email'})}
              onBlur={()=>onBlur({name:'email'})}
              onChange={onChange}
              active={formState.email.active}
              error={formState.email.error}
              hasError={formState.email.hasError}
            />
          </div>
          <div className="container-inputs">
            <Input
              id='affair'
              type='text'
              name='affair'
              label='Asunto'
              required={true}
              onFocus={()=>onFocus({name:'affair'})}
              onBlur={()=>onBlur({name:'affair'})}
              onChange={onChange}
              active={formState.affair.active}
              error={formState.affair.error}
              hasError={formState.affair.hasError}
            />
          </div>
          <div className="container-inputs">
            <Textarea
              id='message'
              name='message'
              label='Mensaje'
              required={true}
              onFocus={()=>onFocus({name:'message'})}
              onBlur={()=>onBlur({name:'message'})}
              onChange={onChange}
              active={formState.message.active}
              error={formState.message.error}
              hasError={formState.message.hasError}
            />
          </div>
          <button disabled={!formState.isFormValid} className="send-form"  type="submit">Enviar</button>
        </form>
      </section>
    </section>
  )
}

export default Contact