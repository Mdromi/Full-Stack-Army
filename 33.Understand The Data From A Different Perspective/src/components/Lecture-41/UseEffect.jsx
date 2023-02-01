import React from 'react';
import AppCount from './AppCount';
import User from './User'

const UseEffect = () => {
    return (
        <div style={{ width: '80%', margin: '0 auto', display:'flex', justifyContent: 'space-around'}}>
            <div>
                <h1>Timing Count</h1>
                <AppCount />
            </div>
            <div>
                <User />
            </div>
        </div>
    );
}

export default UseEffect;
