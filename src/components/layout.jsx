import React from 'react';
import axios from 'axios';

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