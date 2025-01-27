import React from 'react'
import { products } from '../models/products'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
{products.map(product => (
  <div key={product.id} className='border-2 border-gray-300 p-5'>
    <img src={product.image} alt={product.name} className='w-full' />
    <h2 className='text-xl my-2'>{product.name}</h2>
    <p className='text-gray-600'>{product.description}</p>
    <p className='text-gray-700'>Price: ${product.price}</p>
  </div>
 
))}
      </div>
    </div>
  )
}

export default Home
