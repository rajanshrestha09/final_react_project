import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import {Container} from "./index";

function PostCard({ $id, title, featureImage }) {
  return (
    <Container>
      <Link to={`/post/${$id}`}>
        <div>
          <img src={appwriteService.getFilePreview(featureImage)} alt={title} />
        </div>
      </Link>
    </Container>
  );
}

export default PostCard;
