import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products/Products';
import { useState } from 'react';
import Queans from './Queans/Queans';
import Footer from './Footer/Footer';

function App() {
  const [cart , setCart] = useState([])
  let addtocart = (take) =>{
    
    let newCart = [...cart , take];
    setCart(newCart);
    
  }
  
 //for choose again button
  let clearCart = (given) =>{
   given = [];
   setCart(given);
  }
  return (
    <div>
      <Header></Header>
      <Products addtocart={addtocart} cart={cart} clearCart={clearCart} ></Products>
      <Queans></Queans>
      <Footer></Footer>
    </div>
  );
}

export default App;
