import React,{useEffect, useState} from 'react'
import { PostCard } from '../components'
import appwriteService from "../appwrite/config"

function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    appwriteService.getPosts().then((posts)=>{
      if(posts){
        setPosts(posts.documents)
      }
    })
  },[])
  return (
    posts.map((post)=>{
      <div key={post.$id} className=''>
        <PostCard {...post} />
      </div>
    })
  )
}

export default AllPosts