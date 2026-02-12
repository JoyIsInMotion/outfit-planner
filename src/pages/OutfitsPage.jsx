import React from 'react'
import ItemCard from '../components/ItemCard'

function OutfitsPage() {

  const outfits = [
    {
      id: 'outfit1',
      name: 'Casual Look',
      description: 'A comfortable and stylish casual outfit.',
      imageUrl: 'https://example.com/casual-look.jpg'
    },
    {
      id: 'outfit2',
      name: 'Professional Look',
      description: 'A stylish professional outfit.',
      imageUrl: 'https://example.com/professional-look.jpg'
    },
    {
      id: 'outfit3',
      name: 'Cool Look',
      description: 'A cool diva outfit.',
      imageUrl: 'https://example.com/cool-look.jpg'
    }

  ]

  const outfitsList = outfits.map(outfit =>
    <li key={outfit.id}>
    <ItemCard outfit={outfit} />
    </li>
  )


  return (
    <>
      <h2>
        My Outfits
      </h2>

      {outfits.length === 0 ? (
        <p>No outfits found...</p>
      ) : (
        <ul>{outfitsList}</ul>
      )} 
    </>
  )
}


export default OutfitsPage
