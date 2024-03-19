import React from 'react';

function AvatarProfil({src}) {
    return (
        <div className='h-20 w-24  p-2' >
            <img src={src} alt="" className='rounded-full' />
        </div>
    );
}

export default AvatarProfil;