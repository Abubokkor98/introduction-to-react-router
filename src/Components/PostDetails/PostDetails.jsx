import React from "react";
import { useLoaderData } from "react-router-dom";

export default function PostDetails() {
  const post = useLoaderData();
  return (
    <div className="border border-red-500 rounded-md m-5 p-2">
      <p>PostDetails: {post.body}</p>
      <p>post id {post.id}</p>
    </div>
  );
}
