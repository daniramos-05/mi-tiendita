import React from 'react'
import './Button.css'

const Button = ( {fn, text, color} ) => {


  return (
    
      <button className='negro' onClick={ () => fn() } > {text}</button>
  )
}
export default Button
