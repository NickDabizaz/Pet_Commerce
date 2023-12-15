import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { useCookies } from "react-cookie";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ManageDetailStore = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const { store_id } = useParams();
  const [storepic, setStorePic] = useState();
  const [storeData, setStoreData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/admin/store/${store_id}`
        );
        setStoreData(response.data);

        axios
          .get(`http://localhost:3000/sellers/store/pic/${store_id}`)
          .then((res) => {
            setStorePic(res.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };

    fetchStoreData();
  }, [store_id]);

  return (
    <>
      <div
        className="container-fluid"
        style={{ display: "flex", backgroundColor: "#6CD4FF" }}
      >
        <img
          src={logo}
          className="cursor-pointer"
          style={{ width: "100px", height: "100px" }}
          onClick={() => {
            navigate("/admin");
          }}
        />
        <nav
          className="navbar p-3"
          style={{ backgroundColor: "#6CD4FF", width: "100%" }}
        >
          <div style={{ flex: 2 }}></div>
          <div>
            {cookie.user_id && (
              <div className="d-flex">
                <p
                  style={{
                    fontFamily: "Literata",
                    fontSize: "16pt",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  Welcome, Admin
                </p>
                <button
                  className="me-2 ms-12 rounded"
                  style={{
                    fontFamily: "Literata",
                    fontSize: "16pt",
                    display: "block",
                    fontWeight: 700,
                    color: "white",
                    backgroundColor: "#C46E85",
                    borderColor: "#C46E85",
                    width: "8rem",
                    height: "2.5rem",
                  }}
                  onClick={() => {
                    removeCookie("user_id");
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
        <NavLink
          to="/admin"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 700,
            fontSize: "15pt",
            marginLeft: "3%",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/admin/manage-users"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 700,
            fontSize: "15pt",
            marginLeft: "3%",
          }}
        >
          Users Management
        </NavLink>
        <NavLink
          to="/admin/manage-community"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 700,
            fontSize: "15pt",
            marginLeft: "3%",
          }}
        >
          Posts Management
        </NavLink>
        <NavLink
          to="/admin/manage-store"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 700,
            fontSize: "15pt",
            marginLeft: "3%",
          }}
        >
          Store Management
        </NavLink>
        <NavLink
          to="/admin/manage-transaction"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 700,
            fontSize: "15pt",
            marginLeft: "3%",
          }}
        >
          User Transaction Reports
        </NavLink>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#F3F0F0", height: "88vh" }}
      >
        <div
          className="btn p-0"
          style={{ fontSize: "2rem" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          ⬅️
        </div>
        <div
          className="container-fluid pt-2 overflow-y-auto"
          style={{
            backgroundColor: "#FFFFFF",
            width: "90%",
            height: "88vh",
            overflow: "hidden",
          }}
        >
          <div className="container mx-auto mt-2">
            {storeData ? (
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-center">
                  {storeData.store_name}
                </h2>
                <img
                  className="max-w-full max-w-full bg-black object-contain mx-auto mb-4 bg-opacity-75"
                  style={{
                    width: "8rem",
                    height: "8rem",
                    objectFit: "cover",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                  src={
                    storepic
                      ? `http://localhost:3000/sellers/store/pic/${store_id}`
                      : "https://static.vecteezy.com/system/resources/previews/002/267/032/non_2x/simple-store-icon-free-vector.jpg"
                  }
                  alt="pp-store"
                />
                <h3 className="text-2xl font-semibold mb-2">Description</h3>
                <p className="mb-4">{storeData.store_description}</p>
                <hr className="mb-4" />

                <h3 className="text-3xl text-center font-semibold mb-4">
                  Product Selling Reports
                </h3>
                {storeData.products.map((product) => (
                  <div
                    className="mb-4 p-4 border border-primary rounded-lg"
                    key={product.product_id}
                  >
                    <div
                      className="mx-auto mb-3"
                      style={{ width: "300px", height: "auto" }}
                    >
                      <img
                        src={`http://localhost:3000/sellers/product/pic/${product.product_id}`}
                        style={{ maxWidth: "300px" }}
                      />
                    </div>
                    <h3 className="text-2xl text-center font-semibold mb-5">
                      {product.product_name}
                    </h3>
                    <p className="mb-2 ms-3">
                      <b>Quantity :</b> {product.quantity}
                    </p>
                    <p className="mb-2 ms-3">
                      <b>Price :</b> Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <hr className="mb-4" />

                    {product.order_details.length > 0 && (
                      <div>
                        <h4 className="text-2xl text-center font-semibold mb-4">
                          Order Details
                        </h4>
                        <ul>
                          {product.order_details.map((orderDetail) => (
                            <li
                              className="mb-4 p-4 border border-primary rounded-lg"
                              key={orderDetail.detail_id}
                            >
                              <p>
                                <b>Order ID :</b> {orderDetail.order_id}
                              </p>
                              <p>
                                <b>Quantity :</b> {orderDetail.qty}
                              </p>
                              <p>
                                <b>Subtotal :</b> Rp{" "}
                                {orderDetail.subtotal.toLocaleString("id-ID", {
                                  maximumFractionDigits: 2,
                                })}
                              </p>
                              <p>
                                <b>Order Date :</b>{" "}
                                {new Date(
                                  orderDetail.order_date
                                ).toLocaleString("en-GB", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageDetailStore;
