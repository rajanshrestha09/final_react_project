import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId == userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };
  return post ? (
    <div>
      <img
        src={appwriteService.getFilePreview(post.featuredImage)}
        alt={post.title}
        className=""
      />
      {isAuthor && (
        <div>
          <Link>
            <Button>Edit</Button>
          </Link>
          <Button>Delete</Button>
        </div>
      )}
      <div>
        <h1>{post.title}</h1>
        <div>
            {parse(post.content)}
        </div>
      </div>
    

    </div>
  ) : null;
}
