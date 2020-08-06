import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import Modal from '../../Modal/Modal';
import classes from './ArticleDetails.module.scss';

const ArticleDetails = (props) => {
    const [modal, setModal] = React.useState(false);

    const deleteHandler = () => {
        const postsCopy = props.posts.filter(p => p.id !== props.post.id);
        props.action(postsCopy);
    }

    return (
        <article className={classes.ArticleDetails}>
            <h1 className={classes.ArticleDetails__title}>{props.post.title}</h1>
            <p className={classes.ArticleDetails__date}>{moment(props.post.date).format('LLL')}</p>
            <p className={classes.ArticleDetails__content}>{props.post.content}</p>
            <div className={classes.ArticleDetails__controls}>
                <Link to={`/update-post/${props.post.slug}`} className={classes.ArticleDetails__update}>Update</Link>
                <button className={classes.ArticleDetails__delete} onClick={() => setModal(true)}>Delete</button>
            </div>

            {modal && 
                <Modal 
                    message='Are you sure?' 
                    cancel={setModal} 
                    proceed={deleteHandler} />
            }
        </article>
    );
}

export default ArticleDetails;