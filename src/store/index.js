//index.js es nuestra store
//es buena practica realizar un console.log al estado global para acceder a la store antes de continuar
import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import cart from './slices/cart.slice'

export default configureStore({
    //el reducer es el lugar donde se guardan todas las variables globales
    reducer: {
        products,
        cart
    }
})