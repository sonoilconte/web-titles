import React, { useContext } from 'react';
import { useState } from 'react';
import TitlesContext from '../context/titles';
import TitleForm from './TitleForm';

function EditTitle({ title }) {
    const { handleTitleDelete, handleTitleUpdate } = useContext(TitlesContext);

    const { start, end, text } = title;

    const [canEdit, setCanEdit] = useState(false);
    const [newStart, setNewStart] = useState(start);
    const [newEnd, setNewEnd] = useState(end);
    const [newText, setNewText] = useState(text);

    const handleStartChange = (event) => {
        const startInt = parseInt(event.target.value) || '';
        setNewStart(startInt);
    };

    const handleEndChange = (event) => {
        const endInt = parseInt(event.target.value) || '';
        setNewEnd(endInt);
    };

    const handleFormSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        if (event.nativeEvent.submitter.name === 'save') {
            const newTitle = {
                id: title.id,
                start: newStart,
                end: newEnd,
                text: newText,
            };
            handleTitleUpdate(newTitle);
            setCanEdit(false);
        } else if (event.nativeEvent.submitter.name === 'edit') {
            console.log('edit');
            setCanEdit(true);
        } else if (event.nativeEvent.submitter.name === 'delete') {
            handleTitleDelete(title);
        }
    };

    const handleTextChange = (event) => {
        setNewText(event.target.value);
    };

    return (
        <TitleForm
            canEdit={canEdit}
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
