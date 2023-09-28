import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Pastries from "./views/Cakes/Pastries";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import CakeDescription from './views/Home/sections/CakeDescription';
import Dashboard from './views/Dashboard/Dashboard';
import UpdateBoard from "./views/Dashboard/UpdateBoard";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pastries/:id",
    element: <CakeDescription/>
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/pastries",
    element: <Pastries />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/update/:id",
    element: <UpdateBoard />,
  },
];

export default routes;
