import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function StoreDetail() {
  const navigate = useNavigate();
  let { store_id } = useParams();
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/sellers/store/${store_id}`)
      .then((response) => {
        setStoreData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [store_id]);

  if (!storeData) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-4 p-4 bg-white shadow">
      <div className="btn btn-danger" onClick={() => navigate("/")}>
        back
      </div>
      <h2 className="text-2xl font-bold mb-2">{storeData.store_name}</h2>
      <p className="mb-4">{storeData.store_description}</p>
      <p className="mb-2">Owner: {storeData.owner}</p>

      <h3 className="text-xl font-bold mb-2">Products:</h3>
      <ul>
        {storeData.products.map((product) => (
          <li key={product.product_id} className="mb-4 p-4 border rounded">
            <div>
              <h4 className="text-lg font-bold mb-2">{product.product_name}</h4>
              <p>Price: {product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Category ID: {product.category_id}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoreDetail;
