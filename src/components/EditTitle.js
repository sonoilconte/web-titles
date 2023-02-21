import React, { useContext } from 'react';
import { useState } from 'react';
import TitlesContext from '../context/titles';
import TitleForm from './TitleForm';
import parseTimeString from '../helpers/parseTimeString';

function EditTitle({ title, setCanEdit }) {
    const { handleTitleUpdate } = useContext(TitlesContext);

    const { start, end, text } = title;

    const [newStart, setNewStart] = useState(start);
    const [newEnd, setNewEnd] = useState(end);
    const [newText, setNewText] = useState(text);

    const handleStartChange = (event) => {
        const startTime = parseTimeString(event.target.value);
        setNewStart(startTime);
    };

    const handleEndChange = (event) => {
        const endTime = parseTimeString(event.target.value);
        setNewEnd(endTime);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newTitle = {
            id: title.id,
            start: newStart,
            end: newEnd,
            text: newText,
        };
        handleTitleUpdate(newTitle);
        setCanEdit(false);
    };

    const handleTextChange = (event) => {
        setNewText(event.target.value);
    };

    return (
        <TitleForm
            canEdit={true}
            start={newStart}
            handleStartChange={handleStartChange}
            end={newEnd}
            handleEndChange={handleEndChange}
            text={newText}
            handleTextChange={handleTextChange}
            handleFormSubmit={handleFormSubmit}
        />
    );
}

export default EditTitle;
