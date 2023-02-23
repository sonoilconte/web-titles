import React from 'react';
import YouTube from 'react-youtube';
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        'playsinline': 1
    },
};

function VideoPlayer() {

    const onReady = (event) => {
        console.log('player ready', event);
    };

    const onPlay = (event) => {
        console.log('playing', event);
    };

    const onPause = (event) => {
        console.log('pausing', event);
    };

    const onEnd = (event) => {
        console.log('end event', event);
    };

    return (
        <YouTube
            videoId='M7lc1UVf-VE'
            opts={opts}
            onReady={onReady}
            onPlay={onPlay}
            onPause={onPause}
            onEnd={onEnd}
        />
    );
}

export default VideoPlayer;