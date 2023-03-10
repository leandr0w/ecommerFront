import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   { /*el provider es el contexto para acceder a la store desde nuestra app */}
    <Provider store={store} >
      {/*hashrouter lo utilizamos cuando tenemos una single page aplication, esto lo sabemos porque solamente aplicamos un solo index.html*/}
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>
)
