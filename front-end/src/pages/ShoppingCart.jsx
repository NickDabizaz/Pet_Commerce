import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Card, Button } from "react-bootstrap";
import { MainLayout } from "../Components";

const ShoppingCart = () => {
  const [cartData, setCartData] = useState({ cartItems: [], total: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies(["user_id"]);

  const fetchCart = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/cart/${cookies.user_id}`
      );
      setCartData(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const updateCart = async (productId, qty) => {
    try {
      console.log({ productId, qty });
      await axios.put(`http://localhost:3000/cart/${cookies.user_id}`, {
        product_id: productId,
        qty,
      });
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
    console.log({ cartData });
  }, [cookies.user_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MainLayout />
      <div style={{ margin: "1vh 5vw 1vw 5vw", fontSize: "1rem" }}>
        {cartData.cartItems.map((item) => (
          <Card
            key={item.cart_id}
            style={{ width: "90vw", marginBottom: "10px" }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "fit-content" }}>
                <img
                  src="http://via.placeholder.com/640x360"
                  style={{ minHeight: "8rem", maxHeight: "8rem" }}
                />
              </div>
              <div style={{ marginLeft: "1vw" }}>
                <Card.Title>{item.product_name}</Card.Title>
                <Card.Text>
                  Price: Rp {item.price} <br />
                  Subtotal: {item.subtotal}
                </Card.Text>
                <button
                  className="btn btn-danger"
                  onClick={() => updateCart(item.product_id, item.qty - 1)}
                >
                  -
                </button>
                {item.qty}
                <button
                  className="btn btn-success"
                  onClick={() => updateCart(item.product_id, item.qty + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </Card>
        ))}
        <h2>Total: {cartData.total}</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
