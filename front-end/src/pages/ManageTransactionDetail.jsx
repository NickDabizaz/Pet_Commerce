import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ManageTransactionDetail = () => {
  const { order_id } = useParams();
  const [transactionDetails, setTransactionDetails] = useState([]);

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/transactions/${order_id}/details`);
        setTransactionDetails(response.data);
      } catch (error) {
        console.error('Error fetching transaction details:', error);
      }
    };

    fetchTransactionDetails();
  }, [order_id]);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Transaction Details for Order ID {order_id}</h1>

      {transactionDetails.map((detail) => (
        <div key={detail.detail_id} className="border p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">{detail.Product.product_name}</h2>
          <p>Quantity: {detail.qty}</p>
          <p>Subtotal: {detail.subtotal}</p>
          <p>Created At: {detail.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default ManageTransactionDetail;
