import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ManageDetailStore = () => {
  const { store_id } = useParams();
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/store/${store_id}`);
        setStoreData(response.data);
      } catch (error) {
        console.error('Error fetching store data:', error);
      }
    };

    fetchStoreData();
  }, [store_id]);

  return (
    <div className="container mx-auto mt-8">
      {storeData ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">{storeData.store_name} Details</h2>
          <p className="mb-4">{storeData.store_description}</p>

          {storeData.products.map(product => (
            <div key={product.product_id} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{product.product_name}</h3>
              <p className="mb-2">Quantity: {product.quantity}</p>
              <p className="mb-2">Price: {product.price}</p>

              {product.order_details.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Order Details</h4>
                  <ul>
                    {product.order_details.map(orderDetail => (
                      <li key={orderDetail.detail_id} className="mb-2">
                        <p>Order ID: {orderDetail.order_id}</p>
                        <p>Quantity: {orderDetail.qty}</p>
                        <p>Subtotal: {orderDetail.subtotal}</p>
                        <p>Order Date: {orderDetail.order_date}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ManageDetailStore;
