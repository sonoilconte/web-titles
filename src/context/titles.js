import React, { createContext, useState } from 'react';
import sampleTitles from '../sampleTitles';

const TitlesContext = createContext();

/**
 * In the UI we always we seconds for start and end times,
 * but as soon as we store them anywhere we use milliseconds
 */

const convertToMs = (title) => ({
    ...title,
    start: title.start * 1000,
    end: title.end * 1000,
});

function Provider({ children }) {
    const [titles, setTitles] = useState(sampleTitles);

    const createTitle = (newTitle) => {
        newTitle = convertToMs(newTitle);
        let updatedTitles = [...titles];
        updatedTitles.push(newTitle);
        updatedTitles = updatedTitles.sort((a, b) => a.start - b.start);
        setTitles(updatedTitles);
    };

    const handleTitleUpdate = (newTitle) => {
        newTitle = convertToMs(newTitle);
        console.log('Updating to title', newTitle);
        newTitle.start;
        const updatedTitles = titles.map((title) => {
            if (title.id === newTitle.id) {
                return newTitle;
            }
            return title;
        });
        setTitles(updatedTitles);
    };

    const handleTitleDelete = (titleToDelete) => {
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
