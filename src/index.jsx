import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/home';
import Explore from './pages/explore';
import Notification from './pages/notification';
import Message from './pages/message';
import Bookmaker from './pages/bookmaker';
import Lists from './pages/lists';
import Profil from './pages/profil';
import More from './pages/more';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/explore',
    element:<Explore />
  },
  {
    path:'/notifications',
    element:<Notification />
  },
  {
    path:'/message',
    element:<Message />
  },
  {
    path:'/bookmakers',
    element:<Bookmaker />
  },
  {
    path:'/lists',
    element:<Lists />
  },
  {
    path:'/profil/:id',
    element:<Profil />
  },
  {
    path:'/profil/',
    element:<Profil/>
  },
  {
    path:'/more',
    element:<More />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
