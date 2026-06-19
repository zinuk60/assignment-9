import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './router/Router.jsx'
import ContextProvider from './component/ContextProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<ContextProvider >
     <RouterProvider router={router}></RouterProvider>
</ContextProvider>

  </StrictMode>,
)
