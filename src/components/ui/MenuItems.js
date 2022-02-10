import React from 'react'
import './MenuItems.css'

const MenuItems = ({ items }) => {
  return (
    <ul>
        {
            items.map(item => (
                <li key={ item } >{ item }</li>
            ))
        }
    </ul>
  )
}

export default MenuItems