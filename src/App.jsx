

import { createBrowserRouter,RouterProvider } from "react-router"
import {Provider} from "react-redux"
import { store } from "./store/store" 
import Layout from "./Layout"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Create from "./pages/Create"


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path:"/register",
        element : <Register/>
      },
      {
        path : "/profile",
        element : <Profile/>
      },
      {
        path : "/create",
        element : <Create/>
      }
    ]
  }
])





function App() {

  return (
    <>
    <Provider store={store}>
    <RouterProvider router = {router}/>
    </Provider>
    
      
      
    </>
  )
}

export default App
