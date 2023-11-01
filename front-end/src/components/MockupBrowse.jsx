import logo from "../assets/logo.png";
import filterIcon from "../assets/filter-icon.png";
import searchIcon from "../assets/search-icon.png";
import petToy from "../assets/toy.png";

function MockupBrowse() {
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
              placeholder="Boneka untuk kucing super lembut"
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
      <div style={{ display: "flex", backgroundColor: "#F3F0F0" }}>
        <div className=" p-4" style={{ flex: 1 }} height="auto">
          <img src={filterIcon} alt="filter" height={"20px"} /> Search Filter :{" "}
          <br />
          <div
            className="mt-2 p-2"
            style={{
              width: "100%",
              height: "auto",
              border: "1px solid black",
              borderRadius: "5px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div
              className="m-2 px-2"
              style={{
                width: "auto",
                display: "flex",
                border: "1px solid #1286ce",
                borderRadius: "5px",
                backgroundColor: "#f1fbff",
                color: "#1286ce",
              }}
            >
              <div>Toys</div>
              <div className="ms-4">x</div>
            </div>
          </div>
          <h4>Categories :</h4>
          <div style={{ display: "flex" }}>
            <input
              className="form-check-input me-2"
              type="checkbox"
              value={"checked"}
              style={{ border: "1px solid black" }}
            />{" "}
            Food
          </div>
          <div style={{ display: "flex" }}>
            <input
              className="form-check-input me-2"
              type="checkbox"
              value={"checked"}
              style={{ border: "1px solid black" }}
            />{" "}
            Toys
          </div>
          <div style={{ display: "flex" }}>
            <input
              className="form-check-input me-2"
              type="checkbox"
              value={"checked"}
              style={{ border: "1px solid black" }}
            />{" "}
            Snacks
          </div>
          <div style={{ display: "flex" }}>
            <input
              className="form-check-input me-2"
              type="checkbox"
              value={"checked"}
              style={{ border: "1px solid black" }}
            />{" "}
            Accessories
          </div>
          <div style={{ display: "flex" }}>
            <input
              className="form-check-input me-2"
              type="checkbox"
              value={"checked"}
              style={{ border: "1px solid black" }}
            />{" "}
            Pet Clothing
          </div>
          <div style={{ display: "flex" }}>
            <input
              className="form-check-input me-2"
              type="checkbox"
              value={"checked"}
              style={{ border: "1px solid black" }}
            />{" "}
            Medicine and Vitamins
          </div>
        </div>
        <div className="p-4" style={{ flex: 4 }} height="100px">
          <div style={{ display: "flex", flexWrap: "wrap", height: "auto" }}>
            {/* Batas 4 per baris */}
            {/* Baris 1 */}
            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka Untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            {/* Baris 2 */}
            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            {/* Baris 3 */}
            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>

            <div
              className="m-4"
              style={{
                flex: "1 0 20%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="m-2">
                <img
                  src={petToy}
                  alt="toy"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "1.2rem" }}>
                  Boneka untuk Kucing Super Lembut
                </span>
                <br />
                <span style={{ color: "red" }}>Rp 72.500</span>
                <br />
                <br />
                <br />
                <div className="text-end" style={{ fontSize: "0.7rem" }}>
                  ⭐⭐⭐⭐⭐
                  <br />
                  <span style={{ color: "#1286ce" }}>1.5k sold</span>
                </div>
              </div>
            </div>
          </div>
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

export default MockupBrowse;
