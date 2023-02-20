import React from 'react';
import {
    START_PH,
    END_PH,
    TEXT_PH,
} from '../constants';

function TitleForm({
    canEdit,
    start,
    handleStartChange,
    end,
    handleEndChange,
    text,
    handleTextChange,
    handleFormSubmit,
}) {
    return (
        <form style={{ display: 'inline-block' }} onSubmit={handleFormSubmit}>
            <input
                disabled={!canEdit}
                onChange={handleStartChange}
                type="text"
                value={start}
                placeholder={START_PH}
            />
            <input
                disabled={!canEdit}
                onChange={handleEndChange}
                type="text"
                value={end}
                placeholder={END_PH}
            />
            <input
                disabled={!canEdit}
                onChange={handleTextChange}
                type="text"
                value={text}
                placeholder={TEXT_PH}
            />
            {canEdit && (
                <>
                    <button>Save</button>
                </>
            )}
        </form>
    );
}

export default TitleForm;