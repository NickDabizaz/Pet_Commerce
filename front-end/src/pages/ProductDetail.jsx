import React, { useEffect, useState } from "react";
import { MainLayout } from "../Components";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function ProductDetail() {
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const [product, setProduct] = useState(null);
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [productId, setProductId] = useState(-1);
  const { product_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://petcommerce-backend.onrender.com/sellers/product/${product_id}`
        );
        console.log({ response: response.data });
        setProduct(response.data);
        console.log(response);

        const storeResponse = await axios.get(
          `https://petcommerce-backend.onrender.com/sellers/store/${response.data.store_id}`
        );
        console.log({ storeResponse: storeResponse.data });

        setStore({
          store_id: response.data.store_id,
          name: storeResponse.data.store_name,
          description: storeResponse.data.store_description,
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [product_id]);

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
    // console.log( data );

    axios
      .get(`https://petcommerce-backend.onrender.com/cart/${data.user_id}/${data.product_id}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.available == true) {
            axios
            .put(`https://petcommerce-backend.onrender.com/cart/${cookie.user_id}`, {
              product_id: data.product_id,
              qty: response.data.qty + data.qty,
            }).then((response) => {
              console.log(response.data);
              Swal.fire({
                icon: "success",
                title: "Berhasil ditambahkan ke keranjang",
                showConfirmButton: false,
                timer: 1500,
              });
              handleCloseModal();
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
              Swal.fire({
                icon: "error",
                title: "Gagal menambahkan ke keranjang",
                text: "Terjadi kesalahan saat menambahkan ke keranjang",
              });
            });            
        }
        else {
          axios
            .post("https://petcommerce-backend.onrender.com/cart", data)
            .then((response) => {
              console.log(response.data);
              Swal.fire({
                icon: "success",
                title: "Berhasil ditambahkan ke keranjang",
                showConfirmButton: false,
                timer: 1500,
              });
              handleCloseModal();
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
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <MainLayout />
      <div className="m-4 " style={{ height: "auto" }}>
        {loading == true && "loading..."}
        {loading == false && (
          <>
            <div className="row h-80">
              <div className="col-2 h-80">
                <div
                  className="cursor-pointer ms-auto w-fit"
                  style={{
                    fontSize: "2rem",
                  }}
                  onClick={() => navigate(-1)}
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    style={{ color: "#6CD4FF" }}
                  />
                </div>
              </div>
              <div className="col-auto h-80 border border-dark p-0">
                <img
                  className="mx-auto"
                  src={`https://petcommerce-backend.onrender.com/sellers/product/pic/${product.product_id}`}
                  alt={`${product.name}`}
                  style={{
                    height: "19.9rem",
                    width: "19.9rem",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="col-5 h-80" style={{ height: "" }}>
                <div className="h-80">
                  <div className="h-64">
                    <div style={{ fontSize: "2rem" }}>
                      {product.product_name}
                    </div>

                    <div
                      className="mt-3"
                      style={{ fontSize: "1.5rem", color: "red" }}
                    >
                      <span className="me-1" style={{ fontSize: "0.9rem" }}>
                        Rp
                      </span>
                      {product.price.toLocaleString("id-ID", {
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                  <div className="h-12" style={{ marginTop: "1rem" }}>
                    <button
                      className=" h-12 btn btn-warning"
                      onClick={() => {
                        !cookie.user_id && navigate("/login");
                        //   cookie.user_id && navigate(`/products/${product.product_id}`);
                        cookie.user_id && handleShowModal(product.product_id);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="mt-5 row" style={{ height: "auto" }}>
              <div className="col-2"></div>
              <div className="col-8 p-3 border border-dark">
                <div className="row">
                  <div
                    className="col-2 ms-3 p-0 me-3"
                    style={{
                      objectFit: "cover",
                      border: "1px solid black",
                      borderRadius: "50%",
                      height: "8rem",
                      width: "8rem",
                      backgroundImage:
                        "url(https://static.vecteezy.com/system/resources/previews/002/267/032/non_2x/simple-store-icon-free-vector.jpg)",
                      backgroundRepeat: "repeat",
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/store/${store.store_id}`)}
                  >
                    <img
                      src={`https://petcommerce-backend.onrender.com/sellers/store/pic/${store.store_id}`}
                      style={{
                        borderRadius: "50%",
                        height: "8rem",
                        width: "8rem",
                        maxWidth: "150%",
                        marginLeft: "-20",
                      }}
                    />
                  </div>
                  <div className="col-10 p-3">
                    <div
                      className="fs-3"
                      onClick={() => navigate(`/store/${store.store_id}`)}
                      style={{ cursor: "pointer", width: "fit-content" }}
                    >
                      {store.name}
                    </div>
                    <div
                      onClick={() => navigate(`/store/${store.store_id}`)}
                      style={{ cursor: "pointer", width: "fit-content" }}
                    >
                      {store.description}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="mt-5 row" style={{ height: "auto" }}>
              <div className="col-2"></div>
              <div
                className="col-8 p-3 border border-dark"
                style={{ whiteSpace: "pre-line" }}
              >
                {decodeURIComponent(product.product_description)}
              </div>
              <div className="col-2"></div>
            </div>
          </>
        )}
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

export default ProductDetail;
