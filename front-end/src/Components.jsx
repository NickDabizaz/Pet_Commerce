import { Outlet, NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import searchLogo from "./assets/search.png";
import cartLogo from "./assets/cart.png";

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
  throw new Error();
  return <h1>This will never show</h1>;
}

export function ErrorElement() {
  return <h1>Error</h1>;
}

export function MainLayout() {
  return (
    <>
      <div
        className="align-middle"
        style={{
          backgroundColor: "#6CD4FF",
          width: "100%",
          position: "fixed",
          fontSize: "0.875 rem",
        }}
      >
        <ul style={{ display: "flex" }}>
          <li style={{ flex: 1 }}>
            <NavLink to="/">
              <img src={logo} style={{ width: "5rem" }} />
            </NavLink>
          </li>
          <li
            className="align-bottom"
            style={{ flex: 5, position: "relative" }}
          >
            <div style={{ display: "flex" }}>
              <input
                className="form-control me-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  fontFamily: "Literata",
                  fontSize: "12pt",
                  height: "2.5rem",
                }}
              ></input>
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ backgroundColor: "#1286CE", height: "2.5rem" }}
              >
                <img
                  src={searchLogo}
                  style={{ width: "30px", height: "30px", color: "white" }}
                />
              </button>
            </div>
          </li>
          <li style={{ flex: 5 }}></li>
          <li style={{ flex: 1 }}>
            {<img src={cartLogo} width={"40px"}></img>}
          </li>
          <li style={{ flex: 1 }}>GAMBAR</li>
        </ul>
      </div>
      <div style={{ top: "100px", position: "relative" }}>
        <Outlet />
      </div>
    </>
  );
}
