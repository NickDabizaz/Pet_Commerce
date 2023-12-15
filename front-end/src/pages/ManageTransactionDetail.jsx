import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { useCookies } from "react-cookie";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ManageTransactionDetail = () => {
  const { order_id } = useParams();
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const [transactionDetails, setTransactionDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/admin/transactions/${order_id}/details`
        );
        setTransactionDetails(response.data);
      } catch (error) {
        console.error("Error fetching transaction details:", error);
      }
    };

    fetchTransactionDetails();
  }, [order_id]);

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
          <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-5 text-center">
              Transaction Details for Order ID {order_id}
            </h1>

            {transactionDetails.map((detail) => (
              <div key={detail.detail_id} className="mb-4 p-4 border border-primary rounded-lg">
                <div className="row">
                  <div className="col-2 me-4"><img src={`http://localhost:3000/sellers/product/pic/${detail.Product.product_id}`} style={{maxWidth: "250px"}}/></div>
                  <div className="col-9 py-5">
                    <h2 className="text-2xl font-bold mb-2">
                      {detail.Product.product_name}
                    </h2>
                    <p className="text-2xl">Quantity: {detail.qty}</p>
                    <p className="text-2xl">Subtotal: Rp{" "} {detail.subtotal}</p>
                    <p className="text-2xl">Created At: {detail.createdAt}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageTransactionDetail;
