import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home'
import Contact from './pages/contact'

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
    ])

    return <RouterProvider router={router} />
}

export default App
