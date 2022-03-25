import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Modalpro from '../Modalpro/Modalpro';
import './Cart.css';

const Cart = ({cart }) => {  
    
    
   
        let dorandom = cart[Math.floor((Math.random()*cart.length))];
        
         
       
      
    //   get_random([2,3,5])
    let count = 1;
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded  carthandle' style={{height: '425px'}}>
            <h1>Selected Clothes</h1>
            <div>
                {
                    cart.map((data , index) => <li className='pb-2' style={{listStyle: 'none'}} key={index}>{count++}. {data}</li> )
                }
            </div>
            <Modalpro dorandom={dorandom}></Modalpro>
            <br />
            <br />
            <Button variant="outline-secondary">CHOOSE AGAIN</Button>{' '}
        </div>
    );
};

export default Cart;