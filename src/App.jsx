import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound/NotFound';

let routers = createBrowserRouter([
  {path : '/', element : <Layout /> , children : [
    {index : true , element : <Home />},
    {path : 'Products' , element : <Products />},
    {path : 'Login' , element : <Login />},
    {path : 'Register' , element : <Register />},
    {path : 'Categories' , element : <Categories />},
    {path : 'Brands' , element : <Brands />},
    {path : 'Cart' , element : <Cart />},
    {path : '*' , element : <NotFound />},
  ]}
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
