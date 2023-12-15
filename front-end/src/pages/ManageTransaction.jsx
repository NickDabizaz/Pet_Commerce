import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { useCookies } from "react-cookie";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ManageTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/transactions"
        );
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (orderId) => {
    navigate(`/admin/manage-transaction/${orderId}`);
  };

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
          className="container-fluid pt-2 overflow-y-auto"
          style={{
            backgroundColor: "#FFFFFF",
            width: "90%",
            height: "88vh",
            overflow: "hidden",
          }}
        >
          <div className="container mx-auto mt-8">
            {loading ? (
              <div className="flex justify-center items-center h-16">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Order ID</th>
                    <th className="border px-4 py-2">Order Date</th>
                    <th className="border px-4 py-2">Total Price</th>
                    <th className="border px-4 py-2">User</th>
                    <th className="border px-4 py-2">Total Quantity</th>
                    <th className="border px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.order_id}>
                      <td className="border px-4 py-2">
                        {transaction.order_id}
                      </td>
                      <td className="border px-4 py-2">
                        {transaction.order_date}
                      </td>
                      <td className="border px-4 py-2">
                        {transaction.total_price}
                      </td>
                      <td className="border px-4 py-2">
                        {transaction.User.name}
                      </td>
                      <td className="border px-4 py-2">
                        {transaction.OrderDetails.length > 0
                          ? transaction.OrderDetails[0].total_quantity
                          : "N/A"}
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() =>
                            handleViewDetails(transaction.order_id)
                          }
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageTransaction;
