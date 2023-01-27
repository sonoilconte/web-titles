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
        <div>
            <form onSubmit={handleFormSubmit}>
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

export default TitleForm;