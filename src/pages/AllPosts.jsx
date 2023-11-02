import React, { useEffect, useState } from "react";
import { PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="m-2">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
