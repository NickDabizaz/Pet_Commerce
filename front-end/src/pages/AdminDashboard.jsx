import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainLayout } from "../Components";

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
      <div>
        <h2>Admin Dashboard</h2>
        {loading && <p>Loading...</p>}
        {message && <p>{message}</p>}
        <button
          onClick={() => setCurPage("home")}
          className="border border-dark"
        >
          Home
        </button>{" "}
        <button
          onClick={() => setCurPage("manageUser")}
          className="border border-dark"
        >
          manage users
        </button>{" "}
        <button
          onClick={() => setCurPage("manageCommunity")}
          className="border border-dark"
        >
          manage community
        </button>{" "}
        <button
          onClick={() => setCurPage("manageFAQ")}
          className="border border-dark"
        >
          manage faq
        </button>
        {curPage == "home" && home()}
        {curPage == "manageUser" && manageUser(users)}
        {curPage == "manageCommunity" && manageCommunity()}
        {curPage == "manageFAQ" && manageFAQ()}
      </div>
    </>
  );
}

function home() {
  return (
    <>
      <div>Sawadikap min!</div>
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
