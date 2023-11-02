import React,{useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { PostCard } from '../components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    appwriteService.getPosts().then((posts)=>{
      if(posts){
        setPosts(posts.documents)
      }
    })
  },[])
 
  
  if(posts.length===0){
    return (<h1>Login to read posts</h1>)
    
  }
  return (
    posts.map((post)=>{
      <div key={post.$id} className=''>
        <PostCard {...post} />
      </div>
    })
  )
}

export default Home