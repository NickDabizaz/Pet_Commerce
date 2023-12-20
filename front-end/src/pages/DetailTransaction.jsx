import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "../Components";

function DetailTransaction() {
  const { order_id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(`https://petcommerce-backend.onrender.com/order/details/${order_id}`)
      .then((response) => response.json())
      .then((data) => setOrderDetails(data))
      .catch((error) => console.error("Error fetching order details:", error));
  }, [order_id]);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainLayout />
      <div className="max-w-2xl mx-auto p-8 mt-8 bg-white rounded-lg shadow-md mb-2">
        <div className="flex items-center mb-4">
          <Link to="/history" className="text-blue-500 flex items-center">
            <span className="mr-2" style={{ fontSize: "1.2rem" }}>
              {"<"}
            </span>
            Back
          </Link>
        </div>
        <h1 className="text-2xl font-bold mb-4">Order Details</h1>
        <p className="mb-2">Order ID: {orderDetails.order_id}</p>
        <h2 className="text-lg font-semibold mb-2">Products:</h2>
        <ul>
          {orderDetails.products.map((product) => (
            <li key={product.detail_id} className="mb-4 border-b pb-2">
              <p>Product ID: {product.product_id}</p>
              <p>Product Name: {product.product_name}</p>
              <p>
                Price: Rp{" "}
                {product.price.toLocaleString("id-ID", {
                  maximumFractionDigits: 2,
                })}
              </p>
              <p>Quantity: {product.qty}</p>
              <p>
                Subtotal: Rp{" "}
                {product.subtotal.toLocaleString("id-ID", {
                  maximumFractionDigits: 2,
                })}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xl font-semibold">
          Total: Rp{" "}
          {orderDetails.total.toLocaleString("id-ID", {
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
}

export default DetailTransaction;
