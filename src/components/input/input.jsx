/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './input.css'

const Input = ({id,
                required,
                name,
                label,
                onChange,
                onFocus,
                onBlur,
                active,
                value,
                error,
                hasError
              }) => { 
  return(
    <section className="contain-input">
      <input 
        className='input'
        type='text'
        id={id}
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <label className='label' htmlFor={id}>
        {label}
      </label>
      {hasError && (
        <span className="input-error">
          {error}
        </span>
      )}
    </section>
    )
}
export default Input;

