import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainLayout } from "../Components";
import welcome from "../assets/welcome.png"
import { NavLink } from "react-router-dom";

function AdminDashboard() {
  return (
    <>
      <MainLayout />
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
        <NavLink to="/admin" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Home</NavLink>
        <NavLink to="/admin/manage-users" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Users Management</NavLink>
        <NavLink to="/admin/manage-community" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Community Management</NavLink>
        <NavLink to="/admin/manage-faq" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>FAQ Management</NavLink>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#F3F0F0", height: "100vh" }}>
        <img src={welcome} style={{ display: "block", margin: "0 auto", width: "30%", paddingTop: "2%" }} />
        <div className="container-fluid d-flex mt-3">
          <div className="rounded" style={{ width: "100%", height: "40vh", backgroundColor: "#6CD4FF" }}>
            <div className="rounded" style={{ backgroundColor: "white", display: "block", margin: "0 auto", width: "90%", height: "86%", marginTop: "4.5%" }}>
              <p className="text-center pt-4" style={{ fontFamily: "Literata", fontSize: "18pt", fontWeight: 700, color: "#1286CE" }}>Users Management</p>
              <p className="text-start mt-2 ps-4 pe-4" style={{ fontFamily: "Literata", fontSize: "14pt", color: "black" }}>
                This section is used to see all users that are already registered in Pet-Commerce. As an admin, you can delete user that are breaking the rules.
              </p>
              <NavLink to="/admin/manage-users">
                <button className="btn btn-info" 
                style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", color: "white", display: "block", margin: "0 auto", marginTop: "4%", fontFamily: "Literata", fontWeight: 700 }}
                >Let&#39;s Manage</button>
              </NavLink>
            </div>
          </div>
          <div className="rounded ms-4 me-4" style={{ width: "100%", height: "40vh", backgroundColor: "#6CD4FF" }}>
            <div className="rounded" style={{ backgroundColor: "white", display: "block", margin: "0 auto", width: "90%", height: "86%", marginTop: "4.5%" }}>
            <p className="text-center pt-4" style={{ fontFamily: "Literata", fontSize: "18pt", fontWeight: 700, color: "#1286CE" }}>Users Management</p>
              <p className="text-start mt-2 ps-4 pe-4" style={{ fontFamily: "Literata", fontSize: "14pt", color: "black" }}>
                This section is used to see all users that are already registered in Pet-Commerce. As an admin, you can delete user that are breaking the rules.
              </p>
              <NavLink to="/admin/manage-community">
                <button className="btn btn-info" 
                style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", color: "white", display: "block", margin: "0 auto", marginTop: "4%", fontFamily: "Literata", fontWeight: 700 }}
                >Let&#39;s Manage</button>
              </NavLink>
            </div>
          </div>
          <div className="rounded" style={{ width: "100%", height: "40vh", backgroundColor: "#6CD4FF" }}>
            <div className="rounded" style={{ backgroundColor: "white", display: "block", margin: "0 auto", width: "90%", height: "86%", marginTop: "4.5%" }}>
            <p className="text-center pt-4" style={{ fontFamily: "Literata", fontSize: "18pt", fontWeight: 700, color: "#1286CE" }}>Users Management</p>
              <p className="text-start mt-2 ps-4 pe-4" style={{ fontFamily: "Literata", fontSize: "14pt", color: "black" }}>
                This section is used to see all users that are already registered in Pet-Commerce. As an admin, you can delete user that are breaking the rules.
              </p>
              <NavLink to="/admin/manage-faq">
                <button className="btn btn-info" 
                style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", color: "white", display: "block", margin: "0 auto", marginTop: "4%", fontFamily: "Literata", fontWeight: 700 }}
                >Let&#39;s Manage</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ManageUser() {
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
        <NavLink to="/admin" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Home</NavLink>
        <NavLink to="/admin/manage-users" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Users Management</NavLink>
        <NavLink to="/admin/manage-community" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Community Management</NavLink>
        <NavLink to="/admin/manage-faq" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>FAQ Management</NavLink>
      </div>
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

function ManageCommunity() {
  return (
    <>
      <MainLayout />
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
        <NavLink to="/admin" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Home</NavLink>
        <NavLink to="/admin/manage-users" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Users Management</NavLink>
        <NavLink to="/admin/manage-community" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Community Management</NavLink>
        <NavLink to="/admin/manage-faq" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>FAQ Management</NavLink>
      </div>
      <div>hai</div>
    </>
  );
}

function ManageFAQ() {
  return (
    <>
      <MainLayout />
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
        <NavLink to="/admin" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Home</NavLink>
        <NavLink to="/admin/manage-users" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Users Management</NavLink>
        <NavLink to="/admin/manage-community" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Community Management</NavLink>
        <NavLink to="/admin/manage-faq" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>FAQ Management</NavLink>
      </div>
      <div>hai</div>
    </>
  );
}

export { AdminDashboard, ManageUser, ManageCommunity, ManageFAQ };
