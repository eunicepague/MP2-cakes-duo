import { Routes, Route } from 'react-router-dom';
import Header from './views/Header';
import Footer from './views/Footer';
import routes from './routes';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
