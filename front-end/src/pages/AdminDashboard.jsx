import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainLayout } from "../Components";
import { useCookies } from "react-cookie";
import welcome from "../assets/welcome.png"
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);

  useEffect(() => {
    if(cookie.user_id != -1){
      navigate("/")
    }
  }, [])

  return (
    <>
      <div
        className="container-fluid"
        style={{ display: "flex", backgroundColor: "#6CD4FF" }}
      >
        <img src={logo} style={{ width: "100px", height: "100px" }} />
        <nav
          className="navbar p-3"
          style={{ backgroundColor: "#6CD4FF", width: "100%" }}
        >
          <div style={{ flex: 2 }}></div>
          <div>
            {cookie.user_id && (
              <div className="d-flex">
                <p style={{fontFamily: "Literata", fontSize: "16pt", color: "white", fontWeight: 700}}>Welcome, Admin</p>
                <NavLink to={"/"} style={{}}>
                  <button
                    className="me-2 ms-12 rounded"
                    style={{ fontFamily: "Literata", fontSize: "16pt", display: "block", fontWeight: 700, color: "white", backgroundColor: "#C46E85", borderColor: "#C46E85", width: "8rem", height: "2.5rem"}}
                    onClick={() => {
                      removeCookie("user_id");
                      navigate("/");
                    }}>Logout</button>
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
        <NavLink to="/admin" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Home</NavLink>
        <NavLink to="/admin/manage-users" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Users Management</NavLink>
        <NavLink to="/admin/manage-community" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Posts Management</NavLink>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#F3F0F0", height: "88vh" }}>
        <img src={welcome} style={{ display: "block", margin: "0 auto", width: "30%", paddingTop: "2%" }} />
        <div className="container-fluid d-flex mt-3">
          <div className="rounded" style={{ width: "100%", height: "21rem", backgroundColor: "#6CD4FF" }}>
            <div className="rounded" style={{ backgroundColor: "white", display: "block", margin: "0 auto", width: "94%", height: "87%", marginTop: "3%" }}>
              <p className="text-center pt-3" style={{ fontFamily: "Literata", fontSize: "24pt", fontWeight: 700, color: "#1286CE" }}>Users Management</p>
              <p className="text-center mt-2 ps-4 pe-4" style={{ fontFamily: "Literata", fontSize: "18pt", color: "black" }}>
                This section is used to view all users that are already registered in Pet-Commerce. As an admin, you can delete any user that are breaking the rules inside Pet-Commerce.
              </p>
              <NavLink to="/admin/manage-users">
                <button className="btn btn-info"
                  style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", color: "white", display: "block", margin: "0 auto", marginTop: "4%", fontFamily: "Literata", fontWeight: 700, width: "10rem", height: "3rem", fontSize: "16pt" }}
                >Users List</button>
              </NavLink>
            </div>
          </div>
          <div className="rounded ms-4 me-4" style={{ width: "100%", height: "21rem", backgroundColor: "#6CD4FF" }}>
            <div className="rounded" style={{ backgroundColor: "white", display: "block", margin: "0 auto", width: "94%", height: "87%", marginTop: "3%" }}>
              <p className="text-center pt-3" style={{ fontFamily: "Literata", fontSize: "24pt", fontWeight: 700, color: "#1286CE" }}>Community Management</p>
              <p className="text-center mt-2 ps-4 pe-4" style={{ fontFamily: "Literata", fontSize: "18pt", color: "black" }}>
                This section is used to view all posts that are already posted by users including every post&#39;s comments. As an admin, you can delete post or comment that are breaking the rules.
              </p>
              <NavLink to="/admin/manage-community">
                <button className="btn btn-info"
                  style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", color: "white", display: "block", margin: "0 auto", marginTop: "4%", fontFamily: "Literata", fontWeight: 700, width: "10rem", height: "3rem", fontSize: "16pt" }}
                >Check Posts</button>
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
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const [isloading, SetLoading] = useState(true)
  const [total, setTotal] = useState(-1)
  const [date, setDate] = useState(0)
  // let total
  // let date

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

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/order/Jumlah_transaksi/${user_id}`)
  //   .then((response) =>{
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching transaksi:", error);
  //   })
  // }, [])

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

  // const Jumlah_transaksi = (user_id) => {
  //   axios.get(`http://localhost:3000/order/Jumlah_transaksi/${user_id}`)
  //   .then((response) =>{
  //     console.log(response.data.jumlah_transaksi);
  //     setTotal(response.data.jumlah_transaksi)
  //     setLoading(false)
  //     return (response.data.jumlah_transaksi)
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching transaksi:", error);
  //   })
  // }

  // const last_date = (user_id) => {
  //   axios.get(`http://localhost:3000/order/Transaksi_terakhir/${user_id}`)
  //   .then((response) =>{
  //     console.log(response.data.result.order_date);
  //     setDate(response.data.result.order_date)
  //     setLoading(false)
  //     return (response)
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching transaksi:", error);
  //   })
  // }

  return (
    <>
      <div
        className="container-fluid"
        style={{ display: "flex", backgroundColor: "#6CD4FF" }}
      >
        <img src={logo} style={{ width: "100px", height: "100px" }} />
        <nav
          className="navbar p-3"
          style={{ backgroundColor: "#6CD4FF", width: "100%" }}
        >
          <div style={{ flex: 2 }}></div>
          <div>
            {cookie.user_id && (
              <div className="d-flex">
                <p style={{fontFamily: "Literata", fontSize: "16pt", color: "white", fontWeight: 700}}>Welcome, Admin</p>
                <NavLink to={"/"} style={{}}>
                  <button
                    className="me-2 ms-12 rounded"
                    style={{ fontFamily: "Literata", fontSize: "16pt", display: "block", fontWeight: 700, color: "white", backgroundColor: "#C46E85", borderColor: "#C46E85", width: "8rem", height: "2.5rem"}}
                    onClick={() => {
                      removeCookie("user_id");
                      navigate("/");
                    }}>Logout</button>
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
        <NavLink to="/admin" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Home</NavLink>
        <NavLink to="/admin/manage-users" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Users Management</NavLink>
        <NavLink to="/admin/manage-community" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Posts Management</NavLink>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#61A0AF", height: "88vh" }}>
        <div className="container-fluid pt-2 overflow-y-auto" style={{ backgroundColor: "#FFFFFF", width: "90%", height: "88vh", overflow: "hidden" }}>
          <table className="table" style={{ margin: "0 auto" }}>
            <thead className="text-center" style={{ verticalAlign: "middle" }}>
              <tr style={{ fontSize: "14pt" }}>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Jumlah Transaksi</th>
                <th>Transaksi Terakhir</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center" style={{ verticalAlign: "middle" }}>
              {users.map( (user) => {
                // Jumlah_transaksi(user.user_id)
                // last_date(user.user_id)
                console.log({total});
                console.log({date});
                // if(!isloading){
                  return(
                    <tr key={user.user_id}>
                      <td>{user.user_id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{total}</td>
                      <td>{date}</td>
                      <td>
                        <button className="btn btn-info"
                          style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", color: "white", fontFamily: "Literata", fontWeight: 700 }}
                          onClick={() => handleDeleteUser(user.user_id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                } 
                // }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function ManageCommunity() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
        setMessage("Error fetching posts. Please try again later.");
      });
  }, []);

  const handleDeletePost = (id) => {
    axios
      .delete(`http://localhost:3000/admin/posts/${id}`)
      .then((response) => {
        // Jika pengguna berhasil dihapus, perbarui daftar pengguna
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post.post_id !== id)
        );
        setMessage("Post deleted successfully.");
      })
      .catch((error) => {
        console.error(`Error deleting post with ID ${id}:`, error);
        setMessage("Error deleting post. Please try again later.");
      });
  };
  return (
    <>
      <div
        className="container-fluid"
        style={{ display: "flex", backgroundColor: "#6CD4FF" }}
      >
        <img src={logo} style={{ width: "100px", height: "100px" }} />
        <nav
          className="navbar p-3"
          style={{ backgroundColor: "#6CD4FF", width: "100%" }}
        >
          <div style={{ flex: 2 }}></div>
          <div>
            {cookie.user_id && (
              <div className="d-flex">
                <p style={{fontFamily: "Literata", fontSize: "16pt", color: "white", fontWeight: 700}}>Welcome, Admin</p>
                <NavLink to={"/"} style={{}}>
                  <button
                    className="me-2 ms-12 rounded"
                    style={{ fontFamily: "Literata", fontSize: "16pt", display: "block", fontWeight: 700, color: "white", backgroundColor: "#C46E85", borderColor: "#C46E85", width: "8rem", height: "2.5rem"}}
                    onClick={() => {
                      removeCookie("user_id");
                      navigate("/");
                    }}>Logout</button>
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
        <NavLink to="/admin" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Home</NavLink>
        <NavLink to="/admin/manage-users" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Users Management</NavLink>
        <NavLink to="/admin/manage-community" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "15pt", marginLeft: "3%" }}>Posts Management</NavLink>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#61A0AF", height: "88vh" }}>
        <div className="container-fluid pt-2 overflow-y-auto" style={{ backgroundColor: "#FFFFFF", width: "90%", height: "88vh", overflow: "hidden" }}>
          <table className="table" style={{ margin: "0 auto" }}>
            <thead className="text-center" style={{ verticalAlign: "middle" }}>
              <tr style={{ fontSize: "14pt" }}>
                <th>ID</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center" style={{ verticalAlign: "middle" }}>
              {posts.map((post) => (
                <tr key={post.post_id}>
                  <td>{post.post_id}</td>
                  <td>{post.title}</td>
                  <td>
                    <button className="btn btn-info"
                      style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", color: "white", fontFamily: "Literata", fontWeight: 700 }}
                      onClick={() => handleDeletePost(post.post_id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <NavLink to={`/admin/manage-community/${post.post_id}`}>
                      <button className="btn btn-info"
                        style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", color: "white", fontFamily: "Literata", fontWeight: 700, marginLeft: "2%" }}>
                        View
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export { AdminDashboard, ManageUser, ManageCommunity };
