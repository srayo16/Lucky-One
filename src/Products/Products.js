import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    // console.log(cart);
    const [datas , setDatas] = useState([])
    useEffect( () =>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setDatas(data.data))
    } , [])

    const [cart , setCart] = useState([])
    let addtocart = (take) =>{
        console.log(take);
      let newCart = [];
      const exists = cart.find(item => item === take);
      if(!exists && cart.length <4){
        newCart = [...cart , take];
      }
      else if(exists && cart.length <4){
          console.log(cart);
          alert('This product is already added')
        return
      }
      else{
          alert('Sorry! Your cart is full')
          return
      }

      setCart(newCart);
      
    }
    
   //for choose again button
    let clearCart = (given) =>{
     given = [];
     setCart(given);
    }

    return (

        <div className='pdsGrid mb-5 pb-5'>
        <div className='forColoum'>

            {
                datas.map(pd => <Product pd={pd} key={pd.slug} addtocart={addtocart}></Product>)
            }

         </div>
       
         
         <div className='carthandle' >

             <Cart cart={cart} clearCart={clearCart} ></Cart>

          </div>
         
          </div>
    );
};

export default Products;