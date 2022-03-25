import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products/Products';
import { useState } from 'react';
import Modalpro from './Modalpro/Modalpro';
function App() {
  const [cart , setCart] = useState([])
  let addtocart = (take) =>{
    let newCart = [...cart , take];
    setCart(newCart);  
  }
  
  return (
    <div>
      <Header></Header>
      <Products addtocart={addtocart} cart={cart} ></Products>
    </div>
  );
}

export default App;
