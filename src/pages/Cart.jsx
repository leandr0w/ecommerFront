import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartProduct = useSelector(state => state.cart)

    console.log(cartProduct)

  return (
    <div>Cart</div>
  )
}

export default Cart