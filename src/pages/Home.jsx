import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="bg-slate-400 w-screen h-screen text-center flex flex-col items-center justify-center">
        <h1>Login to read posts</h1>
      </div>
    );
  }
  return (
    <div>
     {posts.map((post)=>(
      <div key={post}>
        <PostCard {...post}/>
      </div>
     ))}
    </div>
  );
}

export default Home;
