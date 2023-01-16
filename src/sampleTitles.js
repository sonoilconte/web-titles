const createID = () => Math.floor(Math.random() * 10000);

export default [
    {
        id: createID(),
        start: 500, // timestamp in ms
        end: 3000,
        text: 'Once upon a time',
    },
    {
        id: createID(),
        start: 3300, // timestamp in ms
        end: 4600,
        text: 'in a land far away',
    },
    {
        id: createID(),
        start: 5000,
        end: 6000,
        text: 'not so long ago...',
    },
    {
        id: createID(),
        start: 7200,
        end: 11000,
        text: 'duh duh duh duh',
    },
];
