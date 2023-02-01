import React from 'react';

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
            />
            <input
                disabled={!canEdit}
                onChange={handleEndChange}
                type="text"
                value={end} />
            <input
                disabled={!canEdit}
                onChange={handleTextChange}
                type="text"
                value={text} />
            {canEdit && (
                <>
                    <button>Save</button>
                </>
            )}
        </form>
    );
}

export default TitleForm;