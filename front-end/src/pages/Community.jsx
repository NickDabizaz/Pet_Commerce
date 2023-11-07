import React, { useState, useEffect } from "react";
import axios from "axios";
import dogo from "../assets/dogo.jpg";

function Community() {
  const [curPage, setCurPage] = useState("browse");
  const [idPost, setIdPost] = useState(-999);
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
  console.log(response);

  return (
    <div>
      {curPage == "browse" && browse(setCurPage, response, setIdPost)}
      {curPage == "detail" && detail(idPost, response, setCurPage)}
    </div>
  );
}

function browse(setCurPage, response, setIdPost) {
  return (
    <>
      <div>
        <div
          className="row text-center bg-warning m-auto"
          style={{ zIndex: -1, width: "80rem" }}
        >
          {response.map((post) => (
            <div key={post.post_id} className="col-6">
              <div
                className="m-4 bg-info border border-dark rounded-4"
                onClick={() => {
                  setCurPage("detail");
                  setIdPost(post.post_id);
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
                <div className=" ">
                  <img src={dogo} />
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
                          {post.comment[post.comment.length - 1].nama_pengomen}
                          {": "}
                        </span>
                        {post.comment[post.comment.length - 1].komentar}
                      </span>
                    )}
                    <br />
                    <div className="mt-2">
                      View all {post.comment.length} comments
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function detail(idPost, response, setCurPage) {
  let post = response.filter((post) => post.post_id == idPost);
  console.log(post);

  return (
    <>
      <div>
        <div
          className="row text-center m-auto"
          style={{ zIndex: -1, width: "80rem" }}
        >
          <button onClick={() => setCurPage("browse")}>⬅️</button>
          <div className="col-3"></div>
          <div key={post[0].post_id} className="col-6">
            <div className="m-4 bg-info border border-dark rounded-4">
              <div style={{ display: "flex" }}>
                <div className="text-start m-2 ms-4">
                  {post[0].nama_pengepost}
                </div>
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
              <div className="row text-start mx-4" style={{ fontSize: "1rem" }}>
                <p className="col-4">Likes: {post[0].jumlah_like}</p>
                <h3 className="col-4"></h3>
                <p className="col-4">Shares: {post[0].jumlah_share}</p>
              </div>
              <div className="text-black-50 m-4 text-start row">
                <div className="row-12">
                  <ul className="text-left m-4">
                    Comments: <br />
                    {post[0].comment.map((comment, index) => (
                      <span key={index} className="mb-2 text-white">
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
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}

export default Community;
