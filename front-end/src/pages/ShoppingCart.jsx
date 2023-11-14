import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Card, Button } from 'react-bootstrap';

const ShoppingCart = () => {
    const [cartData, setCartData] = useState({ cartItems: [], total: 0 });
    const [isLoading, setIsLoading] = useState(false);
    const [cookies] = useCookies(['user_id']);

    const fetchCart = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://localhost:3000/cart/${cookies.user_id}`);
            setCartData(response.data);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const updateCart = async (productId, qty) => {
        try {
            console.log({productId,qty});
            await axios.put(`http://localhost:3000/cart/${cookies.user_id}`, { product_id: productId, qty });
            fetchCart();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCart();
        console.log({cartData});
    }, [cookies.user_id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {cartData.cartItems.map((item) => (
                <Card key={item.cart_id} style={{ width: '18rem', marginBottom: '10px' }}>
                    <Card.Body>
                        <Card.Title>{item.product_name}</Card.Title>
                        <Card.Text>
                            Price: {item.price} <br />
                            Subtotal: {item.subtotal}
                        </Card.Text>
                        <Button variant="outline-primary" onClick={() => updateCart(item.product_id, item.qty - 1)}>-</Button>
                        {item.qty}
                        <Button variant="outline-primary" onClick={() => updateCart(item.product_id, item.qty + 1)}>+</Button>
                    </Card.Body>
                </Card>
            ))}
            <h2>Total: {cartData.total}</h2>
        </div>
    );
};

export default ShoppingCart;