import React from 'react'
import './Button_1.css'

const Button_1 = ({ varient, className, children }) => {
  return (
    <button
      type={varient}
      className={className ? `button-style-1 ${className}` : "button-style-1"}
    >
      {children}
    </button>
  )
}

export default Button_1