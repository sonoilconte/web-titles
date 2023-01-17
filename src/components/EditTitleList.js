import React, { useContext } from 'react';
import TitlesContext from '../context/titles';
import EditTitle from './EditTitle';

function EditTitleList() {
    const { titles } = useContext(TitlesContext);
    return (
        <div>
            {titles.map((title) => (
                <EditTitle key={title.id} title={title} />
            ))}
        </div>
    );
}

export default EditTitleList;
