import React from 'react'


const ItemCard = ({outfit}) => {
  return (
    <div>
        <p>
          {outfit.name}
        </p>
        <img src={outfit.imageUrl}
          alt={outfit.name} />
        <p>{outfit.description}</p>
    </div>
  )
}

export default ItemCard
