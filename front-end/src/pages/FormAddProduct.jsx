import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import addpict from "../assets/add.png";

export default function FormAddProduct() {
  const [cookies] = useCookies(["user_id"]);
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { store_id } = useParams();

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("http://localhost:3000/categories");
      setCategories(response.data);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const onSubmit = async ({
    product_name,
    price,
    quantity,
    rating,
    category_id,
  }) => {
    try {
      setLoading(true);

      if (selectedFile) {
        console.log(selectedFile);
        const { user_id } = cookies;
        rating = 0;

        const response = await axios.post(
          "http://localhost:3000/sellers/add-product/product",
          {
            file: selectedFile,
            user_id,
            product_name,
            price,
            quantity,
            rating,
            category_id,
            store_id,
          }
        );
        console.log({ response });

        setLoading(false);
        navigate(`/store/${store_id}`);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#1286CE" }}>
      <div className="pt-20 pb-20">
        <div
          className="container-fluid rounded d-flex shadow p-0"
          style={{
            width: "70rem",
            height: "auto",
            backgroundColor: "#6CD4FF",
            overflow: "hidden",
          }}
        >
          <div
            className="container-fluid rounded"
            style={{
              width: "68rem",
              height: "auto",
              margin: "1rem",
              backgroundColor: "#FFFFFF",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <img
                className="mx-auto"
                src={addpict}
                style={{
                  display: "block",
                  width: "26rem",
                  height: "5rem",
                  marginTop: "1rem",
                }}
              />

              <div
                className=" text-center row p-0"
                style={{ marginLeft: "2rem" }}
              >
                {selectedFile ? (
                  <div id="imageContainer" className="col-auto p-0"></div>
                ) : (
                  <>
                    <div className="p-0">
                      <FileUploader setSelectedFile={setSelectedFile} />
                    </div>
                  </>
                )}

                <br />
              </div>

              <div>
                <label
                  style={{
                    marginLeft: "2rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  Product Name
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "2rem", width: "62rem" }}
                  type="text"
                  placeholder="Product name"
                  {...register("product_name", {
                    required: "Product name is required",
                  })}
                />
              </div>

              <div>
                <label
                  style={{
                    marginLeft: "2rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    marginTop: "3rem",
                  }}
                >
                  Price
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "2rem", width: "62rem" }}
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: "Price is required" })}
                />
              </div>

              <div>
                <label
                  style={{
                    marginLeft: "2rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    marginTop: "3rem",
                  }}
                >
                  Quantity
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "2rem", width: "62rem" }}
                  type="number"
                  placeholder="Quantity"
                  {...register("quantity", {
                    required: "Quantity is required",
                  })}
                />
              </div>

              <div>
                <label
                  style={{
                    marginLeft: "2rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    marginTop: "3rem",
                  }}
                >
                  Category
                </label>
                <select
                  className="form-select"
                  style={{ marginLeft: "2rem", width: "62rem" }}
                  {...register("category_id")}
                >
                  {categories.map((category) => (
                    <option
                      key={category.category_id}
                      value={category.category_id}
                    >
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-info"
                disabled={loading}
                style={{
                  backgroundColor: "#C46E85",
                  borderColor: "#C46E85",
                  marginTop: "4rem",
                  marginLeft: "2rem",
                  fontWeight: 700,
                  width: "62rem",
                  height: "2.5rem",
                  color: "white",
                }}
              >
                {loading ? "Submitting..." : "Add Product"}
              </button>
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
                  navigate(`/store/${store_id}`);
                }}
              >
                Back To Store
              </b>
            </p>

            {errors.product_name && (
              <p
                className="text-center"
                style={{ marginTop: "1rem", color: "red" }}
              >
                {errors.product_name.message}
              </p>
            )}

            {errors.price && (
              <p
                className="text-center"
                style={{ marginTop: "1rem", color: "red" }}
              >
                {errors.price.message}
              </p>
            )}

            {errors.quantity && (
              <p
                className="text-center"
                style={{ marginTop: "1rem", color: "red" }}
              >
                {errors.quantity.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
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
        <img
          className="col-auto p-0"
          src="https://i.pinimg.com/736x/24/50/ae/2450ae69306cfbffc1260f3d74d7163b.jpg"
          style={{
            height: "10rem",
            width: "10rem",
            objectFit: "contain",
            border: "1px solid gray",
          }}
        />
      </div>
    </div>
  );
};
