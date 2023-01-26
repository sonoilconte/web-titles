import React, { useContext, useEffect, useState, useRef } from 'react';
import TitlesContext from '../context/titles';
import TitlesService from '../TitlesService';
import Viewer from './Viewer';

const Player = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const viewRef = useRef();
    const startRef = useRef();
    const stopRef = useRef();
    const resetRef = useRef();

    const { titles } = useContext(TitlesContext);

    useEffect(() => {

        const onDone = () => setIsPlaying(false);
        const svc = new TitlesService(viewRef.current, titles, onDone);

        const startHandler = () => {
            console.log('Starting TitleService', svc);
            svc.start();
            setIsPlaying(true);
        };

        const stopHandler = () => {
            console.log('Stopping TitlesService');
            svc.stop();
        };

        const resetHandler = () => {
            console.log('Resetting TitlesService');
            svc.reset();
        };

        startRef.current.addEventListener('click', startHandler);
        stopRef.current.addEventListener('click', stopHandler);
        resetRef.current.addEventListener('click', resetHandler);

        return () => {
            startRef.current.removeEventListener('click', startHandler);
            stopRef.current.removeEventListener('click', stopHandler);
            resetRef.current.removeEventListener('click', resetHandler);
        };
    }, [titles]);

    return (
        <>
            <Viewer ref={viewRef} />
            <button ref={startRef} disabled={isPlaying}>START</button>
            <button ref={stopRef} disabled={!isPlaying}>STOP</button>
            <button ref={resetRef} disabled={isPlaying}>RESET</button>
        </>
    );
};

export default Player;