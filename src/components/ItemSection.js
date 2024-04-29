import React, {useState, useEffect} from 'react'
import ItemCard from './ItemCard'

const ItemSection = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('api/items/')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

  return (
    <section className='item-section'>
        { items.map( (item, idx) => <ItemCard key={idx} {... item} />) } 
    </section>
  )
}

export default ItemSection