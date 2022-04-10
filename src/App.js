import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Orders from './Components/Orders';
import Products from './Components/Products';
import Register from './Components/Register';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='px-4 md:px-16'>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/orders" element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
