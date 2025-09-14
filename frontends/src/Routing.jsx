import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Register from "./Pages/Signup";
import Landing from "./Pages/Landing";
// import Ruf from "./Ruf";
import Header from "./Utils/Header";
const router = createBrowserRouter([
  {
    // "Home", "About", "Services", "Contact"
    path: "/",
    element: (
      <div>
       <Landing/>
      </div>
    ),
  },


  {
    // "Home", "About", "Services", "Contact"
    path: "/home",
    element: (
      <div>
        <Header/>
        
        <Welcome/>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Header/>
        <Login/>
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Header />
        <Register />
      </div>
    ),
  },
]);

function Route() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default Route;
