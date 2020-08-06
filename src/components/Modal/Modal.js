import React from 'react';
import classes from './Modal.module.scss';

const Modal = (props) => {
    return (
        <div className={classes.Modal}>
            <div className={classes.Modal__body}>
                <p className={classes.Modal__message}>Are you sure?</p>
                <div className={classes.Modal__controls}>
                    <button className={classes.Modal__cancel} onClick={() => props.cancel(false)}>Cancel</button>
                    <button className={classes.Modal__ok} onClick={() => props.proceed()}>Yes</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;