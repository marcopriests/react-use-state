import React from 'react'

const CardBox = (props) => {
    const {title, description} = props
    return (
        <div>
            <h3 className="cardTitle">{title}</h3>
            <p className="cardBody">{description}</p>
        </div>
    )
}

export default CardBox
