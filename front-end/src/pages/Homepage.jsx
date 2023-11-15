import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainLayout } from "../Components";
import cart from "../assets/cart.png";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function HomePage() {
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [productId, setProductId] = useState(-1);
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

  const handleCloseModal = () => {
    setQuantity(1);
    setShowModal(false);
  };
  const handleShowModal = (product_id) => {
    setProductId(product_id);
    setShowModal(true);
  };

  const handleAddToCart = () => {
    const data = {
      user_id: cookie.user_id,
      product_id: productId,
      qty: quantity,
    };
    console.log({ data });
    axios
      .post("http://localhost:3000/cart", data)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: "Berhasil ditambahkan ke keranjang",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal menambahkan ke keranjang",
          text: "Terjadi kesalahan saat menambahkan ke keranjang",
        });
      });
    setQuantity(1);
  };

  return (
    <>
      <MainLayout />
      <div className="mx-auto">
        <div className="row m-4">
          <h1 className="text-2xl font-bold mb-4">List of Products</h1>
          {products.map((product) => (
            <div
              key={product.product_id}
              className="bg-white border border-gray-300 col-2 m-4 p-0"
              onClick={() => {
                !cookie.user_id && navigate("/login");
                cookie.user_id && navigate(`/products/${product.product_id}`);
                // cookie.user_id && handleShowModal(product.product_id);
              }}
            >
              <img
                src="http://via.placeholder.com/640x360"
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
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        style={{ backgroundColor: "transparent" }}
      >
        <Modal.Header closeButton style={{ color: "#000" }}>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#000" }}>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-danger"
            className="no-hover"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            variant="outline-warning"
            className="no-hover"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
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
