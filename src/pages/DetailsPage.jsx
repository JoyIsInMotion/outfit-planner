import React from 'react'
import { useParams } from 'react-router-dom'

function DetailsPage() {
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
  let { id } = useParams();
  const outfit = outfits.find(o => o.id === id)
  return (
    <>
      {!outfit ? (
        <p>Outfit not found...</p>
      ) : (
        <div>
          <h2>{outfit.name}</h2>
          <p>{outfit.description}</p>
        </div>
      )}
    </>
  )
}

export default DetailsPage
