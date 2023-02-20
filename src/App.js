import React from 'react';
import TitleList from './components/TitleList';
import CreateTitle from './components/CreateTitle';
import Player from './components/Player';

const App = () => (
    <div>
        <h1>Web Titles</h1>
        <h2>Editor</h2>
        <TitleList />
        <CreateTitle />
        <Player />
    </div>
);

export default App;
