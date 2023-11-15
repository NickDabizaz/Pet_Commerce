import React, { useEffect, useState } from "react";
import { MainLayout } from "../Components";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function ProductDetail() {
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const [product, setProduct] = useState(null);
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const { product_id } = useParams();
  const navigate = useNavigate();
  //   const history = useHistory();

  const [mainImage, setMainImage] = useState(
    "https://media.istockphoto.com/id/1285797164/id/vektor/nomor-1-alfabet-font-yang-digambar-dengan-tangan-ilustrasi-vektor-angka-arab-nomor-1-simbol.jpg?s=1024x1024&w=is&k=20&c=30McNvyv9lKDktHm8qURZbmoqZYHVaMRH6nZbhAqzTo="
  );
  const imageList = [
    "https://media.istockphoto.com/id/1285797164/id/vektor/nomor-1-alfabet-font-yang-digambar-dengan-tangan-ilustrasi-vektor-angka-arab-nomor-1-simbol.jpg?s=1024x1024&w=is&k=20&c=30McNvyv9lKDktHm8qURZbmoqZYHVaMRH6nZbhAqzTo=",
    "https://media.istockphoto.com/id/1285797170/id/vektor/nomor-2-alfabet-font-yang-digambar-dengan-tangan-ilustrasi-vektor-angka-arab-nomor-2-simbol.jpg?s=1024x1024&w=is&k=20&c=g_zyzhLuUFXoRsZ6aK2rBvgdBisg9A5WIjBgiXUlDHs=",
    "https://media.istockphoto.com/id/1248289132/id/vektor/digit-3-alfabet-grafiti-dengan-garis-semprot-dan-penyemprotan-berlebih-ilustrasi-vektor.jpg?s=1024x1024&w=is&k=20&c=dEwjZep0dgeHFcTgXOHQ3Raq72_Zh7UAdfSzjcIIK4M=",
    "https://media.istockphoto.com/id/1248289027/id/vektor/digit-4-alfabet-grafiti-dengan-garis-semprot-dan-penyemprotan-berlebih-ilustrasi-vektor.jpg?s=1024x1024&w=is&k=20&c=HJVOieiNvOp74YX8e282OqLElU7oKOubBWsyIwTob20=",
  ];

  const handleImageHover = (image) => {
    setMainImage(image);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/sellers/product/${product_id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
        // fetchStore();
      })
      .catch((error) => console.log(error));
  }, [product_id]);

  const fetchStore = async () => {
    console.log(product);
    axios
      .get(`http://localhost:3000/sellers/store/${product.store_id}`)
      .then((response) => {
        console.log(response.data);
        setStore(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [productId, setProductId] = useState(-1);

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
  };

  return (
    <>
      <MainLayout />
      <div className="m-4 " style={{ height: "auto" }}>
        {loading == true && "loading..."}
        {loading == false && (
          <>
            <div>⬅️</div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-3 " style={{ height: "" }}>
                <img src={mainImage} alt="Main" style={{ height: "20rem" }} />
                {/* <img
                src="http://via.placeholder.com/640x360"
                style={{ width: "100%" }}
              /> */}
                <div
                  className="d-flex flex-row"
                  style={{ overflowX: "scroll" }}
                >
                  {imageList.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="mr-2"
                      onMouseOver={() => handleImageHover(image)}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="col-5 " style={{ height: "" }}>
                <div style={{ height: "20rem" }}>
                  <div style={{ fontSize: "2rem" }}>{product.product_name}</div>
                  <div>
                    <u>{product.rating}</u> {printRating(product.rating)}
                  </div>
                  <div
                    className="mt-5"
                    style={{ fontSize: "1.5rem", color: "red" }}
                  >
                    Rp {product.price}
                  </div>
                </div>
                <div className="mt-5 ">
                  <button
                    className="btn btn-warning"
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
              <div className="col-2"></div>
            </div>
            <div className="mt-5 row" style={{ height: "auto" }}>
              <div className="col-2"></div>
              <div className="col-8 p-3 border border-dark">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETyc4RCQOt5YVtW2mbRuR3wdxFVDD8R6BA&usqp=CAU"
                      style={{ border: "1px solid black", borderRadius: "50%" }}
                    />
                  </div>
                  <div className="col-10">Toko Surya</div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="mt-5 row" style={{ height: "auto" }}>
              <div className="col-2"></div>
              <div className="col-8 p-3 border border-dark">
                Deskripsi Produk
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
