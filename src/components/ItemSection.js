import React, {useState, useEffect} from 'react'
import ItemCard from './ItemCard'

const ItemSection = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/items/')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

  return (
    <section className='item-section'>
        { items.map( item => <ItemCard {... item} />) } 
    </section>
  )
}

export default ItemSection