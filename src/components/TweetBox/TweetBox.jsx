import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'


const TweetBox = () => {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://ionicframework.com/docs/img/demos/avatar.svg'></Avatar>
                    <input placeholder="What's happening?" type='text'></input>
                </div>
                <input
                    className='tweetBox__imageInput'
                    placeholder='Optional: Enter image URL'></input>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox