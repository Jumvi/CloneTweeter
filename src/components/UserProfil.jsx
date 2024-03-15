import React from 'react';
import Avatar from './Avatar';

function UserProfil({title}) {
    return (
        <div>
            <div className='user-title flex items-center gap-3'>
                <p>{title.users.name}</p>
                <span>{title.users.handle}</span>
            </div>
        </div>
    );
}

export default UserProfil;