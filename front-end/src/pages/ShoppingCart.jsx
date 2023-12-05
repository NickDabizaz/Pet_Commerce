import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Card, Button } from "react-bootstrap";
import { MainLayout } from "../Components";
import trash from "../assets/trash.png";

const ShoppingCart = () => {
  const [cartData, setCartData] = useState({ cartItems: [], total: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies(["user_id"]);
  const [token, setToken] = useState("");

  console.log({ cartData: cartData.cartItems });

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
      if (qty < 1) {
        qty = 1; // Jika qty kurang dari 1, set qty menjadi 1
      }
      await axios.put(`http://localhost:3000/cart/${cookies.user_id}`, {
        product_id: productId,
        qty,
      });
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOneItem = async (productId) => {
    try {
      console.log({ productId });
      await axios.delete(`http://localhost:3000/cart/${productId}/${cookies.user_id}`);
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const generateOrderId = () => {
    const randomNumber = Math.floor(Math.random() * 90 + 10);
    const randomLetters = generateRandomLetters(2);
    const orderId = `${randomNumber}${randomLetters}`;
    return orderId;
  };

  const generateRandomLetters = (length) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const handlePayment = async () => {
    try {
      const paymentBody = {
        transaction_details: {
          order_id: generateOrderId(),
          gross_amount: cartData.total,
        },
        user_id: cookies.user_id,
      };
      const response = await axios.post(
        "http://localhost:3000/create-payment",
        paymentBody
      );
      setToken(response.data);

      try {
        await Promise.all(
          cartData.cartItems.map(async (cart) => {
            console.log({ cart });
            await axios.post(
              `http://localhost:3000/order/add/${cookies.user_id}`,
              {
                product_id: cart.product_id,
                qty: cart.qty,
              }
            );
          })
        );
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }

      await axios.delete(`http://localhost:3000/cart/${cookies.user_id}`);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  useEffect(() => {
    if (token !== "") {
      setIsPaymentLoading(true);
      window.snap.pay(token);
      setIsPaymentLoading(false);
    }
  }, [token]);

  useEffect(() => {
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const midtransClientKey = "SB-Mid-client-w2NPR2ZdFeoLGB7C";

    // Buat elemen <script> dan atur atributnya
    const scriptTag = document.createElement("script");
    scriptTag.src = midtransUrl;
    scriptTag.setAttribute("data-client-key", midtransClientKey);
    scriptTag.async = true;
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  useEffect(() => {
    fetchCart();
    console.log({ cartData });
  }, [cookies.user_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "#F3F0F0", height: "1000px" }}>
      <MainLayout />
      <p
        className="text-center"
        style={{
          marginTop: "0.5%",
          fontFamily: "Literata",
          fontSize: "24pt",
          fontWeight: 600,
        }}
      >
        My Cart
      </p>
      <div
        className="overflow-y-auto"
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "1%",
          height: "650px",
          marginBottom: "20px",
        }}
      >
        <div>
          {cartData.cartItems.map((item) => (
            <div
              className="d-flex rounded"
              key={item.cart_id}
              style={{
                width: "100%",
                marginBottom: "10px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div className="rounded-start" style={{ width: "auto" }}>
                <img
                  className="h-full m-auto object-contain"
                  src={`http://localhost:3000/sellers/product/pic/${item.product_id}`}
                  style={{
                    minHeight: "8rem",
                    maxHeight: "8rem",
                    minWidth: "15rem",
                    maxWidth: "15rem",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "1.5%",
                  marginTop: "0.5%",
                  marginBottom: "0.5%",
                }}
              >
                <div style={{ minWidth: "930px" }}>
                  <p
                    style={{
                      fontFamily: "Literata",
                      fontSize: "18pt",
                      fontWeight: 600,
                      marginTop: "0.5%",
                    }}
                  >
                    {item.product_name}
                  </p>
                  <p
                    style={{
                      fontFamily: "Literata",
                      fontSize: "20pt",
                      fontWeight: 600,
                      color: "#FF4040",
                      marginTop: "3%",
                    }}
                  >
                    Rp {item.subtotal}
                  </p>
                </div>
                <div
                  style={{
                    marginLeft: "2%",
                    marginTop: "0.5%",
                    marginBottom: "0.5%",
                    minWidth: "150px",
                  }}
                >
                  <img
                    className="cursor-pointer"
                    src={trash}
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: 25,
                      marginLeft: "auto",
                    }}
                    onClick={() => deleteOneItem(item.product_id)}
                  />
                  <div
                    className="d-flex"
                    style={{
                      marginRight: 0,
                      marginLeft: "15%",
                      marginTop: "25%",
                    }}
                  >
                    <button
                      className="rounded-start"
                      style={{
                        height: "2rem",
                        backgroundColor: "#E5E5E5",
                        width: "30px",
                        color: "#777777",
                      }}
                      onClick={() => updateCart(item.product_id, item.qty - 1)}
                    >
                      -
                    </button>
                    <input
                      className="form-control text-center"
                      style={{
                        height: "2rem",
                        width: "50px",
                        borderRadius: "0%",
                      }}
                      value={item.qty}
                    />
                    <button
                      className="rounded-end"
                      style={{
                        height: "2rem",
                        backgroundColor: "#E5E5E5",
                        width: "30px",
                        color: "#777777",
                      }}
                      onClick={() => updateCart(item.product_id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "1vw", marginTop: "1%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div
          className="container-fluid rounded"
          style={{
            marginLeft: "5%",
            width: "90%",
            height: "7rem",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div className="d-flex" style={{ marginLeft: "3%", width: "94%" }}>
            <p
              style={{
                marginTop: "1%",
                fontFamily: "Literata",
                fontSize: "16pt",
                fontWeight: 600,
              }}
            >
              Total:{" "}
            </p>
            <p
              style={{
                marginTop: "1%",
                marginRight: 0,
                marginLeft: "auto",
                fontFamily: "Literata",
                fontSize: "16pt",
                fontWeight: 600,
              }}
            >
              Rp {cartData.total}
            </p>
          </div>
          <button
            type="button"
            className="btn btn-info"
            style={{
              backgroundColor: "#1286CE",
              borderColor: "#1286CE",
              marginTop: "1%",
              marginLeft: "3%",
              fontWeight: 700,
              fontSize: "14pt",
              width: "94%",
              height: "2.5rem",
              color: "white",
            }}
            onClick={handlePayment}
            disabled={isPaymentLoading} // Disable the button while the payment is loading
          >
            {isPaymentLoading ? "Processing Payment..." : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
