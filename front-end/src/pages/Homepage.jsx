import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/sellers/get-all-products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List of Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.product_id} className="bg-white p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{product.product_name}</h3>
            <p><span className="font-bold">Price:</span> {product.price}</p>
            <p><span className="font-bold">Rating:</span> {product.rating}</p>
            <p><span className="font-bold">Category:</span> {product.category_name}</p>
            <p><span className="font-bold">Store:</span> {product.store_name}</p>
            <p><span className="font-bold">Quantity:</span> {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
