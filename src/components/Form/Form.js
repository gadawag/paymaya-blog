import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
import classes from './Form.module.scss';

const Form = (props) => {
    const DEFAULT_STATE = {
        id: props.post.id ? props.post.id : uuidv4(),
        title: props.post.title ? props.post.title : '',
        slug: props.post.slug ? props.post.slug : '',
        content: props.post.content ? props.post.content : '',
        date: props.post.date ? props.post.date : ''
    };
    
    const [state, setState] = React.useState({...DEFAULT_STATE});
    const [done, setDone] = React.useState(false);

    const clearFields = () => {
        setState({...DEFAULT_STATE});
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setDone(false);
        
        if (props.flag === 'create') {
            const newPosts = [
                ...props.posts, 
                {
                    ...state,
                    slug: slugify(state.title, {
                        replacement: '-',
                        remove: undefined,
                        lower: true 
                    }),
                    date: new Date()
                }
            ];
    
            props.action(newPosts);

            clearFields();
            setDone(true);
        }

        if (props.flag === 'update') {
            const postsCopy = [...props.posts];
            const index = postsCopy.findIndex(p => p.id === props.post.id);
            const objPostCopy = {...postsCopy[index]}

            // Change the copied object post
            objPostCopy.title = state.title;
            objPostCopy.content = state.content;

            // Update the copied Posts array
            postsCopy[index] = objPostCopy;

            // Update the posts state on App without changing the original array
            props.action(postsCopy);

            setDone(true);
        }
    }

    return (
        <form onSubmit={submitHandler} className={classes.Form}>
            <p className={classes.Form__title}>
                {(props.flag === 'create') ? 'Create Post' : 'Update Post'}
            </p>
            
            <div className={classes.Form__wrapper}>
                <div className={classes.Form__group}>
                    <input 
                        type="text"
                        className={classes.Form__input} 
                        id="title"
                        value={state.title} 
                        onChange={(e) => setState({...state, title: e.target.value})}
                        required />
                    <label className={classes.Form__label} htmlFor="title">Title</label>
                </div>
                <div className={classes.Form__group}>
                    <textarea 
                        className={classes.Form__input} 
                        id="content"
                        value={state.content} 
                        onChange={(e) => setState({...state, content: e.target.value})} 
                        rows="5"
                        required></textarea>
                    <label className={classes.Form__label} htmlFor="content">Content</label>
                </div>

                {done && 
                    <p className={classes.Form__message}>
                        {props.flag === 'create' ? 'New post created' : 'Post updated'}
                    </p>
                }
                <button type="submit" className={classes.Form__submit}>
                    {(props.flag === 'create') ? 'Post' : 'Update'}
                </button>
            </div>
        </form>
    );
}

export default Form;