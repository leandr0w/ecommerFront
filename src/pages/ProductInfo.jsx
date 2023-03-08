import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProduct from '../components/home/CardProduct'
import ProductDescription from '../components/ProductInfo/ProductDescription'

const ProductInfo = () => {

    //utilizamos la funcion useParams para capturar el parametro de la ruta, esta retorna un objeto con todos los parametros por lo que hay que desestructurar
    const { id } = useParams()

    const [product, setProduct] = useState()

    const [similarProduct, setSimilarProduct] = useState()

    useEffect(() => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
        axios.get(URL)
        .then(res => setProduct(res.data.data.product))
        .catch(err => console.log(err))
        //colocamos el id en el arreglo de independencia porque cada vez que cambie el parametro debo realizar la peticion async
    }, [id])
    //para filtrar los productos similares lo podemos realizar desde el estado global
    const allProducts = useSelector(state => state.products)

    useEffect(() => {
        if(allProducts && product){
          const pivot = allProducts.filter(prod => prod.category.name === product.category)
          setSimilarProduct(pivot)
        }
    }, [allProducts, product])

    console.log(similarProduct)

    console.log(product)

  return (
    <div>
    <ProductDescription product={product}/>
    <section>
        <h2>Discover similar items</h2>
        <div className='similar-product-container'>
            {
                similarProduct?.map(simProd => {
                    if(simProd.title !== product.title){
                        return (<CardProduct 
                        key={simProd.id}
                        product={simProd}
                        />)
                    }
                })
            }
        </div>
    </section>
    </div>
  )
}

export default ProductInfo