import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Home from './routes/Home.tsx'

const router = createBrowserRouter([  //para definir o componente principal
  {
    path: '/',
    element: <App />,
    children: [ //aqui é para cofigurar pagina por pagina
      {
        path: "/",
        element: <Home /> //componente da pagina raiz
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
