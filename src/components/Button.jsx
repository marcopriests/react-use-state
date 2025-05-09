import React from 'react'

const Button = (props) => {
    const {title, callback, isActive} = props

  return (
    <div onClick={() => callback()}>
      <button className={`btn ${isActive}`}>{title}</button>
    </div>
  )
}

export default Button
