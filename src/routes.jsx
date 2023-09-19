import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Shoes from "./views/Cakes/Pastries";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/",
    element: <Contact />,
  },
  {
    path: "/",
    element: <Shoes />,
  },
];

export default routes;
