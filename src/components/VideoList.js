import React from 'react'
import VideoItem from './videoItems';
import './VideoItem.css'

const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect ={onVideoSelect} video = {video} />;
    });

    return <div className="video-list ui relaxed divided list">{renderedList}</div>;

};

export default VideoList;