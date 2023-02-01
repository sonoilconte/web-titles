import React, { useContext } from 'react';
import TitlesContext from '../context/titles';
import ShowTitle from './ShowTitle';

function TitleList() {
    const { titles } = useContext(TitlesContext);
    return (
        <div style={{ width: '700px' }}>
            {titles.map((title) => <ShowTitle key={title.id} title={title} />)}
        </div>
    );
}

export default TitleList;
