import { useState } from "react";
import { MainLayout } from "../Components";
function AdminPostDashboard() {
//   const [response, setResponse] = useState([
//     {
//       id_post: 1,
//       nama_ngepost: "John Doe",
//       title_post: "Sample Post 1",
//       jumlah_like: 10,
//       jumlah_share: 5,
//       comments: [
//         {
//           nama_yang_komen: "Jane Doe",
//           comment_nya_apa: "Nice post!",
//           tanggalnya_berapa: "2023-11-07",
//         },
//         {
//           nama_yang_komen: "Bob Smith",
//           comment_nya_apa: "Great content!",
//           tanggalnya_berapa: "2023-11-08",
//         },
//       ],
//     },
//     {
//       id_post: 2,
//       nama_ngepost: "Jane Doe",
//       title_post: "Sample Post 2",
//       jumlah_like: 15,
//       jumlah_share: 8,
//       comments: [
//         {
//           nama_yang_komen: "John Doe",
//           comment_nya_apa: "Thanks!",
//           tanggalnya_berapa: "2023-11-09",
//         },
//       ],
//     },
//     {
//       id_post: 3,
//       nama_ngepost: "Bob Smith",
//       title_post: "Sample Post 3",
//       jumlah_like: 8,
//       jumlah_share: 3,
//       comments: [
//         {
//           nama_yang_komen: "Jane Doe",
//           comment_nya_apa: "Well done!",
//           tanggalnya_berapa: "2023-11-10",
//         },
//         {
//           nama_yang_komen: "John Doe",
//           comment_nya_apa: "Keep it up!",
//           tanggalnya_berapa: "2023-11-11",
//         },
//         {
//           nama_yang_komen: "Jane Doe",
//           comment_nya_apa: "I love this!",
//           tanggalnya_berapa: "2023-11-11",
//         },
//       ],
//     },
//   ]);

  const handleDeletePost = (postId) => {
    const updatedResponse = response.filter((post) => post.id_post !== postId);
    setResponse(updatedResponse);
  };

  const handleDeleteComment = (postId, commentIndex) => {
    const updatedResponse = response.map((post) => {
      if (post.id_post === postId) {
        const updatedComments = post.comments.filter(
          (comment, index) => index !== commentIndex
        );
        return {
          ...post,
          comments: updatedComments,
        };
      }
      return post;
    });
    setResponse(updatedResponse);
  };

  return (
    <>
      <MainLayout />
      <div className="flex flex-col items-center">
        {response.map((post) => (
          <div
            key={post.id_post}
            className="max-w-md bg-white shadow-lg rounded-lg m-4 p-6"
          >
            <h2 className="text-xl font-bold mb-2">{post.title_post}</h2>
            <p className="text-gray-600 mb-2">Posted by: {post.nama_ngepost}</p>
            <p className="text-gray-600 mb-2">Likes: {post.jumlah_like}</p>
            <p className="text-gray-600 mb-2">Shares: {post.jumlah_share}</p>
            <h3 className="font-bold mb-2">Comments:</h3>
            <ul>
              {post.comments.map((comment, index) => (
                <li key={index} className="mb-2">
                  <p className="font-bold">{comment.nama_yang_komen}</p>
                  <p className="text-gray-600">{comment.comment_nya_apa}</p>
                  <p className="text-gray-600">{comment.tanggalnya_berapa}</p>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteComment(post.id_post, index)}
                  >
                    Hapus Komentar
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="text-red-500 mt-4"
              onClick={() => handleDeletePost(post.id_post)}
            >
              Hapus Postingan
            </button>
          </div>
        ))}
      </div>
      <h1>Testing</h1>
    </>
  );
}

export default AdminPostDashboard;
