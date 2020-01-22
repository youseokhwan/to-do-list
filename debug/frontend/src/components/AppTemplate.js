import React from 'react';
import './AppTemplate.scss'
const AppTeamplte = ({children}) => {
    return (
        <div className="AppTemplate">
            <div className="title">To-do-list</div>
            <div className="content">{children}</div>   
        </div>
    );
};

export default AppTeamplte;