import React from 'react';

import './Widgets.css';

import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

export const Widgets = () => {
    
    return (
        <div className="widgets">
            <div className="widgets--input">
                <SearchIcon className="widgets--searchIcon" />
                <Input className="widgets--input" placeholder="Search Twitter" type="text"></Input>
            </div>
            <div className="widgets--widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1354198389706121219"}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={ { height: 400 } }/>
                <TwitterShareButton url={ "https://github.com/juanevillam" } options={ { text: ".@juanevillam is a Great Web Developer.", via:"elonmusk" } } />
            </div>
        </div>
    );

};
