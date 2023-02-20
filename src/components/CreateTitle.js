import React, { useState, useContext } from 'react';
import TitlesContext from '../context/titles';
import {
    START_PH,
    END_PH,
    TEXT_PH,
} from '../constants';

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
                <input
                    onChange={handleStartChange}
                    value={start}
                    placeholder={START_PH}
                />
                <input
                    onChange={handleEndChange}
                    value={end}
                    placeholder={END_PH}
                />
                <input
                    onChange={handleTextChange}
                    value={text}
                    placeholder={TEXT_PH}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateTitle;
