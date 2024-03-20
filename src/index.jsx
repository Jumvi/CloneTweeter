import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/home';
import Explore from './pages/explore';
import Notification from './pages/notification';
import Message from './pages/message';
import Bookmaker from './pages/bookmaker';
import Lists from './pages/lists';
import Profil from './pages/profil';
import More from './pages/more';
import { Provider } from 'react-redux';
import store from './feature/store';
import { createContext,useState } from "react";
import User from './pages/user';
import('./style/reset.css');
import('./style/App.css');


export let contextCounter = createContext(null);
function ContextProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <contextCounter.Provider value={{ counter, setCounter }}> 
        {children} 
    </contextCounter.Provider>
  );
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    errorElement: <h2 className='text-red-700 font-bold text-3xl text-center'>Desolé cette page n'existe pas</h2>
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
    path:'/profil/:userId',
    element:<Profil />
  },
  {
    path:'/profilUser',
    element:<User/>
  },
  {
    path:'/more',
    element:<More />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider >
        <RouterProvider router={router}/>
      </ContextProvider>  
    </Provider>
    
  </React.StrictMode>
);
