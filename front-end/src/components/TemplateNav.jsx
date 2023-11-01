import logo from "../assets/logo.png";
import searchIcon from "../assets/search-icon.png";

function TemplateNav() {
  return (
    <>
      {/* nav */}
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
            <button
              className="btn align-center text-center icon-center"
              type="submit"
            >
              <img
                src={searchIcon}
                alt="searchIcon"
                style={{ height: "1rem" }}
              />
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
      {/* ---------------------------------------------------------------------------------- */}
      {/* isi */}

      {/* footer */}
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

export default TemplateNav;
