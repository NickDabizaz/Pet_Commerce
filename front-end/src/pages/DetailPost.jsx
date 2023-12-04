import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

const DetailPost = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [cookies] = useCookies(["user_id"]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSendChat = async () => {
    console.log(commentText);
    try {
      const response = await axios.post("http://localhost:3000/comments", {
        comment_text: commentText,
        user_id: cookies.user_id,
        post_id: post_id,
      });

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
          `http://localhost:3000/post/${post_id}`
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

  // const handleSendChat = (data) => {
  //   const commentData = {
  //     comment_text: data.comment,
  //     user_id: cookies.user_id,
  //     post_id: post_id,
  //   };
  //   axios
  //     .post("http://localhost:3000/comments", commentData)
  //     .then((response) => {
  //       console.log(response.data);
  //       reset();
  //       navigate(0);
  //     })
  //     .catch((error) => console.log(error));
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  // return (
  //   <Container>
  //     <Row>
  //       <Col>
  //         <Card>
  //           <Card.Body className="text-center">
  //             {/* <Card.Title>{post.title}</Card.Title> */}
  //             <Card.Text>
  //               <img
  //                 src="http://via.placeholder.com/640x360"
  //                 alt="post_image"
  //                 className="m-auto"
  //               />
  //             </Card.Text>
  //           </Card.Body>
  //         </Card>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <Card>
  //           <Card.Header>Comments</Card.Header>
  //           <ListGroup variant="flush">
  //             {console.log([post.comment])}
  //             {post.comment &&
  //               post.comment.map((comment) => (
  //                 <ListGroup.Item
  //                   key={comment.comment_id}
  //                   style={{ display: "flex" }}
  //                 >
  //                   <div style={{ flex: 1 }}>
  //                     <img
  //                       src="https://icon-library.com/images/guest-icon-png/guest-icon-png-29.jpg"
  //                       style={{
  //                         height: "4rem",
  //                         border: "1px solid black",
  //                         borderRadius: "50%",
  //                       }}
  //                     />
  //                   </div>
  //                   <div style={{ flex: 10 }}>
  //                     <b>{comment.user}</b>
  //                     <p>{comment.comment_text}</p>
  //                   </div>
  //                 </ListGroup.Item>
  //               ))}
  //           </ListGroup>
  //         </Card>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <Form onSubmit={handleSubmit(onSubmit)}>
  //           <Form.Group controlId="comment">
  //             <Form.Label>Leave a comment</Form.Label>
  //             <Form.Control
  //               type="text"
  //               placeholder="Enter your comment"
  //               {...register("comment")}
  //             />
  //           </Form.Group>
  //           <Button variant="outline-primary" type="submit">
  //             Submit
  //           </Button>
  //         </Form>
  //       </Col>
  //     </Row>
  //   </Container>
  // );

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
                {/* Ini bagian nama - waktu post */}
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
                </div>

                {/* Ini bagian image dari post */}
                <div className="bg-info">
                  <img
                    className="bg-white bg-opacity-75"
                    src={`http://localhost:3000/post/pic/${post_id}`}
                    alt="post-image"
                    style={{
                      height: "30rem",
                      width: "100%",
                      maxHeight: "34rem",
                      maxWidth: "40rem",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />
                </div>

                {/* Ini bagian like, share */}

                <div
                  style={{
                    display: "flex",
                    height: "3rem",
                    alignItems: "center",
                  }}
                >
                  <div>💖</div>
                  <div>💬</div>
                  <div>🔗</div>
                </div>

                <div className="ms-8" style={{ height: "4rem" }}>
                  {post.title}
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
                  height: "35rem",
                  overflow: "auto",
                }}
                className="custom-scrollbar"
              >
                {console.log(post)}
                {post.comment.map((comment, index) => (
                  <div key={index} className="border border-dark rounded-3 m-4">
                    <div style={{ fontWeight: "bold" }}>{comment.user}</div>
                    <div style={{ wordBreak: "break-all" }}>
                      {comment.comment_text}
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              {/* Ini bagian input comment */}
              <div className="h-20 mx-4">
                {/* <div style={{ overflow: "hidden" }}> */}

                {/* <div
                  className="border border-dark rounded-3 bg-white w-full"
                  style={{ marginTop: "1rem" }}
                >
                  <div style={{ height: "3rem" }}>
                    <input
                      className="w-full me-4"
                      type="text"
                      style={{
                        marginTop: "0.5rem",
                        marginLeft: "0.5rem",
                        height: "2rem",
                      }}
                      value={commentText}
                      onChange={handleCommentTextChange}
                      placeholder="Write a comment..."
                    />
                  </div>
                </div> */}

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

// function Detail() {
//   let post_id = useParams();
//   // console.log(post_id.post_id);

//   const [response, setResponse] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (post_id.post_id) {
//       fetchPost();
//       console.log({ response });
//     }
//   }, [post_id.post_id]);

//   const fetchPost = () => {
//     axios
//       .get(http://localhost:3000/post/${post_id.post_id})
//       .then((res) => {
//         setResponse(res.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Tampilkan pesan loading jika masih dalam proses fetch data
//   }

//   console.log("response:", response);

//   const post = response;

//   return (
//     <>
//       <div>
//         <div
//           className="row text-center m-auto"
//           style={{ zIndex: -1, width: "80rem" }}
//         >
//           <NavLink to={"/community"}>⬅</NavLink>
//           {/* <div className="col-3"></div> */}
//           <div
//             key={post.post_id}
//             className="col-6 p-0"
//             style={{
//               height: "34rem",
//             }}
//           >
//             {/* <div className="m-4 me-0 mt-0 bg-info border border-dark rounded-4"> */}
//             <div
//               className="m-4 me-0 mt-0 bg-info bg-opacity-25"
//               style={{
//                 width: "38.5rem",
//                 position: "absolute",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//               }}
//             >
//               <div style={{ display: "flex" }}>
//                 <div className="text-start ms-4 mt-3">
//                   <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETyc4RCQOt5YVtW2mbRuR3wdxFVDD8R6BA&usqp=CAU"
//                     alt="pp-icon"
//                     style={{
//                       width: "2rem",
//                       border: "1px solid black",
//                       borderRadius: "50%",
//                     }}
//                   />{" "}
//                   {/* {post.nama_pengepost} */}
//                 </div>{" "}
//                 <span style={{ fontSize: "1rem" }} className="mt-3 ms-2 ">
//                   Jane Doe
//                 </span>{" "}
//                 <div
//                   className=" text-black-50 mt-4 ms-2"
//                   style={{ fontSize: "0.6rem" }}
//                 >
//                   1h ago
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETyc4RCQOt5YVtW2mbRuR3wdxFVDD8R6BA&usqp=CAU"
//                   style={{
//                     height: "100%",
//                     maxHeight: "20rem",
//                     display: "block", // Center horizontally
//                     margin: "0 auto", // Center horizontally
//                     textAlign: "center", // Center horizontally (alternative)
//                     lineHeight: "2rem", // Center vertically
//                   }}
//                 />
//               </div>
//               <div
//                 className="row text-start mx-4 mb-4"
//                 style={{ fontSize: "1rem" }}
//               >
//                 <p className="col-4">Likes: {post.jumlah_like}</p>
//                 <h3 className="col-4"></h3>
//                 <p className="col-4">Shares: {post.jumlah_share}</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div
//               className="text-black m-4 ms-0 text-start row bg-info bg-opacity-25"
//               style={{
//                 maxHeight: "34rem",
//                 overflowY: "auto",
//                 width: "38.5rem",
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translateY(-52%)",
//                 height: "34rem",
//               }}
//             >
//               <div className="row-12">
//                 <div
//                   className="text-left m-4 custom-scrollbar"
//                   style={{
//                     maxHeight: "25rem",
//                     overflow: "auto",
//                     fontSize: "0.8rem",
//                     WebkitBoxOrient: "vertical",
//                     display: "-webkit-box",
//                   }}
//                 >
//                   {post.Comments.map((comment, index) => (
//                     <span
//                       key={index}
//                       // className="mb-2 text-white"
//                       className="mb-3"
//                       style={{
//                         display: "flex",
//                         wordWrap: "break-word",
//                       }}
//                     >
//                       <div className="m-2">
//                         <img
//                           src={dogo}
//                           style={{
//                             width: "2rem",
//                             minWidth: "2rem",
//                             height: "2rem",
//                             maxHeight: "2rem",
//                             objectFit: "cover",
//                             objectPosition: "50% 0",
//                             borderRadius: "50%",
//                           }}
//                         />
//                       </div>
//                       <div style={{ width: "85%", maxWidth: "85%" }}>
//                         <div className="border border-dark rounded">
//                           <div className="m-2">
//                             <b>{comment.User.name}</b>
//                             <br />
//                             {/* <span className="text-black-50"> */}
//                             <span
//                               className="text-justify"
//                               style={{ wordBreak: "break-all" }}
//                             >
//                               {comment.comment_text}
//                             </span>
//                             {/* {comment.waktu_komentar} */}
//                             <br />
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col">Like</div>
//                           <div className="col">Reply</div>
//                           <div className="col-8"></div>
//                         </div>
//                       </div>
//                     </span>
//                   ))}
//                 </div>
//                 <hr className="m-0" />
//                 <div
//                   className="mx-4"
//                   style={{ height: "5rem", backgroundColor: "" }}
//                 >
//                   <input
//                     className="my-4"
//                     type="text"
//                     placeholder="Write a comment..."
//                     style={{ width: "100%" }}
//                   ></input>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function detail2(idPost, response, setCurPage) {
//   let post = response.filter((post) => post.post_id == idPost);
//   console.log(post);

//   return (
//     <>
//       <div>
//         <div
//           className="row text-center m-auto"
//           style={{ zIndex: -1, width: "80rem" }}
//         >
//           <NavLink to="/community">⬅</NavLink>
//           <div className="col-3"></div>
//           <div
//             key={post.post_id}
//             className="col-6 bg-info p-0 border border-dark rounded-4 custom-scrollbar"
//             style={{
//               maxHeight: "38rem",
//               overflowY: "auto",
//             }}
//           >
//             <div className="">
//               <div style={{ display: "flex" }}>
//                 <div className="text-start m-2 ms-4">{post.nama_pengepost}</div>
//                 <div
//                   className="mt-3 text-black-50"
//                   style={{ fontSize: "0.6rem" }}
//                 >
//                   1h ago
//                 </div>
//               </div>
//               <div className=" ">
//                 <img src={dogo} />
//               </div>
//               <div
//                 className="row text-start mx-4 mb-4"
//                 style={{ fontSize: "1rem" }}
//               >
//                 <p className="col-4">Likes: {post.jumlah_like}</p>
//                 <h3 className="col-4"></h3>
//                 <p className="col-4">Shares: {post.jumlah_share}</p>
//               </div>
//             </div>
//             <hr style={{ height: "0.1rem", backgroundColor: "black" }} />
//             <div className="m-4 text-start row">
//               <div className="row-12">
//                 <ul className="text-left m-4">
//                   {post.comment.map((comment, index) => (
//                     <span
//                       key={index}
//                       className="mb-2 text-white"
//                       style={{
//                         wordWrap: "break-word",
//                         display: "-webkit-box",
//                         WebkitBoxOrient: "vertical",
//                         overflow: "hidden",
//                       }}
//                     >
//                       <div style={{ display: "flex" }}>
//                         {comment.nama_pengomen}
//                         {": "}
//                         <span className="text-black-50">
//                           {comment.komentar}
//                         </span>
//                         {/* {comment.waktu_komentar} */}
//                         <br />
//                       </div>
//                     </span>
//                   ))}
//                 </ul>
//                 <br />
//               </div>
//             </div>
//           </div>
//           <div className="col-3"></div>
//         </div>
//       </div>
//     </>
//   );
// }
