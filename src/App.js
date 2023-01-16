import React from 'react';
import { useState, useEffect } from 'react';
import TitlesService from './TitlesService';
import sampleTitles from './sampleTitles';
import EditTitleList from './components/EditTitleList';
import CreateTitle from './components/CreateTitle';

const App = () => {
    const [titles, setTitles] = useState(sampleTitles);

    useEffect(() => {
        const titleNode = document.getElementById('title-el');
        const startBtn = document.getElementById('start');
        const stopBtn = document.getElementById('stop');
        const resetBtn = document.getElementById('reset');

        const svc = new TitlesService(titleNode, titles);

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

        startBtn.addEventListener('click', startHandler);
        stopBtn.addEventListener('click', stopHandler);
        resetBtn.addEventListener('click', resetHandler);

        return () => {
            startBtn.removeEventListener('click', startHandler);
            stopBtn.removeEventListener('click', stopHandler);
            resetBtn.removeEventListener('click', resetHandler);
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
            <div id="title-el" style={{ height: '30px' }}></div>
            <button id="start">START</button>
            <button id="stop">STOP</button>
            <button id="reset">RESET</button>
        </div>
    );
};

export default App;
