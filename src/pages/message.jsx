import React from 'react';
import SideBare from '../components/SideBare';

function Message(props) {
    return (
        <div className='message flex justify-between items-center '>
            <SideBare />
            <div>
                <h3>in developpemnt, a message page</h3>
            </div>
            <SideBare />
        </div>
    );
}

export default Message;