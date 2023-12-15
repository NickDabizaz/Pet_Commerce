import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (orderId) => {
    navigate(`/admin/manage-transaction/${orderId}`)
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Manage Transactions</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Order ID</th>
              <th className="border px-4 py-2">Order Date</th>
              <th className="border px-4 py-2">Total Price</th>
              <th className="border px-4 py-2">User</th>
              <th className="border px-4 py-2">Total Quantity</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.order_id}>
                <td className="border px-4 py-2">{transaction.order_id}</td>
                <td className="border px-4 py-2">{transaction.order_date}</td>
                <td className="border px-4 py-2">{transaction.total_price}</td>
                <td className="border px-4 py-2">{transaction.User.name}</td>
                <td className="border px-4 py-2">
                  {transaction.OrderDetails.length > 0
                    ? transaction.OrderDetails[0].total_quantity
                    : 'N/A'}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleViewDetails(transaction.order_id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageTransaction;
