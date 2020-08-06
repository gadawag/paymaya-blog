import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import classes from './Article.module.scss';

const Article = (props) => {
    return (
        <article className={classes.Article}>
            <Link to={`/post/${props.slug}`}>
                <h1 className={classes.Article__title}>{props.title}</h1>
            </Link>
            <p className={classes.Article__date}>{moment(props.date).format('LLL')}</p>
        </article>
    );
}

export default Article;