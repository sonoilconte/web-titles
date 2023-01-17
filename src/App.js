import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import TitlesContext from './context/titles';
import TitlesService from './TitlesService';
import EditTitleList from './components/EditTitleList';
import CreateTitle from './components/CreateTitle';

const App = () => {
    const titleRef = useRef();
    const startRef = useRef();
    const stopRef = useRef();
    const resetRef = useRef();

    const { titles } = useContext(TitlesContext);

    useEffect(() => {
        const svc = new TitlesService(titleRef.current, titles);

        const startHandler = () => {
            console.log('Starting TitleService', svc);
            svc.start();
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
        <div>
            <h1>Web Titles POC</h1>

            <h2>Editor</h2>
            <EditTitleList />
            <CreateTitle />
            <h2>Viewer</h2>
            <div ref={titleRef} style={{ height: '30px' }}></div>
            <button ref={startRef}>START</button>
            <button ref={stopRef}>STOP</button>
            <button ref={resetRef}>RESET</button>
        </div>
    );
};

export default App;
