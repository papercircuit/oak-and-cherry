import React from 'react';
require('../trees.gif')

const TreesBG = () => {
    return (
        <div id="trees-bg">
            <img src={require('../trees.png')} data-speed="0.1" alt="trees" />
        </div>
    );
}

export default TreesBG;