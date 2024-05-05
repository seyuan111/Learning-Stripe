import React, {useContext} from 'react'
import { Card, Button, Col, Form, Row } from 'react-bootstrap'
import {CartContext} from '../CartContext'

const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id)
    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                { productQuantity > 0 ? 
                <div>
                    <Form as={Row}>
                        <Form.Label column="true" sm="6">{productQuantity}</Form.Label>
                        <Col sm="6">
                            <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(product.id)}>+</Button>
                            <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                        </Col>
                    </Form>
                    <Button variant="danger" className="my-2" onClick={() => cart.deleteFromCart(product.id)}>Remove Item</Button>
                </div> : <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>}
            
                </Card.Body>
        </Card>
    )
}

export default ProductCard