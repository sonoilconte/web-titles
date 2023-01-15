import React from 'react';
import TitlesService from './TitlesService';
import sampleTitles from './sampleTitles';

const App = () => {
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

    return <h1>Welcome to the new React application!</h1>;
};

export default App;
