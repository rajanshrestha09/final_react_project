import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import {Container} from "./index";

function PostCard({ $id, title, featuredImage }) {
  console.log(featuredImage);
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="h-72 w-64 mb-2 rounded-md" />
          <h1>{title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
