import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './layouts/MainLayout'

import NotFound from './pages/NotFound'
import Home from './pages/Home'
import List from './pages/List'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'games', element: <List /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
