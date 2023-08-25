import React from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox'
import Post from '../Post/Post'

const Feed = () => {
  return (
    <div clasname='feed'>
      {/* Header */}
      <div className='feed__header' >
        <h3>Home</h3>
      </div>
      {/* TweetBox */}
      <TweetBox/>
      {/* Post */}
      <Post/> 
      <Post/>       
      <Post/> 
      <Post/> 
    </div>
  )
}

export default Feed