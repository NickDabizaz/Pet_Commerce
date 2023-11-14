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
      <div
        className="btn p-0"
        style={{ fontSize: "2rem" }}
        onClick={() => navigate("/profile")}
      >
        ⬅️
      </div>
      <div className="text-center">
        <img
          src="https://icon-library.com/images/guest-icon-png/guest-icon-png-29.jpg"
          alt="pp-store"
          style={{
            width: "8rem",
            objectFit: "cover",
            border: "1px solid black",
            borderRadius: "50%",
          }}
          className="m-auto"
        />
        <h2 className="text-2xl font-bold mb-2">{storeData.store_name}</h2>
        <p className="mb-4">{storeData.store_description}</p>
        <p className="mb-2">Owner: {storeData.owner}</p>
      </div>

      <h3 className="text-xl font-bold mb-2">Products:</h3>
      <ul>
        {console.log(storeData)}
        {storeData.products.map((product) => (
          <div
            key={product.product_id}
            className="bg-white border border-gray-300 m-4 p-0"
            style={{ display: "flex" }}
          >
            <img
              src="http://via.placeholder.com/640x360"
              style={{ width: "10rem" }}
            ></img>
            <div className="m-3">
              <h3 className="text-xl mb-2">{product.product_name}</h3>
              <p className="text-danger mt-4" style={{ fontSize: "1.2rem" }}>
                <span style={{ fontSize: "0.9rem" }}>Rp</span>
                {product.price}
              </p>
              <p style={{ display: "flex" }}>
                <div>
                  {printRating(product.rating)}{" "}
                  <span style={{ fontSize: "0.75rem" }}>10RB+ sold</span>
                </div>
              </p>
            </div>
            <div className="text-end" style={{ flex: 1 }}>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </ul>
      <div
        className="btn btn-primary"
        onClick={() => navigate(`/store/${store_id}/form-add-product`)}
      >
        Add new Product
      </div>
    </div>
  );
}

function printRating(number) {
  let temp = "";

  for (let index = 0; index < number; index++) {
    temp += "★";
  }

  for (let index = 0; temp.length < 5; index++) {
    temp += "☆";
  }

  return temp;
}

export default StoreDetail;
