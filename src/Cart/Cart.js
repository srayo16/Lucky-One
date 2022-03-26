import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modalpro from '../Modalpro/Modalpro';
import './Cart.css';

const Cart = ({cart ,clearCart }) => {  
   
    
        let doRandom = cart[Math.floor((Math.random()*cart.length))];
    let count = 1;
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded  carthandle' style={{height: '425px'}}>
            <h1>Selected Clothes</h1>
            <hr />
            <div>
                {
                    cart.map((data , index) => <li className='pb-2' style={{listStyle: 'none'}} key={index}>{count++}. {data}</li> )
                }
            </div>
            <Modalpro doRandom={doRandom}></Modalpro>
       
            <Button className='mt-3' variant="outline-secondary" onClick={() => clearCart(cart)}>CHOOSE AGAIN</Button>{' '}
            
        </div>
    );
};

export default Cart;