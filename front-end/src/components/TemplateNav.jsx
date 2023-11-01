import logo from "../assets/logo.png";
import searchIcon from "../assets/search-icon.png";

function TemplateNav() {
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

export default TemplateNav;
