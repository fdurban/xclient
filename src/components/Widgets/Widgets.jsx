import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
const Widgets = () => {
    return (
        <div className="widgets">
          <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search" type="text" />
          </div>
    
          <div className="widgets__widgetContainer">
            <h2>What's happening</h2>
    
            <TwitterTweetEmbed tweetId={"1695036209972625831"} />
    
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="cleverqazi"
              options={{ height: 400 }}
            />
    
            <TwitterShareButton
              url={"https://facebook.com/cleverprogrammer"}
              options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
            />
          </div>
        </div>
      );
}

export default Widgets