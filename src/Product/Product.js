import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'
import './Product.css'

const Product = ({pd ,addtocart}) => {
    
    const {image , brand ,phone_name ,price} = pd;
    return (
        
        <div className="">
    <Card className='shadow-lg p-3 mb-5 bg-body rounded cardPosition' style={{ width: '18rem' }}>
  <Card.Img variant="top" className='img-fluid w-75 p-3 ms-4 mt-2' src={image} />
  <Card.Body>
    <Card.Title className='pb-2'>Phone: {phone_name} </Card.Title>
    <Card.Text>
      Brand: {brand} <br />
      Price: $ {price}
      <br />
      <br />
    </Card.Text>
    <Button variant="none" className='btu text-dark fw-bolder' onClick={() =>addtocart(phone_name)}>Add to cart</Button>
  </Card.Body>
</Card>
    </div>
  
 
    );
};

export default Product;