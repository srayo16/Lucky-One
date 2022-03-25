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
  }
  // let [clear , setClear] = useState([])

  let clearCart = (given) =>{
   given = [];
   setCart(given);
  }
  return (
    <div>
      <Header></Header>
      <Products addtocart={addtocart} cart={cart} clearCart={clearCart} ></Products>
    </div>
  );
}

export default App;
