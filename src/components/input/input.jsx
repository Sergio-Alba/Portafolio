/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './input.css'

const Input = ({id,
                required,
                name,
                label,
                placeholder,
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
      <label htmlFor={id}>
        {label}
      </label>
      <input 
        type='text'
        id={id}
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {hasError && (
        <span className="input-error">
          {error}
        </span>
      )}
    </section>
    )
}
export default Input;
