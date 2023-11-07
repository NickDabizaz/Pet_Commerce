import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Community() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/post/')
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {response.map((post) => (
        <div key={post.post_id} className="max-w-md bg-white shadow-lg rounded-lg m-4 p-6">
          <h2 className="text-xl font-bold mb-2">{post.nama_pengepost}</h2>
          <p className="text-gray-600 mb-2">Posted by: {post.nama_pengepost}</p>
          <p className="text-gray-600 mb-2">Likes: {post.jumlah_like}</p>
          <p className="text-gray-600 mb-2">Shares: {post.jumlah_share}</p>
          <h3 className="font-bold mb-2">Comments:</h3>
          <ul>
            {post.comment.map((comment, index) => (
              <li key={index} className="mb-2">
                <p className="font-bold">{comment.nama_pengomen}</p>
                <p className="text-gray-600">{comment.komentar}</p>
                <p className="text-gray-600">{comment.waktu_komentar}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Community;
