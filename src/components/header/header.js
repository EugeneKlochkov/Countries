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
                <Link to="/countries/region/africa/">
                    <li>Africa</li>
                </Link>
                <Link to="/countries/region/americas/">
                    <li>Americas</li>
                </Link>
                <Link to="/countries/region/asia/">
                    <li>Asia</li>
                </Link>
                <Link to="/countries/region/europe/">
                    <li>Europe</li>
                </Link>
                <Link to="/countries/region/oceania/">
                    <li>Oceania</li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;