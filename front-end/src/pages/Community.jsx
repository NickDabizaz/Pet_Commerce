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
  const [profpic, setProfPic] = useState();

  const [likes, setLikes] = useState([]);

  useEffect(() => {
    // Buat fungsi async untuk mengambil data like
    const fetchLikes = async () => {
      try {
        const likesData = await Promise.all(
          response.map(async (post) => {
            try {
              const response = await axios.get(
                `https://petcommerce-backend.onrender.com/like/user/${cookie.user_id}/${post.post_id}`
              );

              // Jika respons adalah boolean langsung, gunakan nilainya
              return {
                post_id: post.post_id,
                isLike: response.data,
              };
            } catch (error) {
              console.error(
                `Error fetching like data for post ${post.post_id}:`,
                error
              );
              // Jika ada error, kembalikan nilai default atau sesuai kebutuhan
              return {
                post_id: post.post_id,
                isLike: false,
              };
            }
          })
        );

        // Setel state setelah semua data like diambil
        setLikes(likesData);
      } catch (error) {
        console.error("Error fetching like data:", error);
        // Handle error jika diperlukan
      }
    };

    // Panggil fungsi fetchLikes
    fetchLikes();
  }, [response, cookie.user_id]);
  console.log({ likes });

  const handleLikeToggle = (post_id) => {
    // Temukan data like yang sesuai dengan post_id
    const likeData = likes.find((like) => like.post_id === post_id).isLike;
    if (likeData) {
      // Jika post telah dilike, lakukan unlike

      axios
        .delete(`https://petcommerce-backend.onrender.com/like/`, {
          data: { post_id: post_id, user_id: cookie.user_id },
        })
        .then((response) => {
          // Handle respons setelah melakukan unlike
          console.log("Post unliked:", response.data);

          // Perbarui state likes setelah melakukan unlike
          setLikes((prevLikes) =>
            prevLikes.map((prevLike) =>
              prevLike.post_id === post_id
                ? { ...prevLike, isLike: false }
                : prevLike
            )
          );
        })
        .catch((error) => {
          console.error("Error unliking post:", error);
        });
    } else {
      // Jika post belum dilike, lakukan like
      axios
        .post(`https://petcommerce-backend.onrender.com/like/`, {
          post_id: post_id,
          user_id: cookie.user_id,
        })
        .then((response) => {
          // Handle respons setelah melakukan like
          console.log("Post liked:", response.data);

          // Perbarui state likes setelah melakukan like
          setLikes((prevLikes) => [...prevLikes, { post_id, isLike: true }]);
        })
        .catch((error) => {
          console.error("Error liking post:", error);
        });
    }
    navigate(0);
  };

  const navigate = useNavigate();

  const handlenewPostTextChange = (event) => {
    setnewPostText(event.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = (product_id) => {
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
        "https://petcommerce-backend.onrender.com/post/post",
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
      .get("https://petcommerce-backend.onrender.com/post/")
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://petcommerce-backend.onrender.com/users/pic/${cookie.user_id}`)
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
                    ? `https://petcommerce-backend.onrender.com/users/pic/${cookie.user_id}`
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
            {response.map((post, index) => {
              const isLikes = (
                likes.find((like) => like.post_id === post.post_id) || {}
              ).isLike;

              console.log({ isLikes });
              return (
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
                        {Math.floor(
                          (new Date() - new Date(post.createdAt)) / (1000 * 60)
                        ) < 1
                          ? "Just now"
                          : Math.floor(
                              (new Date() - new Date(post.createdAt)) /
                                (1000 * 60 * 60)
                            ) < 1
                          ? Math.floor(
                              (new Date() - new Date(post.createdAt)) /
                                (1000 * 60)
                            ) + "m ago"
                          : Math.floor(
                              (new Date() - new Date(post.createdAt)) /
                                (1000 * 60 * 60)
                            ) < 24
                          ? Math.floor(
                              (new Date() - new Date(post.createdAt)) /
                                (1000 * 60 * 60)
                            ) + "h ago"
                          : Math.floor(
                              (new Date() - new Date(post.createdAt)) /
                                (1000 * 60 * 60 * 24)
                            ) < 30
                          ? Math.floor(
                              (new Date() - new Date(post.createdAt)) /
                                (1000 * 60 * 60 * 24)
                            ) + "d ago"
                          : Math.floor(
                              (new Date() - new Date(post.createdAt)) /
                                (1000 * 60 * 60 * 24 * 30)
                            ) < 12
                          ? Math.floor(
                              (new Date() - new Date(post.createdAt)) /
                                (1000 * 60 * 60 * 24 * 30)
                            ) + "mo ago"
                          : Math.floor(
                              (new Date() - new Date(post.createdAt)) /
                                (1000 * 60 * 60 * 24 * 365)
                            ) + "y ago"}
                      </div>
                    </div>

                    <div className="bg-white">
                      <div
                        className="align-center"
                        style={{
                          minHeight: "29.8rem",
                          alignItems: "center",
                          backgroundImage: `url(https://petcommerce-backend.onrender.com/post/pic/${post.post_id})`,
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
                          src={`https://petcommerce-backend.onrender.com/post/pic/${post.post_id}`}
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
                        <button onClick={() => handleLikeToggle(post.post_id)}>
                          {isLikes ? (
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
                            <div
                              onClick={() => navigate(`/post/${post.post_id}`)}
                            >
                              Add a comment...
                            </div>
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
                  </div>
                </div>
              );
            })}
          </div>
        )}
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
