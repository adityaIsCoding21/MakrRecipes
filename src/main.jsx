import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Recipe from './context/Recipe.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <Recipe>
        
<BrowserRouter>
    <App /> 
      <ToastContainer position='top-center' autoClose={2000} theme="dark" />

</BrowserRouter>

</Recipe>
 
)
