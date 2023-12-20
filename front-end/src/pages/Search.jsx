import React, { useEffect, useState } from "react";
import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { MainLayout } from "../Components";
import axios from "axios";
import cart from "../assets/cart.png";
import filter from "../assets/filter-icon.png";
import { useCookies } from "react-cookie";

function Search() {
  const [searchParams] = useSearchParams();
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const navigate = useNavigate();

  const queryParam = searchParams.get("q");
  //   console.log(queryParam);

  const [response, setResponse] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchData();
  }, [queryParam]);

  const fetchData = () => {
    axios
      .get(`https://petcommerce-backend.onrender.com/sellers/products?q=${queryParam}`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchCategories = () => {
    axios
      .get(`https://petcommerce-backend.onrender.com/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleCategoryChange = (categoryID) => {
    const index = selectedCategories.indexOf(categoryID);
    console.log(index)
    let updatedCategories = [];
  
    if (index === -1) {
      // Jika kategori belum ada dalam array, tambahkan ke dalam array selectedCategories
      updatedCategories = [...selectedCategories, categoryID];
    } else {
      // Jika kategori sudah dipilih sebelumnya, hapus dari array selectedCategories
      updatedCategories = selectedCategories.filter(
        (category) => category !== categoryID
      );
    }
    
    // console.log(updatedCategories)
    setSelectedCategories(updatedCategories);
  };

  const filteredProducts = response.filter((product) => {
    if (selectedCategories.length === 0) {
      // Jika tidak ada kategori yang dipilih, tampilkan semua produk
      return true;
    } else {
      // Jika ada kategori yang dipilih, filter produk berdasarkan kategori yang dipilih
      return selectedCategories.includes(product.category_id);
      // Pastikan 'product.category' sesuai dengan properti kategori pada objek produk dari response API
    }
  });
  
  // console.log(selectedCategories)
  // console.log(filteredProducts);

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
              <div key={category.category_id}>
                <label>
                  <input
                    type="checkbox"
                    value={category.category_name}
                    onChange={() => handleCategoryChange(category.category_id)}
                    checked={selectedCategories.includes(category.category_id)}
                  />
                  {category.category_name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 10 }}>
          {/* <div style={{ display: "block" }}> */}
          <div className="row">
            {filteredProducts.map((product) => (
              <div
                key={product.product_id}
                className="bg-white border border-b-2 col-3 m-4 p-0"
                onClick={() => {
                  // !cookie.user_id && navigate("/login");
                  navigate(`/products/${product.product_id}`);
                  // cookie.user_id && handleShowModal(product.product_id);
                }}
              >
                <img
                  src={`https://petcommerce-backend.onrender.com/sellers/product/pic/${product.product_id}`}
                  alt={product.product_name}
                  className="h-72 max-h-72 m-auto w-full object-contain"
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
                      {/* <button className="btn btn-warning">
                        <img src={cart} width={"20rem"} />
                      </button> */}
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
