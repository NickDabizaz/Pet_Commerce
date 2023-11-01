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
      <div style={{ display: "flex" }}>
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
              <div>Medicine and Vitamins</div>
              <div className="ms-4">x</div>
            </div>
          </div>
          <hr />
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
      <hr />

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

export default MockupBrowse;
