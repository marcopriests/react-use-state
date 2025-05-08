import React from 'react'

const Button = (props) => {
    const {id, title, callback} = props

  return (
    <div onClick={() => callback()}>
      <button className="btn">{title}</button>
    </div>
  )
}

export default Button
