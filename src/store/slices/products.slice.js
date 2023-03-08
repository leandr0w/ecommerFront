//los slices son los estados globales
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// generamos una instancia
const productsSlice = createSlice({
    name: 'products',
    //nunca inicializar el estado en undefined porque va a causar error 
    initialState: null,
    //los reducers son los actions

    reducers: {
        //el state es el valor actual que tiene el estado, en este caso va a iniciar en null 
        setProductsGlobal: (state, action) => action.payload
    }
})

//la instancia que preciso es la action, esta en un objeto por lo cual se debe desestructurar

const {setProductsGlobal} = productsSlice.actions

//necesito exportar solamente un representante del slice

export default productsSlice.reducer 

//se pasa una funcion que retorna otra funcion

export const getAllProducts = () => (dispatch) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products'
    axios.get(URL)
    //cualquier action que debamos hacer siempre debemos despacharla con el dispatch
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}