import React from 'react'

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
      name: 'Sexy Look',
      description: 'A sexy diva outfit.',
      imageUrl: 'https://example.com/sexy-look.jpg'
    }

  ]

  const outfitsList = outfits.map(outfit =>
    <li key={outfit.id}>
      <p>
        {outfit.name}
      </p>
      <img src={outfit.imageUrl}
        alt={outfit.name} />
        <p>{outfit.description}</p>
    </li>)

  return (
    <>
      <h2>
        My Outfits
      </h2>

      <ul>
        {outfitsList}
      </ul>
    </>
  )
}

export default OutfitsPage
