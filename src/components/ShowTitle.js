import React, { useContext, useState } from 'react';
import TitlesContext from '../context/titles';
import TitleForm from './TitleForm';
import EditTitle from './EditTitle';

function ShowTitle({ title }) {

    const { handleTitleDelete } = useContext(TitlesContext);
    const [canEdit, setCanEdit] = useState(false);

    // For now the Show is simply a disabled form but this will likely change
    // into something more interesting
    const formComponent = canEdit
        ? <EditTitle title={title} setCanEdit={setCanEdit} />
        : <TitleForm
            canEdit={false}
            start={title.start}
            handleStartChange={() => {}}
            end={title.end}
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
