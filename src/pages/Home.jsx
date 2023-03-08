import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'

const Home = () => {

  const products = useSelector(state => state.products)

  console.log(products)

  return (
    <div className='products-container'>
      {
        products?.map(product => (
        <CardProduct 
        //utilizar siempre la key para que react optimice de la mejor manera
        key={product.id}
        product={product}
        />
        ))
      }
    </div>
  )
}

export default Home