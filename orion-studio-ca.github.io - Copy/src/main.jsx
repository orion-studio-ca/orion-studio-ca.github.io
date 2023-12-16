import App from './App.jsx'
import Games from './Games.jsx'
import Error from './Error.jsx'
import Message from './components/Message.jsx'
import GameInfo from './components/GameInfo.jsx'
import About from './About.jsx'
import Publishing from './Publishing.jsx'
import Shop from './Shop.jsx'

import Navbar from './components/Navbar.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

const Test = (props) => {
  return <p className="text-white text-4xl" >Testing</p>
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Navbar><Error /></Navbar>,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "games",
        element: <Games />
      },
      {
        path: "games/:gameId",
        element: <GameInfo />
      },
      {
        path: "priv",
        element: <Message num={0} title="General Privacy Policy" />
      },
      {
        path: "tos",
        element: <Message num={1} title="Terms of Service" />
      },
      {
        path: "data-protection-compliance",
        element: <Message num={2} title="Information Regarding Data Protection, as Accordance of GDPR" />
      },
      {
        path: "publishing",
        element: <Publishing />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "store",
        element: <Shop />
      },
      {
        path: "blastfort",
        element: <Navigate to="/games/blastfort" />
      },
      {
        path: "holy-roller",
        element: <Navigate to="/games/holy-roller" />
      },
      {
        path: "wordt",
        element: <Navigate to="/games/wordt" />
      },
      {
        path: "tulaan",
        element: <Navigate to="/games/tulaan" />
      },
      {
        path: "overthrown",
        element: <Navigate to="/games/overthrown" />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
