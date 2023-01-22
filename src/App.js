import React from 'react';
import EditTitleList from './components/EditTitleList';
import CreateTitle from './components/CreateTitle';
import Player from './components/Player';

const App = () => {
    return (
        <div>
            <h1>Web Titles POC</h1>

            <h2>Editor</h2>
            <EditTitleList />
            <CreateTitle />
            <Player />
        </div>
    );
};

export default App;
