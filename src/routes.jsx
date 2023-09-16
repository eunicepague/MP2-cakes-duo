import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Shoes from './views/Shoes';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <About />,
  },
  {
    path: '/',
    element: <Contact />,
  },
  {
    path: '/',
    element: <Shoes />,
  },
];

export default routes;
