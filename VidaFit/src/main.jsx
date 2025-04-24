import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Router.jsx'
import { GlobalContext } from './Context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContext>
  <RouterProvider router={router}>

  </RouterProvider>
  </GlobalContext>
)
