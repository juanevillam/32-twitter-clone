import React, { useEffect, useState } from 'react';

import './Feed.css';
import FlipMove from 'react-flip-move';

import { db } from '../../firebase';

import { TweetBox } from './TweetBox/TweetBox';
import { Post } from './tweets/Post';

export const Feed = () => {

    const [ posts, setPosts ] = useState( [] );

    useEffect( () => {
        db.collection( 'posts' ).onSnapshot( ( snapshot ) => (
            setPosts( snapshot.docs.map( ( doc ) => doc.data() ) )
        ))
    }, [] );

    return (
        <div className="feed">
            <div className="feed--header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            
            <FlipMove>
            { posts.map( post => (
                <Post
                key={ post.text }
                displayName={ post.displayName }
                username={ post.username }
                verified={ post.verified }
                text={ post.text }
                avatar={ post.avatar }
                image={ post.image }
                />
            ) ) }
            </FlipMove>
            
        </div>
    );

};