import React, { useState, useEffect } from "react";
import axios from "axios";
import dogo from "../assets/dogo.jpg";
import { MainLayout } from "../Components";
import "../index.css";
import { NavLink, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

function Community() {
  const [cookie, setCookie] = useCookies("user_id");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/post/")
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log(response);

  return (
    <>
      <MainLayout />
      <div>
        <div
          className="row text-center m-auto"
          style={{ zIndex: -1, width: "80rem" }}
        >
          {response.map((post) => (
            <div key={post.post_id} className="col-6">
              <NavLink to={`/post/${post.post_id}`}>
                <div className="m-4 bg-info border border-dark rounded-4">
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
                  <div className=" ">
                    <img src={dogo} width={"100%"} />
                  </div>
                  <div
                    className="row text-start mx-4"
                    style={{ fontSize: "1rem" }}
                  >
                    <p className="col-4">Likes: {post.jumlah_like}</p>
                    <h3 className="col-4"></h3>
                    <p className="col-4">
                      {/* <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 30 30"
                    style={{ display: "inherit" }}
                  >
                    <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
                  </svg>
                  {post.jumlah_share}
                </span> */}
                      Shares: {post.jumlah_share}
                    </p>
                  </div>
                  <div className="text-black-50 m-4 text-start row">
                    <div className="row-12">
                      {post.comment.length > 0 && (
                        <span
                          className="text-black-50"
                          style={{
                            wordWrap: "break-word",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                          }}
                        >
                          <span className="text-white">
                            {
                              post.comment[post.comment.length - 1]
                                .nama_pengomen
                            }
                            {": "}
                          </span>
                          {post.comment[post.comment.length - 1].komentar}
                        </span>
                      )}
                      <br />
                      <div className="mt-2">
                        {post.comment.length > 0 ? (
                          "View all " + post.comment.length + " comments"
                        ) : (
                          <br />
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <ul className="text-left m-4">
              Comments:
              {post.comment.map((comment, index) => (
                <li key={index} className="mb-2">
                  <p className=" ">{comment.nama_pengomen}</p>
                  <p className=" ">{comment.komentar}</p>
                  <p className=" ">{comment.waktu_komentar}</p>
                </li>
              ))}
            </ul> */}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Detail() {
  let post_id = useParams();
  // console.log(post_id.post_id);

  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post_id.post_id) {
      fetchPost();
      console.log({ response });
    }
  }, [post_id.post_id]);

  const fetchPost = () => {
    axios
      .get(`http://localhost:3000/post/${post_id.post_id}`)
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>; // Tampilkan pesan loading jika masih dalam proses fetch data
  }

  console.log("response:", response);

  const post = response;

  return (
    <>
      <div>
        <div
          className="row text-center m-auto"
          style={{ zIndex: -1, width: "80rem" }}
        >
          <NavLink to={"/community"}>⬅️</NavLink>
          {/* <div className="col-3"></div> */}
          <div
            key={post.post_id}
            className="col-6 p-0"
            style={{
              height: "34rem",
            }}
          >
            {/* <div className="m-4 me-0 mt-0 bg-info border border-dark rounded-4"> */}
            <div
              className="m-4 me-0 mt-0 bg-info bg-opacity-25"
              style={{
                width: "38.5rem",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <div style={{ display: "flex" }}>
                <div className="text-start ms-4 mt-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETyc4RCQOt5YVtW2mbRuR3wdxFVDD8R6BA&usqp=CAU"
                    alt="pp-icon"
                    style={{
                      width: "2rem",
                      border: "1px solid black",
                      borderRadius: "50%",
                    }}
                  />{" "}
                  {/* {post.nama_pengepost} */}
                </div>{" "}
                <span style={{ fontSize: "1rem" }} className="mt-3 ms-2 ">
                  Jane Doe
                </span>{" "}
                <div
                  className=" text-black-50 mt-4 ms-2"
                  style={{ fontSize: "0.6rem" }}
                >
                  1h ago
                </div>
              </div>
              <div className="mt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETyc4RCQOt5YVtW2mbRuR3wdxFVDD8R6BA&usqp=CAU"
                  style={{
                    height: "100%",
                    maxHeight: "20rem",
                    display: "block", // Center horizontally
                    margin: "0 auto", // Center horizontally
                    textAlign: "center", // Center horizontally (alternative)
                    lineHeight: "2rem", // Center vertically
                  }}
                />
              </div>
              <div
                className="row text-start mx-4 mb-4"
                style={{ fontSize: "1rem" }}
              >
                <p className="col-4">Likes: {post.jumlah_like}</p>
                <h3 className="col-4"></h3>
                <p className="col-4">Shares: {post.jumlah_share}</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="text-black m-4 ms-0 text-start row bg-info bg-opacity-25"
              style={{
                maxHeight: "34rem",
                overflowY: "auto",
                width: "38.5rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateY(-52%)",
                height: "34rem",
              }}
            >
              <div className="row-12">
                <div
                  className="text-left m-4 custom-scrollbar"
                  style={{
                    maxHeight: "25rem",
                    overflow: "auto",
                    fontSize: "0.8rem",
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                  }}
                >
                  {post.Comments.map((comment, index) => (
                    <span
                      key={index}
                      // className="mb-2 text-white"
                      className="mb-3"
                      style={{
                        display: "flex",
                        wordWrap: "break-word",
                      }}
                    >
                      <div className="m-2">
                        <img
                          src={dogo}
                          style={{
                            width: "2rem",
                            minWidth: "2rem",
                            height: "2rem",
                            maxHeight: "2rem",
                            objectFit: "cover",
                            objectPosition: "50% 0",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div style={{ width: "85%", maxWidth: "85%" }}>
                        <div className="border border-dark rounded">
                          <div className="m-2">
                            <b>{comment.User.name}</b>
                            <br />
                            {/* <span className="text-black-50"> */}
                            <span
                              className="text-justify"
                              style={{ wordBreak: "break-all" }}
                            >
                              {comment.comment_text}
                            </span>
                            {/* {comment.waktu_komentar} */}
                            <br />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">Like</div>
                          <div className="col">Reply</div>
                          <div className="col-8"></div>
                        </div>
                      </div>
                    </span>
                  ))}
                </div>
                <hr className="m-0" />
                <div
                  className="mx-4"
                  style={{ height: "5rem", backgroundColor: "" }}
                >
                  <input
                    className="my-4"
                    type="text"
                    placeholder="Write a comment..."
                    style={{ width: "100%" }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function detail2(idPost, response, setCurPage) {
  let post = response.filter((post) => post.post_id == idPost);
  console.log(post);

  return (
    <>
      <div>
        <div
          className="row text-center m-auto"
          style={{ zIndex: -1, width: "80rem" }}
        >
          <NavLink to="/community">⬅️</NavLink>
          <div className="col-3"></div>
          <div
            key={post.post_id}
            className="col-6 bg-info p-0 border border-dark rounded-4 custom-scrollbar"
            style={{
              maxHeight: "38rem",
              overflowY: "auto",
            }}
          >
            <div className="">
              <div style={{ display: "flex" }}>
                <div className="text-start m-2 ms-4">{post.nama_pengepost}</div>
                <div
                  className="mt-3 text-black-50"
                  style={{ fontSize: "0.6rem" }}
                >
                  1h ago
                </div>
              </div>
              <div className=" ">
                <img src={dogo} />
              </div>
              <div
                className="row text-start mx-4 mb-4"
                style={{ fontSize: "1rem" }}
              >
                <p className="col-4">Likes: {post.jumlah_like}</p>
                <h3 className="col-4"></h3>
                <p className="col-4">Shares: {post.jumlah_share}</p>
              </div>
            </div>
            <hr style={{ height: "0.1rem", backgroundColor: "black" }} />
            <div className="m-4 text-start row">
              <div className="row-12">
                <ul className="text-left m-4">
                  {post.comment.map((comment, index) => (
                    <span
                      key={index}
                      className="mb-2 text-white"
                      style={{
                        wordWrap: "break-word",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        {comment.nama_pengomen}
                        {": "}
                        <span className="text-black-50">
                          {comment.komentar}
                        </span>
                        {/* {comment.waktu_komentar} */}
                        <br />
                      </div>
                    </span>
                  ))}
                </ul>
                <br />
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}

export { Community, Detail };
