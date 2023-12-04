import Input from "../../components/input/input";
import { useForm } from "../../hooks/useForm"


const initialState = {
  name:{value:'', error:'',hasError:true,active:false,name:'name'},
  surname:{value:'', error:'',hasError:true,active:false,name:'name'},
  email:{value:'',error:'',hasError:true,active:false},
  affair:{value:'',error:'',hasError:true,active:false},
  message:{value:'',error:'',hasError:true,active:false},
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
    <div>
      <section className="contact-title">
        <h2>Envíame un mensaje si tienes alguna consulta</h2>
      </section>
      <section>
        <form action={onSubmit} className="form">
          <div className="container-inputs">
            <Input
              id='name'
              type='text'
              name='name'
              placeholder='Juan'
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
              placeholder='Stark'
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
              placeholder='Juan@gmail.com'
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
              placeholder='Asunto'
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
            <Input
              id='name'
              type='textarea'
              name='name'
              placeholder='Juan'
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
          <button disabled={!formState.isFormValid} className="send-message"  type="submit">Enviar</button>
        </form>
      </section>
    </div>
  )
}

export default Contact