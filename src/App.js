import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./Utils/Store";
function AppLayout() {
  return (
   <Provider store = {store}>  
      <Header />
    <Outlet/> 
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  // THIS ARRAY IS A LIST OF PATHS
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/restaurant/:resid",
      element: <RestaurantMenu />,
    },
  ]
      
    
  },
  
]);
export default AppLayout;
