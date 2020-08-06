import React from 'react';
import {withRouter} from 'react-router-dom';
import classes from './ArticleControls.module.scss';

const ArticleControls = (props) => {
    const [search, setSearch] = React.useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (search) return props.history.push(`/search/${search}`);
    }

    return (
        <div className={classes.ArticleControls}>
            <form onSubmit={(e) => submitHandler(e)}>
                <input 
                    type="text" 
                    className={classes.ArticleControls__input}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search" />
                <button className={classes.ArticleControls__submit} type="submit">Search</button>
            </form>
        </div>
    );
}

export default withRouter(ArticleControls);