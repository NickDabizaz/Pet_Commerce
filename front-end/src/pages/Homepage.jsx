import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainLayout } from "../Components";
import cart from "../assets/cart.png";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

function HomePage() {
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/sellers/get-all-products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <MainLayout />
      <div className="mx-auto">
        <div className="row m-4">
          <h1 className="text-2xl font-bold mb-4">List of Products</h1>
          {products.map((product) => (
            <div
              key={product.product_id}
              className="bg-white border border-gray-300 col-2 m-4 p-0 prod-card"
              onClick={() => {
                // !cookie.user_id && navigate("/login");
                navigate(`/products/${product.product_id}`);
                // cookie.user_id && handleShowModal(product.product_id);
              }}
            >
              <img
                src={`http://localhost:3000/sellers/product/pic/${product.product_id}`}
                alt={product.product_name}
                style={{ width: "100%" }}
              ></img>
              <div className="m-3">
                <h3 className="text-xl mb-2">{product.product_name}</h3>
                <p className="text-danger mt-4" style={{ fontSize: "1.2rem" }}>
                  <span style={{ fontSize: "0.9rem" }}>Rp</span>
                  {product.price}
                </p>
                <p style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    {printRating(product.rating)}{" "}
                    <span style={{ fontSize: "0.75rem" }}>10RB+ sold</span>
                  </div>
                  <div className="text-end">
                    {/* <button
                      className="btn btn-warning"
                      onClick={() => {
                        !cookie.user_id && navigate("/login");
                        cookie.user_id &&
                          navigate(`/products/${product.product_id}`);
                        // cookie.user_id && handleShowModal(product.product_id);
                      }}
                    >
                      <img src={cart} width={"20rem"} />
                    </button> */}
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
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

export default HomePage;
