import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'
const Products = ({addtocart ,cart ,getRandom}) => {
    // console.log(cart);
    const [datas , setDatas] = useState([])
    useEffect( () =>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setDatas(data.data))
    } , [])
    return (

        <div className='pdsGrid'>
        <div className='forColoum'>

            {
                datas.map(pd => <Product pd={pd} key={pd.slug} addtocart={addtocart}></Product>)
            }

         </div>
       
         
         <div className='carthandle' >

             <Cart cart={cart} ></Cart>

          </div>
         
          </div>
    );
};

export default Products;