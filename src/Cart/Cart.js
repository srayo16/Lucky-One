import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css';

const Cart = ({cart}) => {
    let count = 1;
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded  carthandle' style={{height: '425px'}}>
            <h1>Selected Clothes</h1>
            <div>
                {
                    cart.map((data , index) => <li style={{listStyle: 'none'}} key={index}>{count++}. {data}</li> )
                }
            </div>
            <Button variant="outline-secondary">Secondary</Button>{' '}
            <br />
            <Button variant="outline-secondary">Secondary</Button>{' '}
        </div>
    );
};

export default Cart;