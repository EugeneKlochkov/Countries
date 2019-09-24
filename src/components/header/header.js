import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <svg className="flag-earth">
                    <use xlinkHref="#flag"></use>
                </svg>
                <Link to="/countries/">
                    World Countries
                </Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/countries/region/africa/">Africa</Link>
                </li>
                <li>
                    <Link to="/countries/region/americas/">Americas</Link>
                </li>
                <li>
                    <Link to="/countries/region/asia/">Asia</Link>
                </li>
                <li>
                    <Link to="/countries/region/europe/">Europe</Link>
                </li>
                <li>
                    <Link to="/countries/region/oceania/">Oceania</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;