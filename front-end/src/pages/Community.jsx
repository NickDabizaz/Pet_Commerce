import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MainLayout } from "../Components";
import "../index.css";
import { NavLink, redirect, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import logoAdd from "../assets/addPost.png";
import { Modal, Button } from "react-bootstrap";

function Community() {
  const [cookie, setCookie] = useCookies("user_id");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newPostText, setnewPostText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [likes, setLikes] = useState(response.map(() => false));

  const handleLikeToggle = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const [profpic, setProfPic] = useState();

  const navigate = useNavigate();

  /* nanti dihapus */
  // const [pic, setPic] = useState("");

  // useEffect(
  //   axios
  //     .get("http://localhost:3000/post/pic/7")
  //     .then((response) => {
  //       const picData = response.data;
  //       setPic(picData);
  //       console.log({pic});
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching pic data:", error);
  //     }),
  //   []
  // );
  /* nanti dihapus */

  const handlenewPostTextChange = (event) => {
    setnewPostText(event.target.value);
  };

  const handleCloseModal = () => {
    // setQuantity(1);
    setShowModal(false);
  };

  const handleShowModal = (product_id) => {
    // setProductId(product_id);
    setShowModal(true);
  };

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newPostText);
      formData.append("user_id", cookie.user_id);
      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      const response = await axios.post(
        "http://localhost:3000/post/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      setTimeout(handleCloseModal(), 3000);

      navigate(0);
    } catch (error) {
      alert("GABISA POST");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/post/")
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log(response);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/pic/${cookie.user_id}`)
      .then((res) => {
        setProfPic(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <MainLayout />

      {cookie.user_id && (
        <div
          className="m-4 mb-0 mx-auto border border-dark rounded-4"
          style={{ width: "63rem", backgroundColor: "#6CD4FF" }}
        >
          <div className="m-2 row">
            <div className="col-auto p-0" style={{ width: "6rem" }}>
              <img
                src={
                  profpic
                    ? `http://localhost:3000/users/pic/${cookie.user_id}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETyc4RCQOt5YVtW2mbRuR3wdxFVDD8R6BA&usqp=CAU"
                }
                style={{
                  height: "5rem",
                  width: "5rem",
                  objectFit: "cover",
                  borderRadius: "50%  ",
                  border: "1px solid black",
                }}
              />
            </div>
            <div className="col-auto my-auto" style={{ width: "48rem" }}>
              <div
                className="border border-dark rounded-2 bg-white"
                style={{ cursor: "pointer" }}
                onClick={() => cookie.user_id && handleShowModal()}
              >
                <div
                  className="m-2"
                  onClick={() => cookie.user_id && handleShowModal()}
                >
                  What's on your mind?
                </div>
              </div>
            </div>
            <div className="col-auto my-auto bg-white border border-dark rounded-2">
              <div
                className="m-2 mx-1"
                style={{ cursor: "pointer" }}
                onClick={() => cookie.user_id && handleShowModal()}
              >
                Add picture
              </div>
            </div>
          </div>
        </div>
      )}

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        style={{ backgroundColor: "transparent" }}
      >
        <Modal.Header closeButton style={{ color: "#000" }}>
          <Modal.Title className="text-center" style={{ width: "100%" }}>
            Add New Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            color: "#000",
            overflow: "auto",
            height: "20rem",
            maxHeight: "20rem",
          }}
        >
          <textarea
            value={newPostText}
            onChange={handlenewPostTextChange}
            placeholder="What's on your mind"
            className="p-2"
            style={{
              height: "5rem",
              resize: "none",
              overflow: "auto",
              width: "100%",
            }}
          />
          <FileUploader setSelectedFile={setSelectedFile} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-danger"
            className="no-hover"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            variant="outline-warning"
            className="no-hover"
            onClick={handlePost}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        {loading == true && "Loading..."}
        {loading == false && (
          <div
            className="grid grid-cols-2 text-center m-auto"
            style={{ zIndex: -1, width: "80rem" }}
          >
            {console.log(response)}
            {response.map((post, index) => (
              <div
                key={post.post_id}
                className={`${
                  index % 2 == 0 ? "ms-auto me-4" : "ms-4 me-auto"
                }`}
              >
                <div
                  className="mt-4 mb-4 border-2 border-black rounded-4"
                  style={{
                    backgroundColor: "#6CD4FF",
                    width: "30rem",
                    minHeight: "49rem",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div className="text-start m-2 ms-4">
                      {post.nama_pengepost}
                    </div>

                    <div
                      className="mt-3 text-black-50"
                      style={{ fontSize: "0.6rem" }}
                    >
                      1h ago
                    </div>
                  </div>

                  <div className="bg-white">
                    <div
                      className="align-center"
                      style={{
                        minHeight: "29.8rem",
                        alignItems: "center",
                        backgroundImage: `url(http://localhost:3000/post/pic/${post.post_id})`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <img
                        className="max-w-full max-w-full bg-black object-contain my-auto bg-opacity-75"
                        style={{
                          width: "100%",
                          height: "100%",
                          maxHeight: "29.8rem",
                          maxWidth: "29.8rem",
                          position: "absolute",
                          opacity: "10",
                        }}
                        src={`http://localhost:3000/post/pic/${post.post_id}`}
                        alt={post.post_name}
                      />
                    </div>
                  </div>

                  <div
                    className="row text-start ms-8 mt-4"
                    style={{ fontSize: "1.5rem" }}
                  >
                    <div
                      className="col-auto p-0"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <button onClick={() => handleLikeToggle(index)}>
                        {likes[index] ? (
                          <FontAwesomeIcon
                            icon={solidHeart}
                            style={{ color: "#FF0000" }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={regularHeart}
                            style={{ color: "#000000" }}
                          />
                        )}
                      </button>
                    </div>

                    <div className=" col-auto p-0 ms-3">
                      <FontAwesomeIcon
                        icon={faComment}
                        style={{ color: "#000000", cursor: "pointer" }}
                        onClick={() => {
                          !cookie.user_id && navigate("/login");
                          cookie.user_id && navigate(`/post/${post.post_id}`);
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="row text-start mx-4"
                    style={{ fontSize: "1rem" }}
                  >
                    <b className="col-4">{post.jumlah_like} likes </b>
                  </div>

                  <div
                    className="text-start mt-4 mx-8"
                    style={{
                      cursor: "pointer",
                      wordWrap: "break-word",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                    }}
                  >
                    <b>{post.nama_pengepost}</b> {post.title}
                  </div>

                  <div className="text-black-50 mt-4 ms-8 me-8 mb-2 text-start h-20">
                    <div
                      className="p-0"
                      onClick={() => {
                        !cookie.user_id && navigate("/login");
                        cookie.user_id && navigate(`/post/${post.post_id}`);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="mt-1">
                        {post.comment.length > 0 ? (
                          "View all " + post.comment.length + " comments"
                        ) : (
                          <br />
                        )}
                      </div>
                      {post.comment.length > 0 && (
                        <span
                          className="text-black"
                          style={{
                            wordWrap: "break-word",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                          }}
                        >
                          <b>
                            {
                              post.comment[post.comment.length - 1]
                                .nama_pengomen
                            }
                            {": "}
                          </b>
                          {post.comment[post.comment.length - 1].komentar}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 
                    <ul className="text-left m-4">
                    Comments:
                    {post.comment.map((comment, index) => (
                      <li key={index} className="mb-2">
                        <p className=" ">{comment.nama_pengomen}</p>
                        <p className=" ">{comment.komentar}</p>
                        <p className=" ">{comment.waktu_komentar}</p>
                      </li>
                    ))}
                    </ul> 
                    */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <div
        className="row"
        style={{
          position: "fixed",
          bottom: "10vh",
          left: "10vh",
          border: "1px solid blue",
          backgroundColor: "white",
          borderRadius: "26px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
          className="col-auto p-0"
        >
          <img src={logoAdd} alt="add-post" style={{ objectFit: "cover" }} />
        </div>
        <div className="col-auto my-auto fw-bold">Add Post</div>
      </div> */}
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
      <label htmlFor="fileInput">Choose or drag and drop a file:</label>
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
          border: "2px dashed #ccc",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          minHeight: "10rem",
          height: "auto",
        }}
      >
        {tempFile ? <div id="imageContainer"></div> : <p>Add Photo</p>}
      </div>
    </div>
  );
};

export { Community };
