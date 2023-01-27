import React, { createContext, useState } from 'react';
import sampleTitles from '../sampleTitles';

const TitlesContext = createContext();

function Provider({ children }) {
    const [titles, setTitles] = useState(sampleTitles);

    const createTitle = (newTitle) => {
        let updatedTitles = [...titles];
        updatedTitles.push(newTitle);
        updatedTitles = updatedTitles.sort((a, b) => a.start - b.start);
        setTitles(updatedTitles);
    };

    const handleTitleUpdate = (newTitle) => {
        console.log('Updating to title', newTitle);
        const updatedTitles = titles.map((title) => {
            if (title.id === newTitle.id) {
                return newTitle;
            }
            return title;
        });
        setTitles(updatedTitles);
    };

    const handleTitleDelete = (titleToDelete) => {
        console.log('Delete it', titleToDelete);
        const updatedTitles = titles.filter((title) => title.id !== titleToDelete.id);
        setTitles(updatedTitles);
    };

    const value = {
        titles,
        createTitle,
        handleTitleUpdate,
        handleTitleDelete,
    };

    return (
        <TitlesContext.Provider value={value}>
            {children}
        </TitlesContext.Provider>
    );
}

export { Provider };
export default TitlesContext;
