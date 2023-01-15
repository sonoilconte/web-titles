import React from 'react';
import TitlesService from './TitlesService';
import sampleTitles from './sampleTitles';

const App = () => {
    const titleNode = document.getElementById('title-el');
    const startBtn = document.getElementById('start');

    startBtn.addEventListener('click', () => {
        const svc = new TitlesService(titleNode, sampleTitles);
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

    return <h1>Welcome to the new React application!</h1>;
};

export default App;
