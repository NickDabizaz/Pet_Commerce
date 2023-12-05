import React, { useEffect, useRef, useState } from "react";
import { MainLayout } from "../Components";
import dogo from "../assets/dogo.jpg";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Profile() {
  const [cookie, setCookie, removeCookie] = useCookies("user_id");
  const [response, setResponse] = useState([]);
  const [toko, setToko] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [profpic, setProfPic] = useState()
  const [storepic, setStorePic] = useState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${cookie.user_id}`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get(`http://localhost:3000/users/store/${cookie.user_id}`)
      .then((res) => {
        setToko(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`http://localhost:3000/sellers/store/pic/${toko.store_id}`)
      .then((res) => {
        setStorePic(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setIsLoading(false)
  }, []);

  const handleOnSubmit = async () => {
    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append("file", selectedFile);
      }
      const response = await axios.post(
        `http://localhost:3000/users/profilpic/${cookie.user_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/pic/${cookie.user_id}`)
      .then((res) => {
        setProfPic(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedFile])

  return (
    <>
      <MainLayout />
      <div className="m-5">
        <h1 style={{ fontSize: "2rem" }}>My Profile</h1>
        <h1 style={{ fontSize: "1.5rem" }}>Manage your account</h1>
        <div className="mt-5" style={{ display: "flex" }}>
          <div className="mx-auto" style={{ width: "50rem" }}>
            <form onSubmit={() => handleOnSubmit()}>
              <table className="table text-start">
                <tr>
                  <td className="text-end" style={{ width: "10rem" }}>
                    Nama:
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={response.name}
                    ></input>
                  </td>
                </tr>
                <tr style={{ height: "1rem" }}></tr>
                <tr>
                  <td className="text-end">Email:</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={response.email}
                    ></input>
                  </td>
                </tr>
                <tr style={{ height: "1rem" }}></tr>
                <tr>
                  <td className="text-end">Address:</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={response.address}
                    ></input>
                  </td>
                </tr>
                <tr style={{ height: "1rem" }}></tr>
                <tr>
                  <td className="text-end">Phone Number:</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={response.phone_number}
                    ></input>
                  </td>
                </tr>
              </table>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Save
                </button>
              </div>
            </form>
          </div>

          {/* ---------Garis Abu---------------- */}

          <div
            className="mx-auto"
            style={{
              width: "20rem",
              height: "20rem",
              objectFit: "cover",
              display: "flex",
            }}
          >
            <div
              className="bg-black bg-opacity-25 me-4"
              style={{
                height: "20rem",
                width: "0.1rem",
              }}
            ></div>
            <div
              className=" text-center"
              style={{ display: "block", width: "15rem" }}
            >
              {selectedFile ? (
                <div id="imageContainer"></div>
              ) : (
                <img
                  className="mx-auto"
                  src={profpic ? `http://localhost:3000/users/pic/${cookie.user_id}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETyc4RCQOt5YVtW2mbRuR3wdxFVDD8R6BA&usqp=CAU"}
                  style={{
                    height: "10rem",
                    width: "10rem",
                    objectFit: "cover",
                    borderRadius: "50%  ",
                    border: "1px solid black",
                  }}
                />
              )}
              <div className="mx-auto mt-3">
                <button className="mx-auto btn btn-secondary">
                  <FileUploader setSelectedFile={setSelectedFile} />
                </button>
              </div>
              <br />
              <div className="mx-auto">
                File size: maximum 1 MB <br />
                File extension: .JPEG, .PNG
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
        <button
          className="btn btn-danger mx-4"
          onClick={() => {
            removeCookie("user_id");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
      <div className="m-5">
        <div
          className="btn btn-success"
          onClick={() => navigate("/create-store")}
        >
          Add New Store
        </div>
        <h1 style={{ fontSize: "2rem" }} className="mb-2">
          List Toko:
        </h1>
        {
          toko.map((toko, index) => {
            // const isAdaStorePic = axios.get(`http://localhost:3000/sellers/store/pic/${toko.store_id}`).then((response) => {return response.data})
            console.log(`http://localhost:3000/sellers/store/pic/${toko.store_id}`);
            return (
              !isLoading &&
              <>
                <div
                  key={index}
                  className="border border-dark rounded-1 mb-4"
                  onClick={() => navigate(`/store/${toko.store_id}`)}
                >
                  <div className="m-4 row">
                    <div className="col-1">
                      <img
                        src={
                          storepic
                          ? `http://localhost:3000/sellers/store/pic/${toko.store_id}`
                          : "https://static.vecteezy.com/system/resources/previews/002/267/032/non_2x/simple-store-icon-free-vector.jpg"
                        }
                        alt="icon-toko"
                        style={{
                          objectFit: "cover",
                          border: "1px solid black",
                          borderRadius: "50%",
                          height: "5rem",
                          width: "5rem"
                        }}
                      />
                    </div>
                    <div className="col-auto">
                      <div style={{ fontSize: "1.2rem" }}>{toko.store_name}</div>
                      <div>{toko.store_description}</div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}

const FileUploader = ({ setSelectedFile }) => {
  const [tempFile, setTempFile] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setTempFile(file);
    displayImage(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    setTempFile(file);
    displayImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    // Trigger the file input when the drop zone is clicked
    fileInputRef.current.click();
  };

  const displayImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Create an image element and set the data URL as its source
        const imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        imgElement.alt = "Selected Image";

        imgElement.style.marginLeft = "auto";
        imgElement.style.marginRight = "auto";
        imgElement.style.height = "10rem";
        imgElement.style.width = "10rem";
        imgElement.style.objectFit = "cover";
        imgElement.style.borderRadius = "50%";
        imgElement.style.border = "1px solid black";

        // Append the image element to the component
        document.getElementById("imageContainer").innerHTML = "";
        document.getElementById("imageContainer").appendChild(imgElement);
      };

      // Use readAsDataURL for images
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInputRef}
        accept=".jpeg, .jpg, .png"
      />
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          textAlign: "center",
          cursor: "pointer",
          height: "auto",
        }}
      >
        <p>Select Image</p>
      </div>
    </div>
  );
};

export default Profile;
