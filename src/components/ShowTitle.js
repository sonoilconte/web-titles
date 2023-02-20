import React, { useContext, useState } from 'react';
import TitlesContext from '../context/titles';
import TitleForm from './TitleForm';
import EditTitle from './EditTitle';

const convertToSeconds = (title) => ({
    ...title,
    start: title.start / 1000,
    end: title.end / 1000
});

function ShowTitle({ title }) {

    const { handleTitleDelete } = useContext(TitlesContext);
    const [canEdit, setCanEdit] = useState(false);

    let formattedTitle = convertToSeconds(title);
    // For now the Show is simply a disabled form but this will likely change
    // into something more interesting
    const formComponent = canEdit
        ? <EditTitle title={formattedTitle} setCanEdit={setCanEdit} />
        : <TitleForm
            canEdit={false}
            start={formattedTitle.start}
            handleStartChange={() => {}}
            end={formattedTitle.end}
            handleEndChange={() => {}}
            text={title.text}
            handleTextChange={() => {}}
            handleFormSubmit={() => {}}
        />;

    return (
        <>
            {formComponent}
            {!canEdit && (
                <button
                    onClick={() => setCanEdit(true)}
                >
                Edit
                </button>
            )}
            <button
                style={{ marginLeft: '100px' }}
                onClick={() => handleTitleDelete(title)}
            >
                X
            </button>
        </>
    );
}

export default ShowTitle;
