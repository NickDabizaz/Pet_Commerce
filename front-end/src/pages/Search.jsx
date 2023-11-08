import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MainLayout } from "../Components";
import axios from "axios";

function Search() {
  const url = window.location.href;
  const searchParams = new URLSearchParams(new URL(url).search);
  const queryParam = searchParams.get("q");
  console.log(queryParam);

  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/sellers/products?q=${queryParam}`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <MainLayout />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 2 }}>
          <div style={{ display: "block" }}>Search Filter</div>
        </div>
        <div style={{ flex: 10 }}>
          {/* <div style={{ display: "block" }}> */}
          <div className="row">
            {response.map((product) => (
              <div
                key={product.product_id}
                className="bg-white border border-gray-300 rounded-lg col-3 m-4"
              >
                <div className="m-4">
                  <h3 className="text-xl font-bold mb-2">
                    {product.product_name}
                  </h3>
                  <img
                    src="http://via.placeholder.com/640x360"
                    //   style={{ height }}
                  ></img>
                  <p>
                    <span className="font-bold">Price:</span> {product.price}
                  </p>
                  <p>
                    <span className="font-bold">Rating:</span> {product.rating}
                  </p>
                  <p>
                    <span className="font-bold">Category:</span>{" "}
                    {product.category_name}
                  </p>
                  <p>
                    <span className="font-bold">Store:</span>{" "}
                    {product.store_name}
                  </p>
                  <p>
                    <span className="font-bold">Quantity:</span>{" "}
                    {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
