import React from 'react';
import { useEffect, useState } from 'react';

let timeInterval = null;

const AppCount = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [timeCount, setTimeCount] = useState(5);

    useEffect(()=> {
        if(count === 5) {
            setLock(true);
        }
        console.log('count', count);
        return ()=> {}
    },[count])

    useEffect(()=> {
        if(lock && timeInterval === null) {
            timeInterval = setInterval(()=> {
                setTimeCount(prev => prev - 1);
            }, 1000);
        }
    }, [lock]);

    useEffect(()=> {
        if(timeCount === 0) {
            clearInterval(timeInterval);
            setCount(0);
            setLock(false);
            setTimeCount(5);
            timeInterval = null;
        }
    }, [timeCount])

    return (
        <div>
            <div id="count">{count}</div>
            <button id='btn' disabled={lock} onClick={()=> setCount(count + 1)}>
                Add {lock && `locked: ${timeCount}s`}
            </button>
        </div>
    );
}

export default AppCount;
