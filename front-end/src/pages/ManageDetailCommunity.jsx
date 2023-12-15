import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { useCookies } from "react-cookie";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ManageDetailCommunity = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const { post_id } = useParams();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/admin/posts/${post_id}/details`
        );
        setPostData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post details:", error);
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [post_id]);

  const handleDeleteComment = async (commentId) => {
    try {
      // Mengirim request DELETE ke server
      await axios.delete(`http://localhost:3000/admin/comment/${commentId}`);
      navigate(0);
    } catch (error) {
      // Tangani error jika terjadi
      console.error("Error deleting comment:", error);
    }
  };

  console.log(postData)

  return (
    <>
      <div
        className="container-fluid"
        style={{ display: "flex", backgroundColor: "#6CD4FF" }}
      >
        <img
          src={logo}
          className="cursor-pointer"
          style={{ width: "100px", height: "100px" }}
          onClick={() => {
            navigate("/admin");
          }}
        />
        <nav
          className="navbar p-3"
          style={{ backgroundColor: "#6CD4FF", width: "100%" }}
        >
          <div style={{ flex: 2 }}></div>
          <div>
            {cookie.user_id && (
              <div className="d-flex">
                <p
                  style={{
                    fontFamily: "Literata",
                    fontSize: "16pt",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  Welcome, Admin
                </p>
                <button
                  className="me-2 ms-12 rounded"
                  style={{
                    fontFamily: "Literata",
                    fontSize: "16pt",
                    display: "block",
                    fontWeight: 700,
                    color: "white",
                    backgroundColor: "#C46E85",
                    borderColor: "#C46E85",
                    width: "8rem",
                    height: "2.5rem",
                  }}
                  onClick={() => {
                    removeCookie("user_id");
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
        <NavLink
          to="/admin"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 700,
            fontSize: "15pt",
            marginLeft: "3%",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/admin/manage-users"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 700,
            fontSize: "15pt",
            marginLeft: "3%",
          }}
        >
          Users Management
        </NavLink>
        <NavLink
          to="/admin/manage-community"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 700,
            fontSize: "15pt",
            marginLeft: "3%",
          }}
        >
          Posts Management
        </NavLink>
        <NavLink
          to="/admin/manage-store"
          style={{
            color: "white",
            fontFamily: "Literata",
            fontWeight: 700,
            fontSize: "15pt",
            marginLeft: "3%",
          }}
        >
          Store Management
        </NavLink>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#F3F0F0", height: "88vh" }}
      >
        <div
          className="container-fluid pt-2 overflow-y-auto"
          style={{
            backgroundColor: "#FFFFFF",
            width: "90%",
            height: "88vh",
            overflow: "hidden",
          }}
        >
          <div className="container mx-auto mt-8">
            {loading ? (
              <div className="flex justify-center items-center h-16">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-center">
                  {postData.title}
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">{`List of Likes - ${postData.likes.length}`}</h3>
                  <div className="d-flex flex-wrap">
                    {postData.likes.map((like) => (
                      <div
                        className="btn btn-outline-primary me-4 rounded cursor-default"
                        key={like.like_id}
                      >
                        {like.user.name}
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="mb-6" />
                <div>
                  <div className="d-flex">
                    <div style={{ width: "100%" }}>
                      <h3 className="text-xl font-semibold mb-2">
                        {`List of Comments - ${postData.comments.length}`}
                      </h3>
                    </div>
                    <div style={{ width: "100%" }}>
                      <h3 className="text-xl text-right font-semibold mb-2">
                        {`Last Comment Activity : ${postData.comments[postData.comments.length - 1].comment_time}`}
                      </h3>
                    </div>
                  </div>
                  {postData.comments.map((comment) => (
                    <div
                      key={comment.comment_id}
                      className="mb-4 p-4 border border-primary rounded-lg"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">
                          {comment.user.name}
                        </span>
                        <button
                          onClick={() =>
                            handleDeleteComment(comment.comment_id)
                          }
                          className="text-red-500"
                        >
                          Delete
                        </button>
                      </div>
                      <p>{comment.comment_text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageDetailCommunity;
