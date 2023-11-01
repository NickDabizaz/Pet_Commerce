import React from "react";
import logo from "../assets/logo.png";
import searchlogo from "../assets/search.png";
import banner from "../assets/banner.png";
import banneranimal from "../assets/banneranimal.png";
import dogfood from "../assets/dogfood.png";

function MockupHome() {
  return (
    <>
      <div className="container-fluid" style={{display: "flex", backgroundColor: "#6CD4FF"}}>
        <img src={logo} style={{ width: "100px", height: "100px"}} />
        <nav className="navbar p-3" style={{ backgroundColor: "#6CD4FF", width: "100%"}}>
          <div style={{ display: "flex", flex: 4 }}>
            <input
              className="form-control me-3"
              type="search"
              placeholder="Colorful Dog Leash"
              aria-label="Search"
              style={{fontFamily: "Literata", fontSize: "12pt", height: "2.5rem"}}            
            ></input>
            <button className="btn btn-outline-success" type="submit" style={{backgroundColor: "#1286CE", height: "2.5rem"}}>
              <img src={searchlogo} style={{width: "30px", height: "30px", color:"white"}}/>
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
                fontSize: "14pt"
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
                fontSize: "14pt"
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
        <div className="ms-5" style={{ color: "white", fontFamily: "Literata", fontWeight: 600, fontSize: "14pt"}}>
          Home
        </div>
        <div style={{ color: "white", fontFamily: "Literata", fontWeight: 600, fontSize: "14pt", marginLeft: "6%"}}>
          Community
        </div>
        <div style={{ color: "white", fontFamily: "Literata", fontWeight: 600, fontSize: "14pt", marginLeft: "6%"}}>
          FAQ
        </div>
        <div style={{ flex: 30 }}></div>
      </nav>
      <div style={{ backgroundImage: `url(${banner})`, height: "70vh", backgroundSize: "contain", display: "flex"}}>
        <div className="rounded"
          style={{
            position: "relative",
            left: "15vh",
            top: "15vh",
            width: "28vw",
            height: "40vh",
            backgroundColor: "#6CD4FF",
          }}
        >
          <p className="text-center mt-3" style={{ color: "white", fontFamily: "Literata", fontWeight: 700, fontSize: "25pt"}}>Welcome To Pet-Commerce</p>
          <p className="text-center mt-3" style={{ color: "white", fontFamily: "Literata", fontWeight: 600, fontSize: "18pt", marginLeft: "10%", width: "80%"}}>Don’t let your pets feel lonely. Give them a special gift from Pet-Commerce. We sell a variety of toys, treats, and accessories for your pets.</p>
        </div>
        <img src={banneranimal} style={{width: "45rem", height: "22rem", marginTop: "4.5rem", marginLeft: "18%"}}  />
      </div>

      <hr className="border border-primary border-3"/>

      <div className="p-2 px-5">
        <div
          className="px-5"
          style={{ width: "100%", height: "100%", backgroundColor: "" }}
        >
          <div className="fs-4 m-0 mb-3" style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "25pt"}}>Dog Section</div>
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
              <img src={dogfood} style={{width: "18vh", height: "18vh", marginTop: "4vh"}} />
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "14pt", marginTop: "1vh"}}>Dog Food - Chicken & Vegetable Flavor</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "6.5vh"}}>
                  Made from authentic chicken and vegetables
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "16pt",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <div style={{ fontSize: "0.6rem" }}>⭐⭐⭐⭐⭐</div>
                  <span style={{ fontSize: "0.8rem", color: "#6CD4FF"}}>
                    100 Sold
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
                height: "12rem",
                display: "flex",
              }}
            >
              <img src={dogfood} style={{width: "18vh", height: "18vh", marginTop: "4vh"}} />
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "14pt", marginTop: "1vh"}}>Dog Food - Chicken & Vegetable Flavor</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "6.5vh"}}>
                  Made from authentic chicken and vegetables
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "16pt",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <div style={{ fontSize: "0.6rem" }}>⭐⭐⭐⭐⭐</div>
                  <span style={{ fontSize: "0.8rem", color: "#6CD4FF"}}>
                    100 Sold
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
                height: "12rem",
                display: "flex",
              }}
            >
              <img src={dogfood} style={{width: "18vh", height: "18vh", marginTop: "4vh"}} />
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "14pt", marginTop: "1vh"}}>Dog Food - Chicken & Vegetable Flavor</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "6.5vh"}}>
                  Made from authentic chicken and vegetables
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "16pt",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <div style={{ fontSize: "0.6rem" }}>⭐⭐⭐⭐⭐</div>
                  <span style={{ fontSize: "0.8rem", color: "#6CD4FF"}}>
                    100 Sold
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
                height: "12rem",
                display: "flex",
              }}
            >
              <img src={dogfood} style={{width: "18vh", height: "18vh", marginTop: "4vh"}} />
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "14pt", marginTop: "1vh"}}>Dog Food - Chicken & Vegetable Flavor</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "6.5vh"}}>
                  Made from authentic chicken and vegetables
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "16pt",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <div style={{ fontSize: "0.6rem" }}>⭐⭐⭐⭐⭐</div>
                  <span style={{ fontSize: "0.8rem", color: "#6CD4FF"}}>
                    100 Sold
                  </span>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className="fs-4 m-0 mb-3" style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "25pt"}}>Dog Section 2</div>
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
              <img src={dogfood} style={{width: "18vh", height: "18vh", marginTop: "4vh"}} />
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "14pt", marginTop: "1vh"}}>Dog Food - Chicken & Vegetable Flavor</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "6.5vh"}}>
                  Made from authentic chicken and vegetables
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "16pt",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <div style={{ fontSize: "0.6rem" }}>⭐⭐⭐⭐⭐</div>
                  <span style={{ fontSize: "0.8rem", color: "#6CD4FF"}}>
                    100 Sold
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
                height: "12rem",
                display: "flex",
              }}
            >
              <img src={dogfood} style={{width: "18vh", height: "18vh", marginTop: "4vh"}} />
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "14pt", marginTop: "1vh"}}>Dog Food - Chicken & Vegetable Flavor</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "6.5vh"}}>
                  Made from authentic chicken and vegetables
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "16pt",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <div style={{ fontSize: "0.6rem" }}>⭐⭐⭐⭐⭐</div>
                  <span style={{ fontSize: "0.8rem", color: "#6CD4FF"}}>
                    100 Sold
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
                height: "12rem",
                display: "flex",
              }}
            >
              <img src={dogfood} style={{width: "18vh", height: "18vh", marginTop: "4vh"}} />
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "14pt", marginTop: "1vh"}}>Dog Food - Chicken & Vegetable Flavor</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "6.5vh"}}>
                  Made from authentic chicken and vegetables
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "16pt",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <div style={{ fontSize: "0.6rem" }}>⭐⭐⭐⭐⭐</div>
                  <span style={{ fontSize: "0.8rem", color: "#6CD4FF"}}>
                    100 Sold
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
                height: "12rem",
                display: "flex",
              }}
            >
              <img src={dogfood} style={{width: "18vh", height: "18vh", marginTop: "4vh"}} />
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "14pt", marginTop: "1vh"}}>Dog Food - Chicken & Vegetable Flavor</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "6.5vh"}}>
                  Made from authentic chicken and vegetables
                </div>
                <div className="text-end" style={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "16pt",
                    }}
                  >
                    Rp 20.000
                  </span>
                  <br />
                  <div style={{ fontSize: "0.6rem" }}>⭐⭐⭐⭐⭐</div>
                  <span style={{ fontSize: "0.8rem", color: "#6CD4FF"}}>
                    100 Sold
                  </span>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className="fs-4 m-0 mb-3" style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "25pt"}}>Hot Topics</div>
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
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "16pt", marginTop: "1vh"}}>How to Take Care of Our Pets</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "10vh"}}>
                  For pet lovers out there, please provide the best solution for this problem
                </div>
                <div className="text-end" style={{ display: "block", marginTop: "14%" }}>
                  <span
                    style={{
                      color: "#1286CE",
                      fontWeight: "bold",
                      fontSize: "14pt",
                    }}
                  >
                    10,782 Replies
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
                height: "12rem",
                display: "flex",
              }}
            >
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "16pt", marginTop: "1vh"}}>How to Take Care of Our Pets</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "10vh"}}>
                  For pet lovers out there, please provide the best solution for this problem
                </div>
                <div className="text-end" style={{ display: "block", marginTop: "14%" }}>
                  <span
                    style={{
                      color: "#1286CE",
                      fontWeight: "bold",
                      fontSize: "14pt",
                    }}
                  >
                    10,782 Replies
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
                height: "12rem",
                display: "flex",
              }}
            >
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "16pt", marginTop: "1vh"}}>How to Take Care of Our Pets</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "10vh"}}>
                  For pet lovers out there, please provide the best solution for this problem
                </div>
                <div className="text-end" style={{ display: "block", marginTop: "14%" }}>
                  <span
                    style={{
                      color: "#1286CE",
                      fontWeight: "bold",
                      fontSize: "14pt",
                    }}
                  >
                    10,782 Replies
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
                height: "12rem",
                display: "flex",
              }}
            >
              <div className="container-fluid">
                <div style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "16pt", marginTop: "1vh"}}>How to Take Care of Our Pets</div>
                <div style={{ marginTop: "0.4rem", fontFamily: "Literata", fontSize: "10pt", minHeight: "10vh"}}>
                  For pet lovers out there, please provide the best solution for this problem
                </div>
                <div className="text-end" style={{ display: "block", marginTop: "14%" }}>
                  <span
                    style={{
                      color: "#1286CE",
                      fontWeight: "bold",
                      fontSize: "14pt",
                    }}
                  >
                    10,782 Replies
                  </span>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-primary border-3"/>

      <div className="p-2 px-5" style={{ backgroundColor: "#6CD4FF"}}>
        <div
          className="px-5"
          style={{
            width: "100%",
            height: "5vh",
            backgroundColor: "",
          }}
        >          
          <div className="d-flex justify-content-center mt-3">
            <p style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "12pt", color: "white"}}>Melvin Audrey Adianto - 221116971</p>
            <p style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "12pt", color: "white", marginLeft: "2%"}}>Nicklaus Dabizaz Fairlie - 221116978</p>
            <p style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "12pt", color: "white", marginLeft: "2%"}}>Ramaditya Satriawan - 221116983</p>
            <p style={{ fontFamily: "Literata", fontWeight: 700, fontSize: "12pt", color: "white", marginLeft: "2%"}}>Steven Tenata - 221116992</p>
          </div>       
        </div>
      </div>
    </>
  );
}

export default MockupHome;
