import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = ({onServiceChange}) => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/">
                    Countries Directory
                </Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/region/africa/">Africa</Link>
                </li>
                <li>
                    <Link to="/region/americas/">Americas</Link>
                </li>
                <li>
                    <Link to="/region/asia/">Asia</Link>
                </li>
                <li>
                    <Link to="/region/europe/">Europe</Link>
                </li>
                <li>
                    <Link to="/region/oceania/">Oceania</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/secret">Secret</Link>
                </li>
            </ul>

            <button
                onClick={onServiceChange}
                className="btn btn-primary btn-sm">
                Change Service
            </button>
        </div>
    );
};

export default Header;