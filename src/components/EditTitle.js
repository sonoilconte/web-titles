import React from 'react';
import { useState } from 'react';

function EditTitle({ title, handleTitleUpdate, handleTitleDelete }) {
    const { start, end, text } = title;

    const [canEdit, setCanEdit] = useState(false);
    const [newStart, setNewStart] = useState(start);
    const [newEnd, setNewEnd] = useState(end);
    const [newText, setNewText] = useState(text);

    const handleStartChange = (event) => {
        const startInt = parseInt(event.target.value);
        setNewStart(startInt);
    };

    const handleEndChange = (event) => {
        const endInt = parseInt(event.target.value);
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
        <div>
            <form onSubmit={handleFormSubmit}>
                <input disabled={!canEdit} onChange={handleStartChange} type="text" value={newStart} />
                <input disabled={!canEdit} onChange={handleEndChange} type="text" value={newEnd} />
                <input disabled={!canEdit} onChange={handleTextChange} type="text" value={newText} />
                {canEdit ? (
                    <>
                        <button name="save">Save</button>
                        <button name="delete">Delete</button>
                    </>
                ) : (
                    <button name="edit">Edit</button>
                )}
            </form>
        </div>
    );
}

export default EditTitle;
