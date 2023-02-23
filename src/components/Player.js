import React, { useContext, useEffect, useState, useRef } from 'react';
import TitlesContext from '../context/titles';
import TitlesService from '../TitlesService';
import VideoPlayer from './VideoPlayer';
import Viewer from './Viewer';

const Player = () => {

    const [startEnabled, setStartEnabled] = useState(true);
    const [stopEnabled, setStopEnabled] = useState(false);
    const [resetEnabled, setResetEnabled] = useState(false);

    const viewRef = useRef();
    const startRef = useRef();
    const stopRef = useRef();
    const resetRef = useRef();

    const { titles } = useContext(TitlesContext);

    useEffect(() => {

        const onStart = () => {
            setStartEnabled(false);
            setStopEnabled(true);
            setResetEnabled(false);
        };

        const onStop = () => {
            setStartEnabled(true);
            setStopEnabled(false);
            setResetEnabled(true);
        };

        const onReset = () => {
            setStartEnabled(true);
            setStopEnabled(false);
            setResetEnabled(false);
        };

        const svc = new TitlesService(viewRef.current, titles, onReset);

        const startHandler = () => {
            console.log('Starting TitleService', svc);
            svc.start();
            onStart();
        };

        const stopHandler = () => {
            console.log('Stopping TitlesService');
            svc.stop();
            onStop();
        };

        const resetHandler = () => {
            console.log('Resetting TitlesService');
            svc.reset();
            onReset();
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
            <VideoPlayer />
            <Viewer ref={viewRef} />
            <button ref={startRef} disabled={!startEnabled}>START</button>
            <button ref={stopRef} disabled={!stopEnabled}>STOP</button>
            <button ref={resetRef} disabled={!resetEnabled}>RESET</button>
        </>
    );
};

export default Player;