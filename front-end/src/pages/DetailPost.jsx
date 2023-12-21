import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

const DetailPost = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [cookies] = useCookies(["user_id"]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState();
  const [like, setLike] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await axios.get(
          `https://petcommerce-backend.onrender.com/like/user/${cookies.user_id}/${post_id}`
        );
        setLike(response.data);
      } catch (error) {
        console.error("Error fetching like status:", error);
      }
    };

    fetchLikeStatus();
  }, [cookies.user_id, post_id]);

  const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSendChat = async () => {
    console.log(commentText);
    try {
      const response = await axios.post(
        "https://petcommerce-backend.onrender.com/comments",
        {
          comment_text: commentText,
          user_id: cookies.user_id,
          post_id: post_id,
        }
      );

      console.log(response.data);
      navigate(0);
    } catch (error) {
      alert("GABISA POST");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://petcommerce-backend.onrender.com/post/${post_id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
        alert("error hiks");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [post_id]);

  !cookies.user_id && navigate("/login");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {/* Ini kotak paling luar, ukuran, posisi */}
        <div
          className="text-center p-0"
          style={{
            zIndex: -1,
            width: "80rem",
            height: "40rem",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        >
          {/* Ini kotak kiri, ukuran */}
          <div
            style={{
              height: "40rem",
              width: "40rem",
            }}
          >
            <div style={{ height: "100%" }}>
              {/* ini container dari nama-waktu sampai like comment share */}
              <div
                style={{
                  height: "auto",
                  width: "40rem",
                  textAlign: "left",
                  top: "50%",
                  position: "absolute",
                  transform: "translateY(-50%)",
                  borderRadius: "1rem 0 0 1rem",
                }}
                className="bg-info"
              >
                {/* Ini bagian image dari post */}
                <div
                  className="bg-white"
                  style={{
                    backgroundImage: `url(https://petcommerce-backend.onrender.com/post/pic/${post_id})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="bg-dark bg-opacity-75"
                    src={`https://petcommerce-backend.onrender.com/post/pic/${post_id}`}
                    alt="post-image"
                    style={{
                      height: "40rem",
                      width: "40rem",
                      maxHeight: "40rem",
                      maxWidth: "40rem",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ini kotak kanan, ukuran */}
          <div
            style={{
              height: "40rem",
              width: "40rem",
              borderLeft: "1px solid black",
            }}
          >
            <div
              className="bg-info bg-opacity-25"
              style={{
                height: "100%",
                textAlign: "left",
                borderRadius: "0 1rem 1rem 0",
              }}
            >
              {/* Ini bagian Comment post*/}
              <div
                style={{
                  height: "29rem",
                  overflow: "auto",
                }}
                className="custom-scrollbar"
              >
                {/* ini nama pengepost - tanggal postnya */}
                <div
                  style={{
                    display: "flex",
                    height: "3rem",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      marginLeft: "2rem",
                    }}
                  >
                    {post.nama_pengepost}
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "lighter",
                    }}
                  >
                    {Math.floor(
                      (new Date() - new Date(post.createdAt.substring(0, 10))) /
                        (1000 * 60 * 60)
                    ) > 23
                      ? Math.floor(
                          (new Date() -
                            new Date(post.createdAt.substring(0, 10))) /
                            (1000 * 60 * 60 * 24)
                        ) + " d ago"
                      : Math.floor(
                          (new Date() -
                            new Date(post.createdAt.substring(0, 10))) /
                            (1000 * 60 * 60)
                        ) + "h ago"}
                  </div>
                  <FontAwesomeIcon
                    className="ms-auto me-2 fs-3"
                    icon={faCircleXmark}
                    onClick={() => navigate(-1)}
                    style={{ cursor: "pointer" }}
                  />
                </div>

                {/* Ini description post */}
                <div className="m-4 mt-2" style={{ wordBreak: "break-all" }}>
                  <div className="m-2">
                    {/* <b>{post.nama_pengepost}</b>  */}
                    {post.title}
                  </div>
                </div>

                <hr />

                {/* Ini comment-comment nya */}
                {post.comment.map((comment, index) => (
                  <div key={index} className="border border-dark rounded-3 m-4">
                    <div className="m-2">
                      {/* commentator */}
                      <div style={{ fontWeight: "bold" }}>{comment.user}</div>

                      {/* comment content */}
                      <div style={{ wordBreak: "break-all" }}>
                        {comment.comment_text}
                      </div>

                      {/* comment time */}
                      <div
                        className="text-black-50"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {Math.floor(
                          (new Date() - new Date(comment.comment_time)) /
                            (1000 * 60)
                        ) < 1
                          ? "Just now"
                          : Math.floor(
                              (new Date() - new Date(comment.comment_time)) /
                                (1000 * 60 * 60)
                            ) < 1
                          ? Math.floor(
                              (new Date() - new Date(comment.comment_time)) /
                                (1000 * 60)
                            ) + "m ago"
                          : Math.floor(
                              (new Date() - new Date(comment.comment_time)) /
                                (1000 * 60 * 60)
                            ) < 24
                          ? Math.floor(
                              (new Date() - new Date(comment.comment_time)) /
                                (1000 * 60 * 60)
                            ) + "h ago"
                          : Math.floor(
                              (new Date() - new Date(comment.comment_time)) /
                                (1000 * 60 * 60 * 24)
                            ) < 30
                          ? Math.floor(
                              (new Date() - new Date(comment.comment_time)) /
                                (1000 * 60 * 60 * 24)
                            ) + "d ago"
                          : Math.floor(
                              (new Date() - new Date(comment.comment_time)) /
                                (1000 * 60 * 60 * 24 * 30)
                            ) < 12
                          ? Math.floor(
                              (new Date() - new Date(comment.comment_time)) /
                                (1000 * 60 * 60 * 24 * 30)
                            ) + "mo ago"
                          : Math.floor(
                              (new Date() - new Date(comment.comment_time)) /
                                (1000 * 60 * 60 * 24 * 365)
                            ) + "y ago"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              {/* Ini bagian input comment */}
              <div className="h-16 m-2 mx-4 ">
                <div
                  className="row text-start m-0 mt-2"
                  style={{ fontSize: "1.5rem" }}
                >
                  <div className="col-auto p-0" style={{ fontSize: "1.5rem" }}>
                    <button
                      onClick={() => {
                        if (like) {
                          axios
                            .delete(
                              `https://petcommerce-backend.onrender.com/like/`,
                              {
                                data: {
                                  post_id: post_id,
                                  user_id: cookies.user_id,
                                },
                              }
                            )
                            .then((response) => {
                              console.log(response.data);
                              setLike(false);
                            })
                            .catch((error) => console.log(error));
                        } else {
                          axios
                            .post(
                              "https://petcommerce-backend.onrender.com/like",
                              {
                                user_id: cookies.user_id,
                                post_id: post_id,
                              }
                            )
                            .then((response) => {
                              console.log(response.data);
                              setLike(true);
                            })
                            .catch((error) => console.log(error));
                        }
                        navigate(0);
                      }}
                    >
                      {like ? (
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
                    />
                  </div>
                </div>

                <div className="text-start" style={{ fontSize: "1rem" }}>
                  {console.log(post)}
                  <b>{post.jumlah_like} likes </b>
                </div>
              </div>

              <hr />

              <div className="h-16 m-2 mx-4">
                <div className="row">
                  <div className="col-10" style={{ marginTop: "1rem" }}>
                    <input
                      type="text"
                      placeholder="Type here..."
                      className="w-full h-12 rounded-3 p-3"
                      value={commentText}
                      onChange={handleCommentTextChange}
                    />
                  </div>
                  <div className="col-2" style={{ marginTop: "1rem" }}>
                    <button
                      className="btn btn-info h-full w-full"
                      onClick={handleSendChat}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPost;
