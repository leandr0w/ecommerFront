import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../home/styles/cardProduct.css'

const CardProduct = ({product}) => {
    //para poder navegar hacia los datos del producto hay que utilizar la funcion useNavigate, esta misma hay que instanciarla 
    const navigate =  useNavigate()
    //la funcion me va a llevar al producto indicado
    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

  return (
    <article className='product'>
        <header  className='product__header' onClick={handleClick}>
            <img className='product__img' src={product.productImgs[0]} alt="" />
            <img className='product__img' src={product.productImgs[1]} alt="" />
        </header>
        <section className='product__body'>
            <h3 className='product__name'>{product.title}</h3>
            <article className='product__price-container'>
                <span className='product__price-label'>Price</span>
                <h4 className='product__price-number'>{product.price}</h4>
            </article>
            <button className='product__btn'><i className="fa-solid fa-cart-plus"></i></button>
        </section>
    </article>
  )
}

export default CardProduct