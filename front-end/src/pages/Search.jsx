import React, { useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { MainLayout } from "../Components";
import axios from "axios";
import cart from "../assets/cart.png";
import filter from "../assets/filter-icon.png";

function Search() {
  const [searchParams] = useSearchParams();

  const queryParam = searchParams.get("q");
  //   console.log(queryParam);

  const [response, setResponse] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchData();
  }, [queryParam]);

  const fetchData = () => {
    axios
      .get(`http://localhost:3000/sellers/products?q=${queryParam}`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchCategories = () => {
    axios
      .get(`http://localhost:3000/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log(categories);

  return (
    <>
      <MainLayout />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 2 }}>
          <div style={{ display: "block" }} className="m-4">
            <span>
              <img
                src={filter}
                width={"20rem"}
                style={{ display: "initial" }}
              />
              Search Filter
            </span>
            {categories.map((category) => (
              <div>
                <input type="checkbox" />
                {category.category_name}
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 10 }}>
          {/* <div style={{ display: "block" }}> */}
          <div className="row">
            {response.map((product) => (
              <div
                key={product.product_id}
                className="bg-white border border-gray-300 col-3 m-4 p-0"
              >
                <img
                  src="http://via.placeholder.com/640x360"
                  style={{ width: "100%" }}
                ></img>
                <div className="m-3">
                  <h3 className="text-xl mb-2">{product.product_name}</h3>
                  <p
                    className="text-danger mt-4"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <span style={{ fontSize: "0.9rem" }}>Rp</span>
                    {product.price}
                  </p>
                  <p style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                      {printRating(product.rating)}{" "}
                      <span style={{ fontSize: "0.75rem" }}>10RB+ sold</span>
                    </div>
                    <div className="text-end">
                      <button className="btn btn-warning">
                        <img src={cart} width={"20rem"} />
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

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
}

export default Search;
