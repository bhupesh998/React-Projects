import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
  { id: "p1", title: "Product 1"},
  { id: "p2", title: "Product 2"},
  { id: "p3", title: "Product 3"},
]

const Products = () => {
  return (
    <div>
      Products Page
      <ul>
        {PRODUCTS.map((item)=>(<li key={item.id}><Link to={`/products/${item.id}`}>{item.title}</Link></li>))}
      </ul>
    </div>
  )
}

export default Products
