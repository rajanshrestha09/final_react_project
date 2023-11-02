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

  // console.log(post.featuredImage);
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
    <div className=" bg-slate-400 w-screen h-screen">
      <div className="flex flex-col flex-wrap p-2">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="h-72 w-64 mb-2 rounded-md"
        />
        {isAuthor && (
          <div className="mt-2ms-4">
            <Link>
              <Button>Edit</Button>
            </Link>
            <Button onClick={deletePost}>Delete</Button>
          </div>
        )}
        <div className="ms-4">
          <h1>Title: {post.title}</h1>
          <p>Message: {parse(post.content)}</p>
        </div>
      </div>
    </div>
  ) : null;
}
