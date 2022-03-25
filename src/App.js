import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products/Products';
import { useState } from 'react';
function App() {
  const [cart , setCart] = useState([])
  let addtocart = (take) =>{
    let newCart = [...cart , take];
    setCart(newCart);
    // console.log(newCart);
    // console.log(cart);
    
  }
  return (
    <div>
      <Header></Header>
      <Products addtocart={addtocart} cart={cart} ></Products>
    </div>
  );
}

export default App;
