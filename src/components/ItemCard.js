import React from 'react'

const ItemCard = (props) => {
  return (
    <div>
        <img src={props.image} />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <strong>{props.item_type.name}</strong>
    </div>
  )
}

export default ItemCard