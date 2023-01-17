import React from 'react';
import { useState, useEffect, useRef } from 'react';
import TitlesService from './TitlesService';
import sampleTitles from './sampleTitles';
import EditTitleList from './components/EditTitleList';
import CreateTitle from './components/CreateTitle';

const App = () => {
    const titleRef = useRef();
    const startRef = useRef();
    const stopRef = useRef();
    const resetRef = useRef();

    const [titles, setTitles] = useState(sampleTitles);

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

    const createTitle = (newTitle) => {
        let updatedTitles = [...titles];
        updatedTitles.push(newTitle);
        updatedTitles = updatedTitles.sort((a, b) => a.start - b.start);
        setTitles(updatedTitles);
    };

    const handleTitleUpdate = (newTitle) => {
        console.log('Updating to title', newTitle);
        const updatedTitles = titles.map((title) => {
            if (title.id === newTitle.id) {
                return newTitle;
            }
            return title;
        });
        setTitles(updatedTitles);
    };

    const handleTitleDelete = (titleToDelete) => {
        console.log('Delete it', titleToDelete);
        const updatedTitles = titles.filter((title) => {
            return title.id !== titleToDelete.id;
        });
        setTitles(updatedTitles);
    };

    return (
        <div>
            <h1>Web Titles POC</h1>

            <h2>Editor</h2>
            <EditTitleList titles={titles} handleTitleUpdate={handleTitleUpdate} handleTitleDelete={handleTitleDelete} />
            <CreateTitle createTitle={createTitle} />
            <h2>Viewer</h2>
            <div ref={titleRef} style={{ height: '30px' }}></div>
            <button ref={startRef}>START</button>
            <button ref={stopRef}>STOP</button>
            <button ref={resetRef}>RESET</button>
        </div>
    );
};

export default App;
