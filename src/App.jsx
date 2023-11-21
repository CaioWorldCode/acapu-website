import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home'
import Contact from './pages/contact'
import Sobre from './pages/sobre'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/contato',
            element: <Contact />,
        },
        {
            path: '/sobre',
            element: <Sobre />,
        },
    ])

    return <RouterProvider router={router} />
}

export default App
