import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header({history}){
    
    return(
        <header>
            <ul className="nav nav-pills justify-content-center">
                <li className="nav-item">
                    <Link className={history.location.pathname === '/' ? ' nav-link active' : 'nav-link'}  to="/">Главная</Link>
                </li>
                <li className="nav-item">
                    <Link className={history.location.pathname === '/hookswitch' ? ' nav-link active' : 'nav-link'}to="/hookswitch">Hookswitch (useState)</Link>
                </li>
                <li className="nav-item">
                    <Link className={history.location.pathname === '/usecontext' ? ' nav-link active' : 'nav-link'}to="/usecontext">UseСontext</Link>
                </li>
                <li className="nav-item">
                    <Link className={history.location.pathname === '/useeffect' ? ' nav-link active' : 'nav-link'}to="/useeffect">UseEffect</Link>
                </li>
                

            </ul>
        </header>
    )
}

export default withRouter(Header);

