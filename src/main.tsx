import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { Home } from './routes/Home'
import { Resume } from './routes/Resume'
import { ViewerStats } from './routes/ViewerStats'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
  {
    path: '/viewer-stats',
    element: <ViewerStats />,
  },
])

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
