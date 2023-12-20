import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MainLayout } from "../Components";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import create from "../assets/create.png"
import createpict from "../assets/createpict.jpg"

function CreateStore() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cookies] = useCookies(["user_id"]);
  const user_id = cookies.user_id;
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async (data) => {
    data.user_id = user_id;

    try {

      const formData = new FormData();
      if (selectedFile) {
        formData.append("file", selectedFile);
      }
      formData.append("user_id", user_id);
      formData.append("store_name", data.store_name);
      formData.append("store_description", data.store_description);

      const response = await axios.post(
        "https://petcommerce-backend.onrender.com/sellers/create-store/store",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      reset();
      navigate(`/store/${response.data.store_id}`);

      if (response.status === 200) {
        setSuccessMessage("Store created successfully");
        setErrorMessage("");
      } else {
        setErrorMessage("Error creating store");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error creating store:", error);
      setErrorMessage("Error creating store");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <MainLayout />
      <div className="container-fluid" style={{ backgroundColor: "#F3F0F0" }}>{/* #61A0AF or #1286CE*/}
        <div className="pt-20 pb-20">
          <div className="container-fluid rounded d-flex shadow" style={{ width: "86rem", height: "46rem", backgroundColor: "#6CD4FF", overflow: "hidden" }}>
            <div className="container-fluid rounded" style={{ width: "100%", height: "55rem", position: "relative" }}>
              <img src={createpict} className="rounded" style={{ width: "100%", height: "46rem", left: -15, position: "absolute", zIndex: 1}} />
            </div>
            <div className="container-fluid rounded" style={{ width: "50%", height: "44rem", marginTop: "1rem", backgroundColor: "#FFFFFF" }}>
              <img src={create} style={{ display: "block", margin: "0 auto", width: "22rem", height: "6rem", marginTop: "4%" }} />
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Upload gambar */}
                <div className="row mt-5 p-0">
                  <div className="m-auto w-36 h-36 p-0" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    {selectedFile ? (
                      <div id="imageContainer" className="p-0 w-36 h-36"></div>
                    ) : (
                      <div className="w-36 h-36 p-0">
                        <img
                          src="https://i.pinimg.com/736x/64/53/c8/6453c8226817e6ab85a6321aeee19e80.jpg"
                          alt="image"
                          className="w-36 h-36"
                        />
                      </div>
                    )}
                    <div className="btn btn-secondary w-36 mt-2">
                      <FileUploader setSelectedFile={setSelectedFile} />
                    </div>
                  </div>
                  <br />
                </div>

                <div>
                  <label style={{ marginLeft: "3%", fontWeight: 700, marginBottom: "1%", marginTop: "7%" }}>Store Name:</label>
                  <input className="form-control" style={{ marginLeft: "3%", width: "94%" }}
                    type="text"
                    {...register("store_name", { required: true })}
                  />
                </div>
                <div>
                  <label style={{ marginTop: "7%", marginLeft: "3%", fontWeight: 700, marginBottom: "1%" }}>Store Description:</label>
                  <input className="form-control" style={{ marginLeft: "3%", width: "94%" }}
                    type="text"
                    {...register("store_description", { required: true })}
                  />
                </div>
                <button type="submit"
                  className="btn btn-info"
                  style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", marginTop: "8%", marginLeft: "3%", fontWeight: 700, width: "94%", height: "2.5rem", color: "white" }}>
                  Create Store
                </button>
                {errors.store_name && (
                  <p className="text-center" style={{ marginTop: "5%", color: "red" }}>Store Name is required</p>
                )}
                {errors.store_description && (
                  <p className="text-center" style={{ marginTop: "1%", color: "red" }}>
                    Store Description is required
                  </p>
                )}
                {successMessage && (
                  <p className="text-center" style={{ marginTop: "1%", color: "red" }}>
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-center" style={{ marginTop: "1%", color: "red" }}>
                    {errorMessage}
                  </p>
                )}
              </form>
              <p
              className="text-center"
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              Change Of Mind?{" "}
              <b
                className="cursor-pointer"
                style={{ color: "#D39C39" }}
                onClick={() => {
                  navigate(`/profile`);
                }}
              >
                Back To Profile
              </b>
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateStore;

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
        imgElement.style.height = "9rem";
        imgElement.style.width = "9rem";
        imgElement.style.maxWidth = "9rem";
        imgElement.style.maxHeight = "9rem";
        imgElement.style.objectFit = "cover";
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
        Select Image
      </div>
    </div>
  );
};
