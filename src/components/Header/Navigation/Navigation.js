import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={classes.Nav}>
            <ul className={classes.Nav__list}>
                <li className={classes.Nav__item}>
                    <NavLink 
                        to="/"
                        exact
                        activeClassName={classes.Nav__active}>
                        Home
                    </NavLink>
                </li>
                <li className={classes.Nav__item}>
                    <NavLink 
                        to="/create-post"
                        exact
                        activeClassName={classes.Nav__active}>
                        Create
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;