import React from 'react';
import EditTitle from './EditTitle';

function EditTitleList({ titles, handleTitleUpdate, handleTitleDelete }) {
    return (
        <div>
            {titles.map((title) => (
                <EditTitle
                    key={title.id}
                    title={title}
                    handleTitleUpdate={handleTitleUpdate}
                    handleTitleDelete={handleTitleDelete}
                />
            ))}
        </div>
    );
}

export default EditTitleList;
