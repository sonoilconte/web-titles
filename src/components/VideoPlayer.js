import React from 'react';
import YouTube from 'react-youtube';
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        'playsinline': 1
    },
};

function VideoPlayer({
    startHandler,
    stopHandler,
    resetHandler,
}) {

    const onReady = (event) => {
        console.log('player ready', event);
    };

    const onPlay = (event) => {
        console.log('from vid player', new Date().getTime());
        console.log('playing', event);
        startHandler();
    };

    const onPause = (event) => {
        console.log('pausing', event);
        stopHandler();
    };

    const onEnd = (event) => {
        console.log('end event', event);
        resetHandler();
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