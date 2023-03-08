import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProduct = ({product}) => {
    //para poder navegar hacia los datos del producto hay que utilizar la funcion useNavigate, esta misma hay que instanciarla 
    const navigate =  useNavigate()
    //la funcion me va a llevar al producto indicado
    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

  return (
    <article>
        <header onClick={handleClick}>
            <img src={product.productImgs[0]} alt="" />
        </header>
        <section>
            <h3>{product.title}</h3>
            <article>
                <span>Price</span>
                <h4>{product.price}</h4>
            </article>
            <button><i className="fa-solid fa-cart-plus"></i></button>
        </section>
    </article>
  )
}

export default CardProduct