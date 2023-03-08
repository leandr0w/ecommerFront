import React from 'react'

const CardProduct = ({product}) => {

    console.log(product)

  return (
    <article>
        <header>
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