/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './textarea.css'
const Textarea = ({id,
                  name,
                  label,
                  placeholder,
                  required,
                  active,
                  onBlur,
                  onFocus,
                  onChange,
                  maxLength,
                  error,
                  hasError
}) => { 
  return(
    <section className="contain-textarea">
      <label htmlFor={id}>
        {label}
      </label>
      <textarea
        maxLength={maxLength}
        id={id}
        name={name}              
        placeholder={placeholder}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      >
      </textarea>
        {hasError && (
          <span className="input-error">
            {error}
          </span>
        )}
    </section>
  )
}
export default Textarea;