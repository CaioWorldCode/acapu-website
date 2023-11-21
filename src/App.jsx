import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home'
import Contato from './pages/contato'
import Sobre from './pages/sobre'
import Servicos from './pages/servicos'
import Privacidade from './pages/privacidade'
import Cookies from './pages/cookies'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/contato',
            element: <Contato />,
        },
        {
            path: '/sobre',
            element: <Sobre />,
        },
        {
            path: '/servicos',
            element: <Servicos />,
        },
        {
            path: '/privacidade',
            element: <Privacidade />,
        },
        {
            path: '/Cookies',
            element: <Cookies />,
        },
    ])

    return <RouterProvider router={router} />
}

export default App
