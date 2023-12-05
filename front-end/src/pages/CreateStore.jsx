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
        "http://localhost:3000/sellers/create-store/store",
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
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>{/* #61A0AF or #1286CE*/}
        <div className="pt-20 pb-20">
          <div className="container-fluid rounded d-flex shadow" style={{ width: "90%", height: "100vh", backgroundColor: "#6CD4FF", overflow: "hidden" }}>
            <div className="container-fluid rounded" style={{ width: "100%", height: "75vh", position: "relative" }}>
              <img src={createpict} className="rounded" style={{ width: "120vh", height: "56.7rem", left: 0, top: 23, position: "absolute", zIndex: 1 }} />
            </div>
            <div className="container-fluid rounded" style={{ width: "60%", height: "95vh", marginTop: "2.5vh", backgroundColor: "#FFFFFF" }}>
              <img src={create} style={{ display: "block", margin: "0 auto", width: "22rem", height: "6rem", marginTop: "4%" }} />
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Upload gambar */}
                <div className="row mt-5 p-0" style={{ marginLeft: "2rem" }}>
                  <div className="col-auto p-0" style={{marginLeft: "22%"}}>
                    {selectedFile ? (
                      <div id="imageContainer" className="p-0 w-72 h-72"></div>
                    ) : (
                      <div
                        className="w-72 h-72 p-0"
                        style={{ objectFit: "cover" }}
                      >
                        {" "}
                        <img
                          src="https://i.pinimg.com/736x/64/53/c8/6453c8226817e6ab85a6321aeee19e80.jpg"
                          alt="image"
                          className="w-full h-full"
                        />
                      </div>
                    )}
                    <div className="btn btn-secondary w-full mt-2">
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
        imgElement.style.height = "14rem";
        imgElement.style.width = "14rem";
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
