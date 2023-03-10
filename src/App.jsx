import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import { getUserCart } from './store/slices/cart.slice'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    //para ejecutar un thunk debo despacharlo, para despachar utilizar useDispatch
    dispatch(getAllProducts())
    dispatch(getUserCart())
  }, [])



 //el useSelector es una funcion que recibe un callback  para traer informacion de la store
  // const products = useSelector(state => state.products )
 // console.log(products)

 //crear un nuevo usuario
 /* useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users'

    const data = {
      firstName: 'Ebaristo',
      lastName: 'Perez',
      email: 'leandrowo@mail.com',
      password: 'pass1234',
      phone: '1234567895',
      role: 'admin'

    }

    axios.post(URL, data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }, [])  */
 //fin del usuario
  return (
    <div className="App">
      <Header />
     <Routes>
   {  /*la route es la ruta en particular, el path es lo que va aasdf decir el url */}
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/product/:id' element={<ProductInfo />}/>
     </Routes>
    </div>
  )
}

export default App
