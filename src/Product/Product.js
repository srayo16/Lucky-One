import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'

const Product = ({pd}) => {
    console.log(pd);
    const {image , brand ,phone_name } = pd;
    return (
        
        <div className="">
    <Card className='shadow-lg p-3 mb-5 bg-body rounded cardPosition' style={{ width: '18rem' }}>
  <Card.Img variant="top" className='img-fluid w-75 p-3 ms-4 mt-2' src={image} />
  <Card.Body>
    <Card.Title>Phone: {phone_name} </Card.Title>
    <Card.Text>
      Brand: {brand}
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
  </Card.Body>
</Card>
    </div>
  
 
    );
};

export default Product;