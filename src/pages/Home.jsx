import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

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
    <div className="h-screen w-full bg-slate-400">
      {" "}
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="ms-2 mt-2">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
