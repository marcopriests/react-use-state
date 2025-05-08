import React from 'react'

const Button = (props) => {
    const {id, title} = props

  return (
    <div>
      <button className="btn">{title}</button>
    </div>
  )
}

export default Button
