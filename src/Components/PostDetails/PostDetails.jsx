import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function PostDetails() {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () =>{
    navigate(-1);
  }
  return (
    <div className="border border-red-500 rounded-md m-5 p-2">
      <p>PostDetails: {post.body}</p>
      <p>post id {post.id}</p>
      <button onClick={handleGoBack} className="btn">go back</button>
    </div>
  );
}
