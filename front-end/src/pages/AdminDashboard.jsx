import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainLayout } from "../Components";
import welcome from "../assets/welcome.png"

function AdminDashboard() {
  const [curPage, setCurPage] = useState("home");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
        setMessage("Error fetching users. Please try again later.");
      });
  }, []);

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:3000/admin/users/${id}`)
      .then((response) => {
        // Jika pengguna berhasil dihapus, perbarui daftar pengguna
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.user_id !== id)
        );
        setMessage("User deleted successfully.");
      })
      .catch((error) => {
        console.error(`Error deleting user with ID ${id}:`, error);
        setMessage("Error deleting user. Please try again later.");
      });
  };

  return (
    <>
      <MainLayout />
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
        {loading && <p>Loading...</p>}
        {message && <p>{message}</p>}
        <button
          onClick={() => setCurPage("home")}
          style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}
        >
          Home
        </button>{" "}
        <button
          onClick={() => setCurPage("manageUser")}
          style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}
        >
          Users Management
        </button>{" "}
        <button
          onClick={() => setCurPage("manageCommunity")}
          style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}
        >
          Community Management
        </button>{" "}
        <button
          onClick={() => setCurPage("manageFAQ")}
          style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}
        >
          FAQ Management
        </button>
      </div>
      {curPage == "home" && home()}
      {curPage == "manageUser" && manageUser(users)}
      {curPage == "manageCommunity" && manageCommunity()}
      {curPage == "manageFAQ" && manageFAQ()}
    </>
  );
}

function home() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#F3F0F0", height: "100vh" }}>
        <img src={welcome} style={{ display: "block", margin: "0 auto", width: "30%", paddingTop: "2%" }} />
        <div className="container-fluid d-flex mt-3">
          <div className="rounded" style={{ width: "100%", height: "40vh", backgroundColor: "#6CD4FF" }}>
            <div className="rounded" style={{ backgroundColor: "white", display: "block", margin: "0 auto", width: "90%", height: "86%", marginTop: "4.5%" }}>
              a
            </div>
          </div>
          <div className="rounded ms-4 me-4" style={{ width: "100%", height: "40vh", backgroundColor: "#6CD4FF" }}>
            <div className="rounded" style={{ backgroundColor: "white", display: "block", margin: "0 auto", width: "90%", height: "86%", marginTop: "4.5%" }}>
              a
            </div>
          </div>
          <div className="rounded pe-4" style={{ width: "100%", height: "40vh", backgroundColor: "#6CD4FF" }}>
            <div className="rounded" style={{ backgroundColor: "white", display: "block", margin: "0 auto", width: "90%", height: "86%", marginTop: "4.5%" }}>
              a
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function manageUser(users) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.user_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function manageCommunity() {
  return (
    <>
      <div>hai</div>
    </>
  );
}

function manageFAQ() {
  return (
    <>
      <div>hai</div>
    </>
  );
}

export default AdminDashboard;
