import { useState, useEffect } from 'react';
import axios from 'axios';

function ListProduct() {
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
    <div>
      <h1>List of Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.product_id} className="product-card">
            <h3>{product.product_name}</h3>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Category: {product.category_name}</p>
            <p>Store: {product.store_name}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Created At: {product.createdAt}</p>
            <p>Updated At: {product.updatedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
