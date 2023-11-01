import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'


function PostCard({$id, title,featureImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div>
            <img src={appwriteService.getFilePreview(featureImage)} alt={title} />
        </div>
    </Link>
  )
}

export default PostCard