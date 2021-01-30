import React, { useState } from 'react';

import './TweetBox.css';

import { db } from '../../../firebase';

import { Avatar, Button, Input } from '@material-ui/core';

export const TweetBox = () => {

    const [ tweetMessage, setTweetMessage ] = useState("");
    const [ tweetImage, setTweetImage ] = useState("");

    const sendTweet = ( e ) => {
        e.preventDefault();

        db.collection( 'posts' ).add( {
            displayName: 'Juan Villa',
            username: 'juanevillam',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1350870082679939076/FQzT892H.jpg"
        } );

        setTweetMessage("");
        setTweetImage("");
    };
    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox--input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1350870082679939076/FQzT892H.jpg" />
                    <Input onChange={ ( e ) => setTweetMessage( e.target.value ) } value={ tweetMessage } className="tweetBox--input" placeholder="What's happening?" type="text"></Input>
                </div>
                <Input onChange={ ( e ) => setTweetImage( e.target.value ) } value={ tweetImage } className="tweetBox--imageInput" placeholder="Enter image URL" type="text"></Input>
                <Button onClick={ sendTweet } className="tweetBox--tweetButton" type="submit">Tweet</Button>
            </form> 
        </div>
    );

};
