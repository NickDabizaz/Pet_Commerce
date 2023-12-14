import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ManageDetailCommunity = () => {
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

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Post Details</h1>

      {loading ? (
        <div className="flex justify-center items-center h-16">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-2">{postData.title}</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Likes</h3>
            {postData.likes.map((like) => (
              <div key={like.like_id} className="mb-2">
                {like.user.name} liked this post
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Comments</h3>
            {postData.comments.map((comment) => (
              <div
                key={comment.comment_id}
                className="mb-4 p-4 border rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{comment.user.name}</span>
                  <button
                    onClick={() => handleDeleteComment(comment.comment_id)}
                    className="text-red-500 hover:underline"
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
  );
};

export default ManageDetailCommunity;
