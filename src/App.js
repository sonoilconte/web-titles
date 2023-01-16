import React from 'react';
import { useState, useEffect } from 'react';
import TitlesService from './TitlesService';
import sampleTitles from './sampleTitles';
import EditTitleList from './components/EditTitleList';

const App = () => {
    useEffect(() => {
        const titleNode = document.getElementById('title-el');
        const startBtn = document.getElementById('start');
        const stopBtn = document.getElementById('stop');
        const resetBtn = document.getElementById('reset');

        const svc = new TitlesService(titleNode, sampleTitles);

        startBtn.addEventListener('click', () => {
            console.log(svc);
            svc.start();
            // setTimeout(() => {
            //     console.log('NEW ADD!');
            //     svc.add({
            //         start: 6100,
            //         end: 6800,
            //         text: 'Hey I am an inserted title',
            //     });
            // }, 6000);
        });

        stopBtn.addEventListener('click', () => {
            svc.stop();
        });

        resetBtn.addEventListener('click', () => {
            svc.reset();
        });
    }, []);

    const [titles, setTitles] = useState(sampleTitles);

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
            <h2>Viewer</h2>
            <div id="title-el" style={{ height: '30px' }}></div>
            <button id="start">START</button>
            <button id="stop">STOP</button>
            <button id="reset">RESET</button>
        </div>
    );
};

export default App;
