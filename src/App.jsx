import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductInfo from './pages/ProductInfo'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    //para ejecutar un thunk debo despacharlo, para despachar utilizar useDispatch
    dispatch(getAllProducts())
  }, [])



 //el useSelector es una funcion que recibe un callback  para traer informacion de la store
  // const products = useSelector(state => state.products )
 // console.log(products)

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product/:id' element={<ProductInfo />}/>
     </Routes>
    </div>
  )
}

export default App
