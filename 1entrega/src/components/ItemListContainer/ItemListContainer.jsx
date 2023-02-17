import React from 'react'
import "./item.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div className='greeting'>
        <p>{greeting}</p>
        
    </div>
  )
}

export default ItemListContainer