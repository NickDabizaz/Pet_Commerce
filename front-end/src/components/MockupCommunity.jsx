import logo from "../assets/logo.png";
import searchIcon from "../assets/search-icon.png";
import searchlogo from "../assets/search.png";
import dogo from "../assets/dogo.jpg";

function MockupCommunity() {
  return (
    <>
      {/* nav */}
      <div
        className="container-fluid"
        style={{ display: "flex", backgroundColor: "#6CD4FF" }}
      >
        <img src={logo} style={{ width: "100px", height: "100px" }} />
        <nav
          className="navbar p-3"
          style={{ backgroundColor: "#6CD4FF", width: "100%" }}
        >
          <div style={{ display: "flex", flex: 4 }}>
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
                src={searchlogo}
                style={{ width: "30px", height: "30px", color: "white" }}
              />
            </button>
          </div>

          <div style={{ flex: 2 }}></div>

          <div>
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
          </div>

          <div>
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
          </div>
        </nav>
      </div>
      {/* -------------------------------------------------------------------------------- */}
      {/* sub-navbar */}
      <nav className="navbar p-2" style={{ backgroundColor: "#1286CE" }}>
        <div
          className="ms-5"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 600,
            fontSize: "14pt",
          }}
        >
          Home
        </div>
        <div
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 600,
            fontSize: "14pt",
            marginLeft: "6%",
          }}
        >
          Community
        </div>
        <div
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 600,
            fontSize: "14pt",
            marginLeft: "6%",
          }}
        >
          FAQ
        </div>
        <div style={{ flex: 30 }}></div>
      </nav>
      {/* ---------------------------------------------------------------------------------- */}
      {/* isi */}
      <div style={{ backgroundColor: "#F3F0F0" }}>
        <div className="mx-4" style={{ display: "flex" }}>
          <div style={{ flex: 1 }}></div>
          <div style={{ flex: 5 }}>
            <div
              className="m-4"
              style={{
                border: "1px solid transparent",
                borderRadius: "50px",
                backgroundColor: "#6cd4ff",
              }}
            >
              <div className="m-4">
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      flex: 3,
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    pimpim
                  </div>
                  <div style={{ flex: 1 }}></div>
                  <div
                    className="align-text-bottom"
                    style={{
                      flex: 3,
                      color: "gray",
                      fontSize: "1.2rem",
                    }}
                  >
                    1h ago
                  </div>
                  <div style={{ flex: 16 }}></div>
                </div>
              </div>

              <img src={dogo} alt="dogo" width={"100%"} />

              <div className="m-2 mx-4">
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    ❤ <span style={{ fontSize: "1.2rem" }}>389 likes</span>
                  </div>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
                    </svg>{" "}
                    53 comments
                  </div>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
                    </svg>
                    100 shares
                  </div>
                </div>
                <div className="mt-4" style={{ fontSize: "1.2rem" }}>
                  Hey there, fellow pet lovers! Today, we're sharing a little{" "}
                  adventure with <br /> our beloved Tabby, who can't contain her{" "}
                  excitement about her upcoming <br /> visit to the vet. <br />
                  <br />
                  Read More... <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 5 }}>
            <div
              className="m-4"
              style={{
                border: "1px solid transparent",
                borderRadius: "50px",
                backgroundColor: "#6cd4ff",
              }}
            >
              <div className="m-4">
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      flex: 3,
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    pimpim
                  </div>
                  <div style={{ flex: 1 }}></div>
                  <div
                    className="align-text-bottom"
                    style={{
                      flex: 3,
                      color: "gray",
                      fontSize: "1.2rem",
                    }}
                  >
                    1h ago
                  </div>
                  <div style={{ flex: 16 }}></div>
                </div>
              </div>

              <img src={dogo} alt="dogo" width={"100%"} />

              <div className="m-2 mx-4">
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    ❤ <span style={{ fontSize: "1.2rem" }}>389 likes</span>
                  </div>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
                    </svg>{" "}
                    53 comments
                  </div>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
                    </svg>
                    100 shares
                  </div>
                </div>
                <div className="mt-4" style={{ fontSize: "1.2rem" }}>
                  Hey there, fellow pet lovers! Today, we're sharing a little{" "}
                  adventure with <br /> our beloved Tabby, who can't contain her{" "}
                  excitement about her upcoming <br /> visit to the vet. <br />
                  <br />
                  Read More... <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}></div>
        </div>
        <div className="mx-4" style={{ display: "flex" }}>
          <div style={{ flex: 1 }}></div>
          <div style={{ flex: 5 }}>
            <div
              className="m-4"
              style={{
                border: "1px solid transparent",
                borderRadius: "50px",
                backgroundColor: "#6cd4ff",
              }}
            >
              <div className="m-4">
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      flex: 3,
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    pimpim
                  </div>
                  <div style={{ flex: 1 }}></div>
                  <div
                    className="align-text-bottom"
                    style={{
                      flex: 3,
                      color: "gray",
                      fontSize: "1.2rem",
                    }}
                  >
                    1h ago
                  </div>
                  <div style={{ flex: 16 }}></div>
                </div>
              </div>

              <img src={dogo} alt="dogo" width={"100%"} />

              <div className="m-2 mx-4">
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    ❤ <span style={{ fontSize: "1.2rem" }}>389 likes</span>
                  </div>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
                    </svg>{" "}
                    53 comments
                  </div>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
                    </svg>
                    100 shares
                  </div>
                </div>
                <div className="mt-4" style={{ fontSize: "1.2rem" }}>
                  Hey there, fellow pet lovers! Today, we're sharing a little{" "}
                  adventure with <br /> our beloved Tabby, who can't contain her{" "}
                  excitement about her upcoming <br /> visit to the vet. <br />
                  <br />
                  Read More... <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 5 }}>
            <div
              className="m-4"
              style={{
                border: "1px solid transparent",
                borderRadius: "50px",
                backgroundColor: "#6cd4ff",
              }}
            >
              <div className="m-4">
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      flex: 3,
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    pimpim
                  </div>
                  <div style={{ flex: 1 }}></div>
                  <div
                    className="align-text-bottom"
                    style={{
                      flex: 3,
                      color: "gray",
                      fontSize: "1.2rem",
                    }}
                  >
                    1h ago
                  </div>
                  <div style={{ flex: 16 }}></div>
                </div>
              </div>

              <img src={dogo} alt="dogo" width={"100%"} />

              <div className="m-2 mx-4">
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    ❤ <span style={{ fontSize: "1.2rem" }}>389 likes</span>
                  </div>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
                    </svg>{" "}
                    53 comments
                  </div>
                  <div style={{ flex: 1, fontSize: "1.2rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
                    </svg>
                    100 shares
                  </div>
                </div>
                <div className="mt-4" style={{ fontSize: "1.2rem" }}>
                  Hey there, fellow pet lovers! Today, we're sharing a little{" "}
                  adventure with <br /> our beloved Tabby, who can't contain her{" "}
                  excitement about her upcoming <br /> visit to the vet. <br />
                  <br />
                  Read More... <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}></div>
        </div>
      </div>

      {/* footer */}
      <div className="p-2 px-5" style={{ backgroundColor: "#6CD4FF" }}>
        <div
          className="px-5"
          style={{
            width: "100%",
            height: "5vh",
            backgroundColor: "",
          }}
        >
          <div className="d-flex justify-content-center mt-3">
            <p
              style={{
                fontFamily: "Literata",
                fontWeight: 700,
                fontSize: "12pt",
                color: "white",
              }}
            >
              Melvin Audrey Adianto - 221116971
            </p>
            <p
              style={{
                fontFamily: "Literata",
                fontWeight: 700,
                fontSize: "12pt",
                color: "white",
                marginLeft: "2%",
              }}
            >
              Nicklaus Dabizaz Fairlie - 221116978
            </p>
            <p
              style={{
                fontFamily: "Literata",
                fontWeight: 700,
                fontSize: "12pt",
                color: "white",
                marginLeft: "2%",
              }}
            >
              Ramaditya Satriawan - 221116983
            </p>
            <p
              style={{
                fontFamily: "Literata",
                fontWeight: 700,
                fontSize: "12pt",
                color: "white",
                marginLeft: "2%",
              }}
            >
              Steven Tenata - 221116992
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MockupCommunity;
