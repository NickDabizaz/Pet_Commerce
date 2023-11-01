import React from "react";
import logo from "../assets/logo.png";

function MockupHome() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ display: "flex", backgroundColor: "#6cd4ff" }}
      >
        <img src={logo} style={{ width: "100px", height: "100px" }} />
        <nav
          className="navbar p-3"
          style={{ backgroundColor: "#6cd4ff", width: "100%" }}
        >
          <div style={{ display: "flex", flex: 4 }}>
            <input
              className="form-control me-3"
              type="search"
              placeholder="Authentic dog food"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>

          <div style={{ flex: 4 }}></div>

          <div style={{ flex: 1 }}>
            <button
              className="p-1 px-4"
              style={{
                border: "1px solid white",
                borderRadius: "5px",
                color: "white",
                backgroundColor: "transparent",
              }}
            >
              Register
            </button>
          </div>

          <div style={{ flex: 1 }}>
            <button
              className="p-1 px-4"
              style={{
                border: "1px solid white",
                borderRadius: "5px",
                color: "black",
                backgroundColor: "white",
              }}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
      {/* -------------------------------------------------------------------------------- */}
      {/* sub-navbar */}
      <nav className="navbar p-2" style={{ backgroundColor: "#1286ce" }}>
        <div style={{ flex: 1 }}></div>
        <div className="navbar-logo" style={{ flex: 2 }}>
          HOME
        </div>
        <div style={{ flex: 2 }}></div>
        <div className="navbar-logo" style={{ flex: 4 }}>
          COMMMUNITY
        </div>
        <div style={{ flex: 2 }}></div>
        <div className="navbar-logo" style={{ flex: 2 }}>
          FAQ
        </div>
        <div style={{ flex: 30 }}></div>
      </nav>
      <div style={{ backgroundColor: "red", height: "60vh" }}>
        <div
          style={{
            position: "relative",
            left: "10vh",
            top: "15vh",
            width: "30vw",
            height: "30vh",
            backgroundColor: "green",
          }}
        >
          asdasd
        </div>
      </div>

      <hr />

      <div className="p-2 px-5">
        <div
          className="px-5"
          style={{ width: "100%", height: "100%", backgroundColor: "" }}
        >
          <div className="fs-4 m-0 mb-3">Dog Section</div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: 15,
                border: "1px solid gray",
                borderRadius: "5px",
                height: "12rem",
                display: "flex",
              }}
            >
              <div className="col-5 bg-info"></div>
              <div className="col-7 p-2">
                <div className="fs-5">Dog Food - Garlic Chicked Flavor</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.7rem" }}>
                  Authentic garlic chicken dog food
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <span style={{ fontSize: "0.7rem" }}>⭐⭐⭐⭐⭐</span>
                  <br />
                  <span style={{ fontSize: "0.7rem", color: "#6cd4ff" }}>
                    100 sold
                  </span>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}></div>

            <div
              style={{
                flex: 15,
                border: "1px solid gray",
                borderRadius: "5px",
                height: "auto",
                display: "flex",
              }}
            >
              <div className="col-5 bg-info"></div>
              <div className="col-7 p-2">
                <div className="fs-5">Dog Food - Garlic Chicked Flavor</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.7rem" }}>
                  Authentic garlic chicken dog food
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <span style={{ fontSize: "0.7rem" }}>⭐⭐⭐⭐⭐</span>
                  <br />
                  <span style={{ fontSize: "0.7rem", color: "#6cd4ff" }}>
                    100 sold
                  </span>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}></div>

            <div
              style={{
                flex: 15,
                border: "1px solid gray",
                borderRadius: "5px",
                height: "auto",
                display: "flex",
              }}
            >
              <div className="col-5 bg-info"></div>
              <div className="col-7 p-2">
                <div className="fs-5">Dog Food - Garlic Chicked Flavor</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.7rem" }}>
                  Authentic garlic chicken dog food
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <span style={{ fontSize: "0.7rem" }}>⭐⭐⭐⭐⭐</span>
                  <br />
                  <span style={{ fontSize: "0.7rem", color: "#6cd4ff" }}>
                    100 sold
                  </span>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}></div>

            <div
              style={{
                flex: 15,
                border: "1px solid gray",
                borderRadius: "5px",
                height: "auto",
                display: "flex",
              }}
            >
              <div className="col-5 bg-info"></div>
              <div className="col-7 p-2">
                <div className="fs-5">Dog Food - Garlic Chicked Flavor</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.7rem" }}>
                  Authentic garlic chicken dog food
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <span style={{ fontSize: "0.7rem" }}>⭐⭐⭐⭐⭐</span>
                  <br />
                  <span style={{ fontSize: "0.7rem", color: "#6cd4ff" }}>
                    100 sold
                  </span>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className="fs-4 m-0 mb-3">Cat Section</div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: 15,
                border: "1px solid gray",
                borderRadius: "5px",
                height: "auto",
                display: "flex",
              }}
            >
              <div className="col-5 bg-info"></div>
              <div className="col-7 p-2">
                <div className="fs-5">Dog Food - Garlic Chicked Flavor</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.7rem" }}>
                  Authentic garlic chicken dog food
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <span style={{ fontSize: "0.7rem" }}>⭐⭐⭐⭐⭐</span>
                  <br />
                  <span style={{ fontSize: "0.7rem", color: "#6cd4ff" }}>
                    100 sold
                  </span>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}></div>

            <div
              style={{
                flex: 15,
                border: "1px solid gray",
                borderRadius: "5px",
                height: "auto",
                display: "flex",
              }}
            >
              <div className="col-5 bg-info"></div>
              <div className="col-7 p-2">
                <div className="fs-5">Dog Food - Garlic Chicked Flavor</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.7rem" }}>
                  Authentic garlic chicken dog food
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <span style={{ fontSize: "0.7rem" }}>⭐⭐⭐⭐⭐</span>
                  <br />
                  <span style={{ fontSize: "0.7rem", color: "#6cd4ff" }}>
                    100 sold
                  </span>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}></div>

            <div
              style={{
                flex: 15,
                border: "1px solid gray",
                borderRadius: "5px",
                height: "auto",
                display: "flex",
              }}
            >
              <div className="col-5 bg-info"></div>
              <div className="col-7 p-2">
                <div className="fs-5">Dog Food - Garlic Chicked Flavor</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.7rem" }}>
                  Authentic garlic chicken dog food
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <span style={{ fontSize: "0.7rem" }}>⭐⭐⭐⭐⭐</span>
                  <br />
                  <span style={{ fontSize: "0.7rem", color: "#6cd4ff" }}>
                    100 sold
                  </span>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}></div>

            <div
              style={{
                flex: 15,
                border: "1px solid gray",
                borderRadius: "5px",
                height: "auto",
                display: "flex",
              }}
            >
              <div className="col-5 bg-info"></div>
              <div className="col-7 p-2">
                <div className="fs-5">Dog Food - Garlic Chicked Flavor</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.7rem" }}>
                  Authentic garlic chicken dog food
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <span style={{ fontSize: "0.7rem" }}>⭐⭐⭐⭐⭐</span>
                  <br />
                  <span style={{ fontSize: "0.7rem", color: "#6cd4ff" }}>
                    100 sold
                  </span>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className="fs-4 m-0 mb-3">Check Our Threads</div>
          <div style={{ height: "15rem" }}></div>
        </div>
      </div>

      <hr />

      <div className="p-2 px-5">
        <div
          className="px-5"
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "",
          }}
        >
          <div style={{ display: "flex" }}>
            <div className="p-2" style={{ flex: 9, backgroundColor: "" }}>
              GAMBAR APA ITU GATAU
            </div>
            <div className="p-2" style={{ flex: 6, backgroundColor: "" }}>
              APA JUGA GATAU
            </div>
            <div className="p-2" style={{ flex: 4, backgroundColor: "" }}>
              Social Media
            </div>
            <div className="p-2" style={{ flex: 6, backgroundColor: "" }}>
              Politik?
            </div>
            <div className="p-2" style={{ flex: 6, backgroundColor: "" }}>
              Instusional?
            </div>
          </div>
          <div style={{ fontSize: "0.7rem" }}>
            Mimos pet - CNP <br /> Av. x000
          </div>
        </div>
      </div>
    </>
  );
}

export default MockupHome;
