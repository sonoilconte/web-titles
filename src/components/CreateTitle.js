import React, { useState, useContext } from 'react';
import TitlesContext from '../context/titles';

function CreateTitle() {
    const { createTitle } = useContext(TitlesContext);

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit event');
        createTitle({
            id: Math.floor(Math.random() * 10000),
            start,
            end,
            text,
        });
        setStart('');
        setEnd('');
        setText('');
    };

    const handleStartChange = (event) => {
        const startInt = parseInt(event.target.value) || '';
        setStart(startInt);
    };

    const handleEndChange = (event) => {
        const endInt = parseInt(event.target.value) || '';
        setEnd(endInt);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <br /> <br />
            <form onSubmit={handleSubmit}>
                <input placeholder="Start" onChange={handleStartChange} value={start} />
                <input placeholder="End" onChange={handleEndChange} value={end} />
                <input placeholder="Text to display" onChange={handleTextChange} value={text} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateTitle;
