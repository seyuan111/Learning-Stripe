import React, {useState, useContext} from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import {CartContext} from '../CartContext'
import CartProduct from './CartProduct'

const NavBar = () => {
  const cart = useContext(CartContext)
  
  const [show, setShow] = useState()
  const handleClose =() => setShow(false)
  const handleShow = () => setShow(true)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <Navbar expand="sm">
        <Navbar.Brand href='/'>Flippers</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {productsCount > 0 ? 
             <div>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, index) => (
                <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}/>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success">Place Order</Button>

             </div> : <h1>Cart Empty</h1>
            }
          </Modal.Body>
        </Modal>
    </Navbar>
  )
}

export default NavBar