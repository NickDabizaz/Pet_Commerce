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
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

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

  const onSubmit = (data) => {
    const commentData = {
      comment_text: data.comment,
      user_id: cookies.user_id,
      post_id: post_id,
    };
    axios
      .post("http://localhost:3000/comments", commentData)
      .then((response) => {
        console.log(response.data);
        reset();
        navigate(0);
      })
      .catch((error) => console.log(error));
  };

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
            <div className="bg-info bg-opacity-25" style={{ height: "100%" }}>
              {/* ini container dari nama-waktu sampai like comment share */}
              <div
                style={{
                  height: "auto",
                  width: "40rem",
                  textAlign: "left",
                  top: "50%",
                  position: "absolute",
                  transform: "translateY(-50%)",
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
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    // src="https://icons.iconarchive.com/icons/simpleicons-team/simple/128/icon-icon.png"
                    // src="https://icon-library.com/images/guest-icon-png/guest-icon-png-29.jpg"
                    // src="http://via.placeholder.com/640x360"
                    alt="post-image"
                    style={{
                      height: "100%",
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
              </div>
            </div>
          </div>

          {/* Ini kotak kanan, ukuran */}
          <div style={{ height: "40rem", width: "40rem" }}>
            <div
              className="bg-info bg-opacity-25"
              style={{ height: "100%", textAlign: "left" }}
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

              {/* Ini bagian input comment */}
              <div style={{ height: "5rem", backgroundColor: "red" }}>
                <div style={{ overflow: "hidden" }}>
                  <div
                    className="border border-dark rounded-3 bg-white"
                    style={{ marginTop: "1rem" }}
                  >
                    <div style={{ height: "3rem" }}>
                      <input
                        type="text"
                        style={{
                          marginTop: "0.5rem",
                          marginLeft: "0.5rem",
                          height: "2rem",
                        }}
                        placeholder="Write a comment..."
                      />
                    </div>
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
