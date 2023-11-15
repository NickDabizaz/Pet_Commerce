import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import searchLogo from "./assets/search.png";
import cartLogo from "./assets/cart.png";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dogo from "./assets/dogo.jpg";

export function HomePage() {
  return <h1>Home</h1>;
}

export function AboutPage() {
  return <h1>About</h1>;
}

export function ContactUsPage() {
  return <h1>Contact Us</h1>;
}

export function AlwaysErrorPage() {
  throw new Error("Error");
  // return <h1>This will never show</h1>;
}

export function ErrorElement() {
  return <h1>Error</h1>;
}

export function MainLayout() {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ display: "flex", backgroundColor: "#6CD4FF" }}
      >
        <NavLink to="/">
          <img src={logo} style={{ width: "100px", height: "100px" }} />
        </NavLink>
        <nav
          className="navbar p-3"
          style={{ backgroundColor: "#6CD4FF", width: "100%" }}
        >
          <div style={{ display: "flex", flex: 4 }}>
            <input
              className="form-control me-3"
              type="search"
              aria-label="Search"
              placeholder="Colorful Pet Leash"
              style={{
                fontFamily: "Literata",
                fontSize: "12pt",
                height: "2.5rem",
              }}
              onChange={handleInputChange}
            ></input>
            <NavLink to={`/products?q=${searchValue}`}>
              <div className="btn btn-info justify-content-center" style={{ backgroundColor: "#1286CE", borderColor: "#1286CE", width: "60px", height: "2.5rem", maxHeight: "2.5rem", maxWidth: "60px" }}>
                <img
                  src={searchLogo}
                  style={{ display: "block", width: "25px", height: "25px", color: "white", margin: "0 auto" }}
                />
              </div>
            </NavLink>
          </div>

          <div style={{ flex: 2 }}></div>

          <div>
            {!cookie.user_id && (
              <NavLink to="/register">
                <button
                  className="p-1 px-4 rounded me-3"
                  style={{
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "transparent",
                    height: "2.5rem",
                    fontFamily: "Literata",
                    fontWeight: 600,
                    fontSize: "14pt",
                  }}
                >
                  Register
                </button>
              </NavLink>
            )}
            {cookie.user_id && (
              <button
                className="btn btn-warning mx-4"
                onClick={() => navigate("/cart")}
              >
                Cart
              </button>
            )}
            {/* {cookie.user_id && (
              <button
                className="btn btn-danger mx-4"
                onClick={() => {
                  removeCookie("user_id");
                  navigate("/");
                }}
              >
                Logout
              </button>
            )} */}
          </div>

          <div>
            {!cookie.user_id ? (
              <NavLink to="/login">
                <button
                  className="p-1 px-4 rounded"
                  style={{
                    border: "1px solid white",
                    color: "black",
                    backgroundColor: "white",
                    height: "2.5rem",
                    fontFamily: "Literata",
                    fontWeight: 600,
                    fontSize: "14pt",
                  }}
                >
                  Login
                </button>
              </NavLink>
            ) : (
              <NavLink to={"/profile"} style={{}}>
                <img
                  className="mx-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETyc4RCQOt5YVtW2mbRuR3wdxFVDD8R6BA&usqp=CAU"
                  style={{
                    height: "3rem",
                    width: "3rem",
                    objectFit: "cover",
                    borderRadius: "50%  ",
                  }}
                />
              </NavLink>
            )}
          </div>
        </nav>

      </div>
      <div 
        className="container-fluid"
        style={{ display: "flex", backgroundColor: "#1286CE", height: "2.1rem" }}
      >
        <div style={{ marginLeft: "2.5rem" }}><Link to={"/"}><p style={{ fontFamily: "Literata", fontSize: "16pt", fontWeight: 600, color: "white" }}>Home</p></Link></div>
        <div style={{ marginLeft: "7rem" }}><Link to={"/community"}><p style={{ fontFamily: "Literata", fontSize: "16pt", fontWeight: 600, color: "white" }}>Community</p></Link></div>
        <div style={{ marginLeft: "7rem" }}><Link to={"/"}><p style={{ fontFamily: "Literata", fontSize: "16pt", fontWeight: 600, color: "white" }}>FAQ</p></Link></div>      
      </div>
      <div style={{ top: "100px", position: "relative" }}>
        <Outlet />
      </div>
    </>
  );
}
