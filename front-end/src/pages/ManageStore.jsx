import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageStore = () => {
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the endpoint using axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/store/');
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewDetail = (storeId) => {
    navigate(`/admin/manage-store/${storeId}`)
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Manage Stores</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Store ID</th>
            <th className="py-2 px-4 border-b">Store Name</th>
            <th className="py-2 px-4 border-b">Store Description</th>
            <th className="py-2 px-4 border-b">Owner</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {stores.map(store => (
            <tr key={store.store_id}>
              <td className="py-2 px-4 border-b">{store.store_id}</td>
              <td className="py-2 px-4 border-b">{store.store_name}</td>
              <td className="py-2 px-4 border-b">{store.store_description}</td>
              <td className="py-2 px-4 border-b">{store.owner}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleViewDetail(store.store_id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStore;
