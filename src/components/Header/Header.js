import React from 'react';
import Navigation from './Navigation/Navigation';
import ArticleControls from '../Article/ArticleControls/ArticleControls';
import Logo from '../../assets/icon.png';
import classes from './Header.module.scss';

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.Header__banner}>
                <img className={classes.Header__logo} src={Logo} alt="Logo" />
                <h1 className={classes.Header__title}>Blog</h1>
            </div>
            <div className={classes.Header__controls}>
                <ArticleControls />
                <Navigation />
            </div>
        </header>
    );
}

export default Header;