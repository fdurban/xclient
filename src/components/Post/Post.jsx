import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import PublishIcon from '@mui/icons-material/Publish'


const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className='post'>
        <div className="post__avatar">
        <Avatar src='https://ionicframework.com/docs/img/demos/avatar.svg'></Avatar>
        </div>
      <div className="post__body">
        <div className="post__header">
            <div className="post__headerText">
                <h3>
                    Polla Frita 
                    <span className="post__headerSpecial">
                        <VerifiedIcon className="post__badge"/>
                        @username
                    </span>
                </h3>
            </div>
            <div className="post__headerDescription">
                <p>I challenge you to build a Twitter Clone with React!!</p>
            </div>
        </div>
        <img src="https://media.giphy.com/media/wllnm5sGAW3cKmvvck/giphy-downsized-large.gif" alt="" className="" />
        <div className="post__footer">

            <ChatBubbleIcon fontSize="small" />
            <RepeatOutlinedIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />

        </div>
      </div>
    </div>
  )
}

export default Post