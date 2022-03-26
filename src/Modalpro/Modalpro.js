import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Modalpro = ({doRandom}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{ 
    //   let new = list[Math.floor((Math.random()*list.length))];
      setShow(true);

  }


    return (
        <>
        <Button variant="outline-secondary" className='mt-3' onClick={handleShow}>
        CHOOSE 1 FOR ME
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Choosed this for you!</Modal.Title>
          </Modal.Header>
          <Modal.Body className='fs-5 text-danger'>{doRandom}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Modalpro;