import React from 'react';

function UserProfil({ title }) {
  return (
    <div>
      <div className='user-title'>
        <p>{title.isName}</p>
        <p>{title.isPastName}</p>
      </div>
      <span>{title.isPseudo}</span>
    </div>
  );
}

export default UserProfil;