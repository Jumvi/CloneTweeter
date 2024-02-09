import React from 'react';

function Layout({children}) {
    return (
        <aside className='w-full'>
            <div className="left-sidebar"/>
            {children}
            <div className="right-sidebar" />
        </aside>
    );
}

export default Layout;