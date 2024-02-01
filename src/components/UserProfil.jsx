import React from 'react';
import Avatar from './Avatar';

function UserProfil({title}) {
    return (
        <div>
            <div className='user-title flex items-center gap-3'>
                <p>{title.isName}</p>
                <p>{title.isPastName}</p>
            </div>
            <span>{title.isPseudo}</span>
        </div>
    );
}

export default UserProfil;