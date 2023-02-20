import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name, arrow-body-style
const Viewer = forwardRef((props, ref) => {
    return (
        <>
            <h2>Viewer</h2>
            <div ref={ref} style={{ height: '30px' }}></div>
        </>
    );
});

export default Viewer;